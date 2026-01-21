import { IFindSimilarQuestion, IMethodsRepository, ISaveToDatabase } from "../interfaces/interfaces";
import { prisma } from "../DB/prisma.config";
import type { Classification } from "../generated/prisma/client";


const levenshtein = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
};

export class MethodsRepository implements IMethodsRepository {
    async saveToDatabase(data: ISaveToDatabase): Promise<Classification> {
        return await prisma.classification.create({
            data: {
                question: data.question,
                response: data.response,
            },
        });
    }
    async findSimilarQuestion(data: IFindSimilarQuestion): Promise<Classification | null> {
        const allQuestions = await prisma.classification.findMany({
            orderBy: {
              createdAt: 'desc',
            },
        });

        if (allQuestions.length === 0) {
            return null;
        }

        let closestMatch: Classification | null = null;
        let minDistance = Infinity;

        for (const item of allQuestions) {
            const distance = levenshtein(data.question, item.question);
            if (distance < minDistance) {
                minDistance = distance;
                closestMatch = item;
            }
        }

        // Defina um limiar de distância para considerar uma correspondência válida
        const threshold = 5; 

        return minDistance <= threshold ? closestMatch : null;
    };
}