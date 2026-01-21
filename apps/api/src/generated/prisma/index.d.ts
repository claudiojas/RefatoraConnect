
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Classification
 * 
 */
export type Classification = $Result.DefaultSelection<Prisma.$ClassificationPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model WhatsappNumber
 * 
 */
export type WhatsappNumber = $Result.DefaultSelection<Prisma.$WhatsappNumberPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ContactConfig
 * 
 */
export type ContactConfig = $Result.DefaultSelection<Prisma.$ContactConfigPayload>
/**
 * Model HistoryConfig
 * 
 */
export type HistoryConfig = $Result.DefaultSelection<Prisma.$HistoryConfigPayload>
/**
 * Model MemoryConfig
 * 
 */
export type MemoryConfig = $Result.DefaultSelection<Prisma.$MemoryConfigPayload>
/**
 * Model PricingConfig
 * 
 */
export type PricingConfig = $Result.DefaultSelection<Prisma.$PricingConfigPayload>
/**
 * Model ServicesConfig
 * 
 */
export type ServicesConfig = $Result.DefaultSelection<Prisma.$ServicesConfigPayload>
/**
 * Model SmalltalkConfig
 * 
 */
export type SmalltalkConfig = $Result.DefaultSelection<Prisma.$SmalltalkConfigPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Classifications
 * const classifications = await prisma.classification.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Classifications
   * const classifications = await prisma.classification.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.classification`: Exposes CRUD operations for the **Classification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classifications
    * const classifications = await prisma.classification.findMany()
    * ```
    */
  get classification(): Prisma.ClassificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsappNumber`: Exposes CRUD operations for the **WhatsappNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsappNumbers
    * const whatsappNumbers = await prisma.whatsappNumber.findMany()
    * ```
    */
  get whatsappNumber(): Prisma.WhatsappNumberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactConfig`: Exposes CRUD operations for the **ContactConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactConfigs
    * const contactConfigs = await prisma.contactConfig.findMany()
    * ```
    */
  get contactConfig(): Prisma.ContactConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historyConfig`: Exposes CRUD operations for the **HistoryConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryConfigs
    * const historyConfigs = await prisma.historyConfig.findMany()
    * ```
    */
  get historyConfig(): Prisma.HistoryConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memoryConfig`: Exposes CRUD operations for the **MemoryConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemoryConfigs
    * const memoryConfigs = await prisma.memoryConfig.findMany()
    * ```
    */
  get memoryConfig(): Prisma.MemoryConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingConfig`: Exposes CRUD operations for the **PricingConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingConfigs
    * const pricingConfigs = await prisma.pricingConfig.findMany()
    * ```
    */
  get pricingConfig(): Prisma.PricingConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicesConfig`: Exposes CRUD operations for the **ServicesConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicesConfigs
    * const servicesConfigs = await prisma.servicesConfig.findMany()
    * ```
    */
  get servicesConfig(): Prisma.ServicesConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.smalltalkConfig`: Exposes CRUD operations for the **SmalltalkConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmalltalkConfigs
    * const smalltalkConfigs = await prisma.smalltalkConfig.findMany()
    * ```
    */
  get smalltalkConfig(): Prisma.SmalltalkConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Classification: 'Classification',
    Client: 'Client',
    WhatsappNumber: 'WhatsappNumber',
    User: 'User',
    ContactConfig: 'ContactConfig',
    HistoryConfig: 'HistoryConfig',
    MemoryConfig: 'MemoryConfig',
    PricingConfig: 'PricingConfig',
    ServicesConfig: 'ServicesConfig',
    SmalltalkConfig: 'SmalltalkConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "classification" | "client" | "whatsappNumber" | "user" | "contactConfig" | "historyConfig" | "memoryConfig" | "pricingConfig" | "servicesConfig" | "smalltalkConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Classification: {
        payload: Prisma.$ClassificationPayload<ExtArgs>
        fields: Prisma.ClassificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          findFirst: {
            args: Prisma.ClassificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          findMany: {
            args: Prisma.ClassificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          create: {
            args: Prisma.ClassificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          createMany: {
            args: Prisma.ClassificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          delete: {
            args: Prisma.ClassificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          update: {
            args: Prisma.ClassificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          deleteMany: {
            args: Prisma.ClassificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>[]
          }
          upsert: {
            args: Prisma.ClassificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassificationPayload>
          }
          aggregate: {
            args: Prisma.ClassificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassification>
          }
          groupBy: {
            args: Prisma.ClassificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassificationCountArgs<ExtArgs>
            result: $Utils.Optional<ClassificationCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      WhatsappNumber: {
        payload: Prisma.$WhatsappNumberPayload<ExtArgs>
        fields: Prisma.WhatsappNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsappNumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsappNumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>
          }
          findFirst: {
            args: Prisma.WhatsappNumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsappNumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>
          }
          findMany: {
            args: Prisma.WhatsappNumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>[]
          }
          create: {
            args: Prisma.WhatsappNumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>
          }
          createMany: {
            args: Prisma.WhatsappNumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsappNumberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>[]
          }
          delete: {
            args: Prisma.WhatsappNumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>
          }
          update: {
            args: Prisma.WhatsappNumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>
          }
          deleteMany: {
            args: Prisma.WhatsappNumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsappNumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsappNumberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>[]
          }
          upsert: {
            args: Prisma.WhatsappNumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsappNumberPayload>
          }
          aggregate: {
            args: Prisma.WhatsappNumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsappNumber>
          }
          groupBy: {
            args: Prisma.WhatsappNumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsappNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsappNumberCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsappNumberCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ContactConfig: {
        payload: Prisma.$ContactConfigPayload<ExtArgs>
        fields: Prisma.ContactConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>
          }
          findFirst: {
            args: Prisma.ContactConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>
          }
          findMany: {
            args: Prisma.ContactConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>[]
          }
          create: {
            args: Prisma.ContactConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>
          }
          createMany: {
            args: Prisma.ContactConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>[]
          }
          delete: {
            args: Prisma.ContactConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>
          }
          update: {
            args: Prisma.ContactConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>
          }
          deleteMany: {
            args: Prisma.ContactConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>[]
          }
          upsert: {
            args: Prisma.ContactConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactConfigPayload>
          }
          aggregate: {
            args: Prisma.ContactConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactConfig>
          }
          groupBy: {
            args: Prisma.ContactConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ContactConfigCountAggregateOutputType> | number
          }
        }
      }
      HistoryConfig: {
        payload: Prisma.$HistoryConfigPayload<ExtArgs>
        fields: Prisma.HistoryConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>
          }
          findFirst: {
            args: Prisma.HistoryConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>
          }
          findMany: {
            args: Prisma.HistoryConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>[]
          }
          create: {
            args: Prisma.HistoryConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>
          }
          createMany: {
            args: Prisma.HistoryConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>[]
          }
          delete: {
            args: Prisma.HistoryConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>
          }
          update: {
            args: Prisma.HistoryConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>
          }
          deleteMany: {
            args: Prisma.HistoryConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>[]
          }
          upsert: {
            args: Prisma.HistoryConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryConfigPayload>
          }
          aggregate: {
            args: Prisma.HistoryConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryConfig>
          }
          groupBy: {
            args: Prisma.HistoryConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryConfigCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryConfigCountAggregateOutputType> | number
          }
        }
      }
      MemoryConfig: {
        payload: Prisma.$MemoryConfigPayload<ExtArgs>
        fields: Prisma.MemoryConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemoryConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemoryConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>
          }
          findFirst: {
            args: Prisma.MemoryConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemoryConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>
          }
          findMany: {
            args: Prisma.MemoryConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>[]
          }
          create: {
            args: Prisma.MemoryConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>
          }
          createMany: {
            args: Prisma.MemoryConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemoryConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>[]
          }
          delete: {
            args: Prisma.MemoryConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>
          }
          update: {
            args: Prisma.MemoryConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>
          }
          deleteMany: {
            args: Prisma.MemoryConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemoryConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemoryConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>[]
          }
          upsert: {
            args: Prisma.MemoryConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryConfigPayload>
          }
          aggregate: {
            args: Prisma.MemoryConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemoryConfig>
          }
          groupBy: {
            args: Prisma.MemoryConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoryConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemoryConfigCountArgs<ExtArgs>
            result: $Utils.Optional<MemoryConfigCountAggregateOutputType> | number
          }
        }
      }
      PricingConfig: {
        payload: Prisma.$PricingConfigPayload<ExtArgs>
        fields: Prisma.PricingConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>
          }
          findFirst: {
            args: Prisma.PricingConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>
          }
          findMany: {
            args: Prisma.PricingConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>[]
          }
          create: {
            args: Prisma.PricingConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>
          }
          createMany: {
            args: Prisma.PricingConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>[]
          }
          delete: {
            args: Prisma.PricingConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>
          }
          update: {
            args: Prisma.PricingConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>
          }
          deleteMany: {
            args: Prisma.PricingConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>[]
          }
          upsert: {
            args: Prisma.PricingConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingConfigPayload>
          }
          aggregate: {
            args: Prisma.PricingConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingConfig>
          }
          groupBy: {
            args: Prisma.PricingConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingConfigCountArgs<ExtArgs>
            result: $Utils.Optional<PricingConfigCountAggregateOutputType> | number
          }
        }
      }
      ServicesConfig: {
        payload: Prisma.$ServicesConfigPayload<ExtArgs>
        fields: Prisma.ServicesConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicesConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicesConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>
          }
          findFirst: {
            args: Prisma.ServicesConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicesConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>
          }
          findMany: {
            args: Prisma.ServicesConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>[]
          }
          create: {
            args: Prisma.ServicesConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>
          }
          createMany: {
            args: Prisma.ServicesConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicesConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>[]
          }
          delete: {
            args: Prisma.ServicesConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>
          }
          update: {
            args: Prisma.ServicesConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>
          }
          deleteMany: {
            args: Prisma.ServicesConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicesConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicesConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>[]
          }
          upsert: {
            args: Prisma.ServicesConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesConfigPayload>
          }
          aggregate: {
            args: Prisma.ServicesConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicesConfig>
          }
          groupBy: {
            args: Prisma.ServicesConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicesConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesConfigCountAggregateOutputType> | number
          }
        }
      }
      SmalltalkConfig: {
        payload: Prisma.$SmalltalkConfigPayload<ExtArgs>
        fields: Prisma.SmalltalkConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmalltalkConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmalltalkConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>
          }
          findFirst: {
            args: Prisma.SmalltalkConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmalltalkConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>
          }
          findMany: {
            args: Prisma.SmalltalkConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>[]
          }
          create: {
            args: Prisma.SmalltalkConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>
          }
          createMany: {
            args: Prisma.SmalltalkConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmalltalkConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>[]
          }
          delete: {
            args: Prisma.SmalltalkConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>
          }
          update: {
            args: Prisma.SmalltalkConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>
          }
          deleteMany: {
            args: Prisma.SmalltalkConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmalltalkConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SmalltalkConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>[]
          }
          upsert: {
            args: Prisma.SmalltalkConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmalltalkConfigPayload>
          }
          aggregate: {
            args: Prisma.SmalltalkConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmalltalkConfig>
          }
          groupBy: {
            args: Prisma.SmalltalkConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmalltalkConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmalltalkConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SmalltalkConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    classification?: ClassificationOmit
    client?: ClientOmit
    whatsappNumber?: WhatsappNumberOmit
    user?: UserOmit
    contactConfig?: ContactConfigOmit
    historyConfig?: HistoryConfigOmit
    memoryConfig?: MemoryConfigOmit
    pricingConfig?: PricingConfigOmit
    servicesConfig?: ServicesConfigOmit
    smalltalkConfig?: SmalltalkConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    contactConfig: number
    historyConfig: number
    memoryConfig: number
    pricingConfig: number
    servicesConfig: number
    smalltalkConfig: number
    users: number
    whatsappNumbers: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactConfig?: boolean | ClientCountOutputTypeCountContactConfigArgs
    historyConfig?: boolean | ClientCountOutputTypeCountHistoryConfigArgs
    memoryConfig?: boolean | ClientCountOutputTypeCountMemoryConfigArgs
    pricingConfig?: boolean | ClientCountOutputTypeCountPricingConfigArgs
    servicesConfig?: boolean | ClientCountOutputTypeCountServicesConfigArgs
    smalltalkConfig?: boolean | ClientCountOutputTypeCountSmalltalkConfigArgs
    users?: boolean | ClientCountOutputTypeCountUsersArgs
    whatsappNumbers?: boolean | ClientCountOutputTypeCountWhatsappNumbersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountContactConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactConfigWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountHistoryConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryConfigWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountMemoryConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryConfigWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountPricingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingConfigWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountServicesConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesConfigWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSmalltalkConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmalltalkConfigWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountWhatsappNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappNumberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Classification
   */

  export type AggregateClassification = {
    _count: ClassificationCountAggregateOutputType | null
    _avg: ClassificationAvgAggregateOutputType | null
    _sum: ClassificationSumAggregateOutputType | null
    _min: ClassificationMinAggregateOutputType | null
    _max: ClassificationMaxAggregateOutputType | null
  }

  export type ClassificationAvgAggregateOutputType = {
    id: number | null
  }

  export type ClassificationSumAggregateOutputType = {
    id: number | null
  }

  export type ClassificationMinAggregateOutputType = {
    id: number | null
    question: string | null
    response: string | null
    createdAt: Date | null
  }

  export type ClassificationMaxAggregateOutputType = {
    id: number | null
    question: string | null
    response: string | null
    createdAt: Date | null
  }

  export type ClassificationCountAggregateOutputType = {
    id: number
    question: number
    response: number
    createdAt: number
    _all: number
  }


  export type ClassificationAvgAggregateInputType = {
    id?: true
  }

  export type ClassificationSumAggregateInputType = {
    id?: true
  }

  export type ClassificationMinAggregateInputType = {
    id?: true
    question?: true
    response?: true
    createdAt?: true
  }

  export type ClassificationMaxAggregateInputType = {
    id?: true
    question?: true
    response?: true
    createdAt?: true
  }

  export type ClassificationCountAggregateInputType = {
    id?: true
    question?: true
    response?: true
    createdAt?: true
    _all?: true
  }

  export type ClassificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classification to aggregate.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classifications
    **/
    _count?: true | ClassificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassificationMaxAggregateInputType
  }

  export type GetClassificationAggregateType<T extends ClassificationAggregateArgs> = {
        [P in keyof T & keyof AggregateClassification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassification[P]>
      : GetScalarType<T[P], AggregateClassification[P]>
  }




  export type ClassificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassificationWhereInput
    orderBy?: ClassificationOrderByWithAggregationInput | ClassificationOrderByWithAggregationInput[]
    by: ClassificationScalarFieldEnum[] | ClassificationScalarFieldEnum
    having?: ClassificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassificationCountAggregateInputType | true
    _avg?: ClassificationAvgAggregateInputType
    _sum?: ClassificationSumAggregateInputType
    _min?: ClassificationMinAggregateInputType
    _max?: ClassificationMaxAggregateInputType
  }

  export type ClassificationGroupByOutputType = {
    id: number
    question: string
    response: string
    createdAt: Date
    _count: ClassificationCountAggregateOutputType | null
    _avg: ClassificationAvgAggregateOutputType | null
    _sum: ClassificationSumAggregateOutputType | null
    _min: ClassificationMinAggregateOutputType | null
    _max: ClassificationMaxAggregateOutputType | null
  }

  type GetClassificationGroupByPayload<T extends ClassificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassificationGroupByOutputType[P]>
            : GetScalarType<T[P], ClassificationGroupByOutputType[P]>
        }
      >
    >


  export type ClassificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    response?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["classification"]>

  export type ClassificationSelectScalar = {
    id?: boolean
    question?: boolean
    response?: boolean
    createdAt?: boolean
  }

  export type ClassificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "response" | "createdAt", ExtArgs["result"]["classification"]>

  export type $ClassificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      response: string
      createdAt: Date
    }, ExtArgs["result"]["classification"]>
    composites: {}
  }

  type ClassificationGetPayload<S extends boolean | null | undefined | ClassificationDefaultArgs> = $Result.GetResult<Prisma.$ClassificationPayload, S>

  type ClassificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassificationCountAggregateInputType | true
    }

  export interface ClassificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classification'], meta: { name: 'Classification' } }
    /**
     * Find zero or one Classification that matches the filter.
     * @param {ClassificationFindUniqueArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassificationFindUniqueArgs>(args: SelectSubset<T, ClassificationFindUniqueArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassificationFindUniqueOrThrowArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindFirstArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassificationFindFirstArgs>(args?: SelectSubset<T, ClassificationFindFirstArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindFirstOrThrowArgs} args - Arguments to find a Classification
     * @example
     * // Get one Classification
     * const classification = await prisma.classification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classifications
     * const classifications = await prisma.classification.findMany()
     * 
     * // Get first 10 Classifications
     * const classifications = await prisma.classification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classificationWithIdOnly = await prisma.classification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassificationFindManyArgs>(args?: SelectSubset<T, ClassificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classification.
     * @param {ClassificationCreateArgs} args - Arguments to create a Classification.
     * @example
     * // Create one Classification
     * const Classification = await prisma.classification.create({
     *   data: {
     *     // ... data to create a Classification
     *   }
     * })
     * 
     */
    create<T extends ClassificationCreateArgs>(args: SelectSubset<T, ClassificationCreateArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classifications.
     * @param {ClassificationCreateManyArgs} args - Arguments to create many Classifications.
     * @example
     * // Create many Classifications
     * const classification = await prisma.classification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassificationCreateManyArgs>(args?: SelectSubset<T, ClassificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classifications and returns the data saved in the database.
     * @param {ClassificationCreateManyAndReturnArgs} args - Arguments to create many Classifications.
     * @example
     * // Create many Classifications
     * const classification = await prisma.classification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classifications and only return the `id`
     * const classificationWithIdOnly = await prisma.classification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classification.
     * @param {ClassificationDeleteArgs} args - Arguments to delete one Classification.
     * @example
     * // Delete one Classification
     * const Classification = await prisma.classification.delete({
     *   where: {
     *     // ... filter to delete one Classification
     *   }
     * })
     * 
     */
    delete<T extends ClassificationDeleteArgs>(args: SelectSubset<T, ClassificationDeleteArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classification.
     * @param {ClassificationUpdateArgs} args - Arguments to update one Classification.
     * @example
     * // Update one Classification
     * const classification = await prisma.classification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassificationUpdateArgs>(args: SelectSubset<T, ClassificationUpdateArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classifications.
     * @param {ClassificationDeleteManyArgs} args - Arguments to filter Classifications to delete.
     * @example
     * // Delete a few Classifications
     * const { count } = await prisma.classification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassificationDeleteManyArgs>(args?: SelectSubset<T, ClassificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classifications
     * const classification = await prisma.classification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassificationUpdateManyArgs>(args: SelectSubset<T, ClassificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifications and returns the data updated in the database.
     * @param {ClassificationUpdateManyAndReturnArgs} args - Arguments to update many Classifications.
     * @example
     * // Update many Classifications
     * const classification = await prisma.classification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classifications and only return the `id`
     * const classificationWithIdOnly = await prisma.classification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classification.
     * @param {ClassificationUpsertArgs} args - Arguments to update or create a Classification.
     * @example
     * // Update or create a Classification
     * const classification = await prisma.classification.upsert({
     *   create: {
     *     // ... data to create a Classification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classification we want to update
     *   }
     * })
     */
    upsert<T extends ClassificationUpsertArgs>(args: SelectSubset<T, ClassificationUpsertArgs<ExtArgs>>): Prisma__ClassificationClient<$Result.GetResult<Prisma.$ClassificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationCountArgs} args - Arguments to filter Classifications to count.
     * @example
     * // Count the number of Classifications
     * const count = await prisma.classification.count({
     *   where: {
     *     // ... the filter for the Classifications we want to count
     *   }
     * })
    **/
    count<T extends ClassificationCountArgs>(
      args?: Subset<T, ClassificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassificationAggregateArgs>(args: Subset<T, ClassificationAggregateArgs>): Prisma.PrismaPromise<GetClassificationAggregateType<T>>

    /**
     * Group by Classification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassificationGroupByArgs['orderBy'] }
        : { orderBy?: ClassificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classification model
   */
  readonly fields: ClassificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classification model
   */
  interface ClassificationFieldRefs {
    readonly id: FieldRef<"Classification", 'Int'>
    readonly question: FieldRef<"Classification", 'String'>
    readonly response: FieldRef<"Classification", 'String'>
    readonly createdAt: FieldRef<"Classification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classification findUnique
   */
  export type ClassificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification findUniqueOrThrow
   */
  export type ClassificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification findFirst
   */
  export type ClassificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification findFirstOrThrow
   */
  export type ClassificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Filter, which Classification to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifications.
     */
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification findMany
   */
  export type ClassificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Filter, which Classifications to fetch.
     */
    where?: ClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifications to fetch.
     */
    orderBy?: ClassificationOrderByWithRelationInput | ClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classifications.
     */
    cursor?: ClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifications.
     */
    skip?: number
    distinct?: ClassificationScalarFieldEnum | ClassificationScalarFieldEnum[]
  }

  /**
   * Classification create
   */
  export type ClassificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Classification.
     */
    data: XOR<ClassificationCreateInput, ClassificationUncheckedCreateInput>
  }

  /**
   * Classification createMany
   */
  export type ClassificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classifications.
     */
    data: ClassificationCreateManyInput | ClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classification createManyAndReturn
   */
  export type ClassificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data used to create many Classifications.
     */
    data: ClassificationCreateManyInput | ClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classification update
   */
  export type ClassificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Classification.
     */
    data: XOR<ClassificationUpdateInput, ClassificationUncheckedUpdateInput>
    /**
     * Choose, which Classification to update.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification updateMany
   */
  export type ClassificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classifications.
     */
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyInput>
    /**
     * Filter which Classifications to update
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to update.
     */
    limit?: number
  }

  /**
   * Classification updateManyAndReturn
   */
  export type ClassificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The data used to update Classifications.
     */
    data: XOR<ClassificationUpdateManyMutationInput, ClassificationUncheckedUpdateManyInput>
    /**
     * Filter which Classifications to update
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to update.
     */
    limit?: number
  }

  /**
   * Classification upsert
   */
  export type ClassificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Classification to update in case it exists.
     */
    where: ClassificationWhereUniqueInput
    /**
     * In case the Classification found by the `where` argument doesn't exist, create a new Classification with this data.
     */
    create: XOR<ClassificationCreateInput, ClassificationUncheckedCreateInput>
    /**
     * In case the Classification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassificationUpdateInput, ClassificationUncheckedUpdateInput>
  }

  /**
   * Classification delete
   */
  export type ClassificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
    /**
     * Filter which Classification to delete.
     */
    where: ClassificationWhereUniqueInput
  }

  /**
   * Classification deleteMany
   */
  export type ClassificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classifications to delete
     */
    where?: ClassificationWhereInput
    /**
     * Limit how many Classifications to delete.
     */
    limit?: number
  }

  /**
   * Classification without action
   */
  export type ClassificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classification
     */
    select?: ClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classification
     */
    omit?: ClassificationOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    companyName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    whatsappAccessToken: string | null
    whatsappPhoneNumberId: string | null
    whatsappBusinessId: string | null
    onboardingCompleted: boolean | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    companyName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    whatsappAccessToken: string | null
    whatsappPhoneNumberId: string | null
    whatsappBusinessId: string | null
    onboardingCompleted: boolean | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    companyName: number
    createdAt: number
    updatedAt: number
    whatsappAccessToken: number
    whatsappPhoneNumberId: number
    whatsappBusinessId: number
    onboardingCompleted: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    createdAt?: true
    updatedAt?: true
    whatsappAccessToken?: true
    whatsappPhoneNumberId?: true
    whatsappBusinessId?: true
    onboardingCompleted?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    createdAt?: true
    updatedAt?: true
    whatsappAccessToken?: true
    whatsappPhoneNumberId?: true
    whatsappBusinessId?: true
    onboardingCompleted?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    companyName?: true
    createdAt?: true
    updatedAt?: true
    whatsappAccessToken?: true
    whatsappPhoneNumberId?: true
    whatsappBusinessId?: true
    onboardingCompleted?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    email: string
    companyName: string
    createdAt: Date
    updatedAt: Date
    whatsappAccessToken: string | null
    whatsappPhoneNumberId: string | null
    whatsappBusinessId: string | null
    onboardingCompleted: boolean
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whatsappAccessToken?: boolean
    whatsappPhoneNumberId?: boolean
    whatsappBusinessId?: boolean
    onboardingCompleted?: boolean
    contactConfig?: boolean | Client$contactConfigArgs<ExtArgs>
    historyConfig?: boolean | Client$historyConfigArgs<ExtArgs>
    memoryConfig?: boolean | Client$memoryConfigArgs<ExtArgs>
    pricingConfig?: boolean | Client$pricingConfigArgs<ExtArgs>
    servicesConfig?: boolean | Client$servicesConfigArgs<ExtArgs>
    smalltalkConfig?: boolean | Client$smalltalkConfigArgs<ExtArgs>
    users?: boolean | Client$usersArgs<ExtArgs>
    whatsappNumbers?: boolean | Client$whatsappNumbersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whatsappAccessToken?: boolean
    whatsappPhoneNumberId?: boolean
    whatsappBusinessId?: boolean
    onboardingCompleted?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whatsappAccessToken?: boolean
    whatsappPhoneNumberId?: boolean
    whatsappBusinessId?: boolean
    onboardingCompleted?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    companyName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    whatsappAccessToken?: boolean
    whatsappPhoneNumberId?: boolean
    whatsappBusinessId?: boolean
    onboardingCompleted?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "companyName" | "createdAt" | "updatedAt" | "whatsappAccessToken" | "whatsappPhoneNumberId" | "whatsappBusinessId" | "onboardingCompleted", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactConfig?: boolean | Client$contactConfigArgs<ExtArgs>
    historyConfig?: boolean | Client$historyConfigArgs<ExtArgs>
    memoryConfig?: boolean | Client$memoryConfigArgs<ExtArgs>
    pricingConfig?: boolean | Client$pricingConfigArgs<ExtArgs>
    servicesConfig?: boolean | Client$servicesConfigArgs<ExtArgs>
    smalltalkConfig?: boolean | Client$smalltalkConfigArgs<ExtArgs>
    users?: boolean | Client$usersArgs<ExtArgs>
    whatsappNumbers?: boolean | Client$whatsappNumbersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      contactConfig: Prisma.$ContactConfigPayload<ExtArgs>[]
      historyConfig: Prisma.$HistoryConfigPayload<ExtArgs>[]
      memoryConfig: Prisma.$MemoryConfigPayload<ExtArgs>[]
      pricingConfig: Prisma.$PricingConfigPayload<ExtArgs>[]
      servicesConfig: Prisma.$ServicesConfigPayload<ExtArgs>[]
      smalltalkConfig: Prisma.$SmalltalkConfigPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      whatsappNumbers: Prisma.$WhatsappNumberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      companyName: string
      createdAt: Date
      updatedAt: Date
      whatsappAccessToken: string | null
      whatsappPhoneNumberId: string | null
      whatsappBusinessId: string | null
      onboardingCompleted: boolean
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactConfig<T extends Client$contactConfigArgs<ExtArgs> = {}>(args?: Subset<T, Client$contactConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historyConfig<T extends Client$historyConfigArgs<ExtArgs> = {}>(args?: Subset<T, Client$historyConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memoryConfig<T extends Client$memoryConfigArgs<ExtArgs> = {}>(args?: Subset<T, Client$memoryConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pricingConfig<T extends Client$pricingConfigArgs<ExtArgs> = {}>(args?: Subset<T, Client$pricingConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicesConfig<T extends Client$servicesConfigArgs<ExtArgs> = {}>(args?: Subset<T, Client$servicesConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    smalltalkConfig<T extends Client$smalltalkConfigArgs<ExtArgs> = {}>(args?: Subset<T, Client$smalltalkConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Client$usersArgs<ExtArgs> = {}>(args?: Subset<T, Client$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whatsappNumbers<T extends Client$whatsappNumbersArgs<ExtArgs> = {}>(args?: Subset<T, Client$whatsappNumbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly companyName: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly whatsappAccessToken: FieldRef<"Client", 'String'>
    readonly whatsappPhoneNumberId: FieldRef<"Client", 'String'>
    readonly whatsappBusinessId: FieldRef<"Client", 'String'>
    readonly onboardingCompleted: FieldRef<"Client", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.contactConfig
   */
  export type Client$contactConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    where?: ContactConfigWhereInput
    orderBy?: ContactConfigOrderByWithRelationInput | ContactConfigOrderByWithRelationInput[]
    cursor?: ContactConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactConfigScalarFieldEnum | ContactConfigScalarFieldEnum[]
  }

  /**
   * Client.historyConfig
   */
  export type Client$historyConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    where?: HistoryConfigWhereInput
    orderBy?: HistoryConfigOrderByWithRelationInput | HistoryConfigOrderByWithRelationInput[]
    cursor?: HistoryConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryConfigScalarFieldEnum | HistoryConfigScalarFieldEnum[]
  }

  /**
   * Client.memoryConfig
   */
  export type Client$memoryConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    where?: MemoryConfigWhereInput
    orderBy?: MemoryConfigOrderByWithRelationInput | MemoryConfigOrderByWithRelationInput[]
    cursor?: MemoryConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoryConfigScalarFieldEnum | MemoryConfigScalarFieldEnum[]
  }

  /**
   * Client.pricingConfig
   */
  export type Client$pricingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    where?: PricingConfigWhereInput
    orderBy?: PricingConfigOrderByWithRelationInput | PricingConfigOrderByWithRelationInput[]
    cursor?: PricingConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingConfigScalarFieldEnum | PricingConfigScalarFieldEnum[]
  }

  /**
   * Client.servicesConfig
   */
  export type Client$servicesConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    where?: ServicesConfigWhereInput
    orderBy?: ServicesConfigOrderByWithRelationInput | ServicesConfigOrderByWithRelationInput[]
    cursor?: ServicesConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicesConfigScalarFieldEnum | ServicesConfigScalarFieldEnum[]
  }

  /**
   * Client.smalltalkConfig
   */
  export type Client$smalltalkConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    where?: SmalltalkConfigWhereInput
    orderBy?: SmalltalkConfigOrderByWithRelationInput | SmalltalkConfigOrderByWithRelationInput[]
    cursor?: SmalltalkConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SmalltalkConfigScalarFieldEnum | SmalltalkConfigScalarFieldEnum[]
  }

  /**
   * Client.users
   */
  export type Client$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Client.whatsappNumbers
   */
  export type Client$whatsappNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    where?: WhatsappNumberWhereInput
    orderBy?: WhatsappNumberOrderByWithRelationInput | WhatsappNumberOrderByWithRelationInput[]
    cursor?: WhatsappNumberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsappNumberScalarFieldEnum | WhatsappNumberScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model WhatsappNumber
   */

  export type AggregateWhatsappNumber = {
    _count: WhatsappNumberCountAggregateOutputType | null
    _min: WhatsappNumberMinAggregateOutputType | null
    _max: WhatsappNumberMaxAggregateOutputType | null
  }

  export type WhatsappNumberMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappNumberMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsappNumberCountAggregateOutputType = {
    id: number
    phoneNumber: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsappNumberMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappNumberMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsappNumberCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsappNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappNumber to aggregate.
     */
    where?: WhatsappNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappNumbers to fetch.
     */
    orderBy?: WhatsappNumberOrderByWithRelationInput | WhatsappNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsappNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsappNumbers
    **/
    _count?: true | WhatsappNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsappNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsappNumberMaxAggregateInputType
  }

  export type GetWhatsappNumberAggregateType<T extends WhatsappNumberAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsappNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsappNumber[P]>
      : GetScalarType<T[P], AggregateWhatsappNumber[P]>
  }




  export type WhatsappNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsappNumberWhereInput
    orderBy?: WhatsappNumberOrderByWithAggregationInput | WhatsappNumberOrderByWithAggregationInput[]
    by: WhatsappNumberScalarFieldEnum[] | WhatsappNumberScalarFieldEnum
    having?: WhatsappNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsappNumberCountAggregateInputType | true
    _min?: WhatsappNumberMinAggregateInputType
    _max?: WhatsappNumberMaxAggregateInputType
  }

  export type WhatsappNumberGroupByOutputType = {
    id: string
    phoneNumber: string
    clientId: string
    createdAt: Date
    updatedAt: Date
    _count: WhatsappNumberCountAggregateOutputType | null
    _min: WhatsappNumberMinAggregateOutputType | null
    _max: WhatsappNumberMaxAggregateOutputType | null
  }

  type GetWhatsappNumberGroupByPayload<T extends WhatsappNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsappNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsappNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsappNumberGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsappNumberGroupByOutputType[P]>
        }
      >
    >


  export type WhatsappNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappNumber"]>

  export type WhatsappNumberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappNumber"]>

  export type WhatsappNumberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsappNumber"]>

  export type WhatsappNumberSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsappNumberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phoneNumber" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsappNumber"]>
  export type WhatsappNumberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type WhatsappNumberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type WhatsappNumberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $WhatsappNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsappNumber"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string
      clientId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsappNumber"]>
    composites: {}
  }

  type WhatsappNumberGetPayload<S extends boolean | null | undefined | WhatsappNumberDefaultArgs> = $Result.GetResult<Prisma.$WhatsappNumberPayload, S>

  type WhatsappNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsappNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsappNumberCountAggregateInputType | true
    }

  export interface WhatsappNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsappNumber'], meta: { name: 'WhatsappNumber' } }
    /**
     * Find zero or one WhatsappNumber that matches the filter.
     * @param {WhatsappNumberFindUniqueArgs} args - Arguments to find a WhatsappNumber
     * @example
     * // Get one WhatsappNumber
     * const whatsappNumber = await prisma.whatsappNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsappNumberFindUniqueArgs>(args: SelectSubset<T, WhatsappNumberFindUniqueArgs<ExtArgs>>): Prisma__WhatsappNumberClient<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhatsappNumber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsappNumberFindUniqueOrThrowArgs} args - Arguments to find a WhatsappNumber
     * @example
     * // Get one WhatsappNumber
     * const whatsappNumber = await prisma.whatsappNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsappNumberFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsappNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsappNumberClient<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappNumberFindFirstArgs} args - Arguments to find a WhatsappNumber
     * @example
     * // Get one WhatsappNumber
     * const whatsappNumber = await prisma.whatsappNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsappNumberFindFirstArgs>(args?: SelectSubset<T, WhatsappNumberFindFirstArgs<ExtArgs>>): Prisma__WhatsappNumberClient<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhatsappNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappNumberFindFirstOrThrowArgs} args - Arguments to find a WhatsappNumber
     * @example
     * // Get one WhatsappNumber
     * const whatsappNumber = await prisma.whatsappNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsappNumberFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsappNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsappNumberClient<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhatsappNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappNumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsappNumbers
     * const whatsappNumbers = await prisma.whatsappNumber.findMany()
     * 
     * // Get first 10 WhatsappNumbers
     * const whatsappNumbers = await prisma.whatsappNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsappNumberWithIdOnly = await prisma.whatsappNumber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsappNumberFindManyArgs>(args?: SelectSubset<T, WhatsappNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhatsappNumber.
     * @param {WhatsappNumberCreateArgs} args - Arguments to create a WhatsappNumber.
     * @example
     * // Create one WhatsappNumber
     * const WhatsappNumber = await prisma.whatsappNumber.create({
     *   data: {
     *     // ... data to create a WhatsappNumber
     *   }
     * })
     * 
     */
    create<T extends WhatsappNumberCreateArgs>(args: SelectSubset<T, WhatsappNumberCreateArgs<ExtArgs>>): Prisma__WhatsappNumberClient<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhatsappNumbers.
     * @param {WhatsappNumberCreateManyArgs} args - Arguments to create many WhatsappNumbers.
     * @example
     * // Create many WhatsappNumbers
     * const whatsappNumber = await prisma.whatsappNumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsappNumberCreateManyArgs>(args?: SelectSubset<T, WhatsappNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsappNumbers and returns the data saved in the database.
     * @param {WhatsappNumberCreateManyAndReturnArgs} args - Arguments to create many WhatsappNumbers.
     * @example
     * // Create many WhatsappNumbers
     * const whatsappNumber = await prisma.whatsappNumber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsappNumbers and only return the `id`
     * const whatsappNumberWithIdOnly = await prisma.whatsappNumber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsappNumberCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsappNumberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhatsappNumber.
     * @param {WhatsappNumberDeleteArgs} args - Arguments to delete one WhatsappNumber.
     * @example
     * // Delete one WhatsappNumber
     * const WhatsappNumber = await prisma.whatsappNumber.delete({
     *   where: {
     *     // ... filter to delete one WhatsappNumber
     *   }
     * })
     * 
     */
    delete<T extends WhatsappNumberDeleteArgs>(args: SelectSubset<T, WhatsappNumberDeleteArgs<ExtArgs>>): Prisma__WhatsappNumberClient<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhatsappNumber.
     * @param {WhatsappNumberUpdateArgs} args - Arguments to update one WhatsappNumber.
     * @example
     * // Update one WhatsappNumber
     * const whatsappNumber = await prisma.whatsappNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsappNumberUpdateArgs>(args: SelectSubset<T, WhatsappNumberUpdateArgs<ExtArgs>>): Prisma__WhatsappNumberClient<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhatsappNumbers.
     * @param {WhatsappNumberDeleteManyArgs} args - Arguments to filter WhatsappNumbers to delete.
     * @example
     * // Delete a few WhatsappNumbers
     * const { count } = await prisma.whatsappNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsappNumberDeleteManyArgs>(args?: SelectSubset<T, WhatsappNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsappNumbers
     * const whatsappNumber = await prisma.whatsappNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsappNumberUpdateManyArgs>(args: SelectSubset<T, WhatsappNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsappNumbers and returns the data updated in the database.
     * @param {WhatsappNumberUpdateManyAndReturnArgs} args - Arguments to update many WhatsappNumbers.
     * @example
     * // Update many WhatsappNumbers
     * const whatsappNumber = await prisma.whatsappNumber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsappNumbers and only return the `id`
     * const whatsappNumberWithIdOnly = await prisma.whatsappNumber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsappNumberUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsappNumberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhatsappNumber.
     * @param {WhatsappNumberUpsertArgs} args - Arguments to update or create a WhatsappNumber.
     * @example
     * // Update or create a WhatsappNumber
     * const whatsappNumber = await prisma.whatsappNumber.upsert({
     *   create: {
     *     // ... data to create a WhatsappNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsappNumber we want to update
     *   }
     * })
     */
    upsert<T extends WhatsappNumberUpsertArgs>(args: SelectSubset<T, WhatsappNumberUpsertArgs<ExtArgs>>): Prisma__WhatsappNumberClient<$Result.GetResult<Prisma.$WhatsappNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhatsappNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappNumberCountArgs} args - Arguments to filter WhatsappNumbers to count.
     * @example
     * // Count the number of WhatsappNumbers
     * const count = await prisma.whatsappNumber.count({
     *   where: {
     *     // ... the filter for the WhatsappNumbers we want to count
     *   }
     * })
    **/
    count<T extends WhatsappNumberCountArgs>(
      args?: Subset<T, WhatsappNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsappNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsappNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhatsappNumberAggregateArgs>(args: Subset<T, WhatsappNumberAggregateArgs>): Prisma.PrismaPromise<GetWhatsappNumberAggregateType<T>>

    /**
     * Group by WhatsappNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsappNumberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhatsappNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsappNumberGroupByArgs['orderBy'] }
        : { orderBy?: WhatsappNumberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhatsappNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsappNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsappNumber model
   */
  readonly fields: WhatsappNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsappNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsappNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WhatsappNumber model
   */
  interface WhatsappNumberFieldRefs {
    readonly id: FieldRef<"WhatsappNumber", 'String'>
    readonly phoneNumber: FieldRef<"WhatsappNumber", 'String'>
    readonly clientId: FieldRef<"WhatsappNumber", 'String'>
    readonly createdAt: FieldRef<"WhatsappNumber", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsappNumber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsappNumber findUnique
   */
  export type WhatsappNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappNumber to fetch.
     */
    where: WhatsappNumberWhereUniqueInput
  }

  /**
   * WhatsappNumber findUniqueOrThrow
   */
  export type WhatsappNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappNumber to fetch.
     */
    where: WhatsappNumberWhereUniqueInput
  }

  /**
   * WhatsappNumber findFirst
   */
  export type WhatsappNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappNumber to fetch.
     */
    where?: WhatsappNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappNumbers to fetch.
     */
    orderBy?: WhatsappNumberOrderByWithRelationInput | WhatsappNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappNumbers.
     */
    cursor?: WhatsappNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappNumbers.
     */
    distinct?: WhatsappNumberScalarFieldEnum | WhatsappNumberScalarFieldEnum[]
  }

  /**
   * WhatsappNumber findFirstOrThrow
   */
  export type WhatsappNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappNumber to fetch.
     */
    where?: WhatsappNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappNumbers to fetch.
     */
    orderBy?: WhatsappNumberOrderByWithRelationInput | WhatsappNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsappNumbers.
     */
    cursor?: WhatsappNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsappNumbers.
     */
    distinct?: WhatsappNumberScalarFieldEnum | WhatsappNumberScalarFieldEnum[]
  }

  /**
   * WhatsappNumber findMany
   */
  export type WhatsappNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * Filter, which WhatsappNumbers to fetch.
     */
    where?: WhatsappNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsappNumbers to fetch.
     */
    orderBy?: WhatsappNumberOrderByWithRelationInput | WhatsappNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsappNumbers.
     */
    cursor?: WhatsappNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsappNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsappNumbers.
     */
    skip?: number
    distinct?: WhatsappNumberScalarFieldEnum | WhatsappNumberScalarFieldEnum[]
  }

  /**
   * WhatsappNumber create
   */
  export type WhatsappNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsappNumber.
     */
    data: XOR<WhatsappNumberCreateInput, WhatsappNumberUncheckedCreateInput>
  }

  /**
   * WhatsappNumber createMany
   */
  export type WhatsappNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsappNumbers.
     */
    data: WhatsappNumberCreateManyInput | WhatsappNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsappNumber createManyAndReturn
   */
  export type WhatsappNumberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsappNumbers.
     */
    data: WhatsappNumberCreateManyInput | WhatsappNumberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsappNumber update
   */
  export type WhatsappNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsappNumber.
     */
    data: XOR<WhatsappNumberUpdateInput, WhatsappNumberUncheckedUpdateInput>
    /**
     * Choose, which WhatsappNumber to update.
     */
    where: WhatsappNumberWhereUniqueInput
  }

  /**
   * WhatsappNumber updateMany
   */
  export type WhatsappNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsappNumbers.
     */
    data: XOR<WhatsappNumberUpdateManyMutationInput, WhatsappNumberUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappNumbers to update
     */
    where?: WhatsappNumberWhereInput
    /**
     * Limit how many WhatsappNumbers to update.
     */
    limit?: number
  }

  /**
   * WhatsappNumber updateManyAndReturn
   */
  export type WhatsappNumberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * The data used to update WhatsappNumbers.
     */
    data: XOR<WhatsappNumberUpdateManyMutationInput, WhatsappNumberUncheckedUpdateManyInput>
    /**
     * Filter which WhatsappNumbers to update
     */
    where?: WhatsappNumberWhereInput
    /**
     * Limit how many WhatsappNumbers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsappNumber upsert
   */
  export type WhatsappNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsappNumber to update in case it exists.
     */
    where: WhatsappNumberWhereUniqueInput
    /**
     * In case the WhatsappNumber found by the `where` argument doesn't exist, create a new WhatsappNumber with this data.
     */
    create: XOR<WhatsappNumberCreateInput, WhatsappNumberUncheckedCreateInput>
    /**
     * In case the WhatsappNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsappNumberUpdateInput, WhatsappNumberUncheckedUpdateInput>
  }

  /**
   * WhatsappNumber delete
   */
  export type WhatsappNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
    /**
     * Filter which WhatsappNumber to delete.
     */
    where: WhatsappNumberWhereUniqueInput
  }

  /**
   * WhatsappNumber deleteMany
   */
  export type WhatsappNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsappNumbers to delete
     */
    where?: WhatsappNumberWhereInput
    /**
     * Limit how many WhatsappNumbers to delete.
     */
    limit?: number
  }

  /**
   * WhatsappNumber without action
   */
  export type WhatsappNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsappNumber
     */
    select?: WhatsappNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsappNumber
     */
    omit?: WhatsappNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsappNumberInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: string
    clientId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      clientId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly clientId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ContactConfig
   */

  export type AggregateContactConfig = {
    _count: ContactConfigCountAggregateOutputType | null
    _min: ContactConfigMinAggregateOutputType | null
    _max: ContactConfigMaxAggregateOutputType | null
  }

  export type ContactConfigMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    contactSuggestion: string | null
    agentDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactConfigMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    contactSuggestion: string | null
    agentDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactConfigCountAggregateOutputType = {
    id: number
    clientId: number
    contactSuggestion: number
    agentDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactConfigMinAggregateInputType = {
    id?: true
    clientId?: true
    contactSuggestion?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactConfigMaxAggregateInputType = {
    id?: true
    clientId?: true
    contactSuggestion?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactConfigCountAggregateInputType = {
    id?: true
    clientId?: true
    contactSuggestion?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactConfig to aggregate.
     */
    where?: ContactConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactConfigs to fetch.
     */
    orderBy?: ContactConfigOrderByWithRelationInput | ContactConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactConfigs
    **/
    _count?: true | ContactConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactConfigMaxAggregateInputType
  }

  export type GetContactConfigAggregateType<T extends ContactConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateContactConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactConfig[P]>
      : GetScalarType<T[P], AggregateContactConfig[P]>
  }




  export type ContactConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactConfigWhereInput
    orderBy?: ContactConfigOrderByWithAggregationInput | ContactConfigOrderByWithAggregationInput[]
    by: ContactConfigScalarFieldEnum[] | ContactConfigScalarFieldEnum
    having?: ContactConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactConfigCountAggregateInputType | true
    _min?: ContactConfigMinAggregateInputType
    _max?: ContactConfigMaxAggregateInputType
  }

  export type ContactConfigGroupByOutputType = {
    id: string
    clientId: string
    contactSuggestion: string
    agentDescription: string
    createdAt: Date
    updatedAt: Date
    _count: ContactConfigCountAggregateOutputType | null
    _min: ContactConfigMinAggregateOutputType | null
    _max: ContactConfigMaxAggregateOutputType | null
  }

  type GetContactConfigGroupByPayload<T extends ContactConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ContactConfigGroupByOutputType[P]>
        }
      >
    >


  export type ContactConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    contactSuggestion?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactConfig"]>

  export type ContactConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    contactSuggestion?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactConfig"]>

  export type ContactConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    contactSuggestion?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactConfig"]>

  export type ContactConfigSelectScalar = {
    id?: boolean
    clientId?: boolean
    contactSuggestion?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "contactSuggestion" | "agentDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["contactConfig"]>
  export type ContactConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ContactConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ContactConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ContactConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactConfig"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      contactSuggestion: string
      agentDescription: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactConfig"]>
    composites: {}
  }

  type ContactConfigGetPayload<S extends boolean | null | undefined | ContactConfigDefaultArgs> = $Result.GetResult<Prisma.$ContactConfigPayload, S>

  type ContactConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactConfigCountAggregateInputType | true
    }

  export interface ContactConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactConfig'], meta: { name: 'ContactConfig' } }
    /**
     * Find zero or one ContactConfig that matches the filter.
     * @param {ContactConfigFindUniqueArgs} args - Arguments to find a ContactConfig
     * @example
     * // Get one ContactConfig
     * const contactConfig = await prisma.contactConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactConfigFindUniqueArgs>(args: SelectSubset<T, ContactConfigFindUniqueArgs<ExtArgs>>): Prisma__ContactConfigClient<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactConfigFindUniqueOrThrowArgs} args - Arguments to find a ContactConfig
     * @example
     * // Get one ContactConfig
     * const contactConfig = await prisma.contactConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactConfigClient<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactConfigFindFirstArgs} args - Arguments to find a ContactConfig
     * @example
     * // Get one ContactConfig
     * const contactConfig = await prisma.contactConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactConfigFindFirstArgs>(args?: SelectSubset<T, ContactConfigFindFirstArgs<ExtArgs>>): Prisma__ContactConfigClient<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactConfigFindFirstOrThrowArgs} args - Arguments to find a ContactConfig
     * @example
     * // Get one ContactConfig
     * const contactConfig = await prisma.contactConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactConfigClient<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactConfigs
     * const contactConfigs = await prisma.contactConfig.findMany()
     * 
     * // Get first 10 ContactConfigs
     * const contactConfigs = await prisma.contactConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactConfigWithIdOnly = await prisma.contactConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactConfigFindManyArgs>(args?: SelectSubset<T, ContactConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactConfig.
     * @param {ContactConfigCreateArgs} args - Arguments to create a ContactConfig.
     * @example
     * // Create one ContactConfig
     * const ContactConfig = await prisma.contactConfig.create({
     *   data: {
     *     // ... data to create a ContactConfig
     *   }
     * })
     * 
     */
    create<T extends ContactConfigCreateArgs>(args: SelectSubset<T, ContactConfigCreateArgs<ExtArgs>>): Prisma__ContactConfigClient<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactConfigs.
     * @param {ContactConfigCreateManyArgs} args - Arguments to create many ContactConfigs.
     * @example
     * // Create many ContactConfigs
     * const contactConfig = await prisma.contactConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactConfigCreateManyArgs>(args?: SelectSubset<T, ContactConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactConfigs and returns the data saved in the database.
     * @param {ContactConfigCreateManyAndReturnArgs} args - Arguments to create many ContactConfigs.
     * @example
     * // Create many ContactConfigs
     * const contactConfig = await prisma.contactConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactConfigs and only return the `id`
     * const contactConfigWithIdOnly = await prisma.contactConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactConfig.
     * @param {ContactConfigDeleteArgs} args - Arguments to delete one ContactConfig.
     * @example
     * // Delete one ContactConfig
     * const ContactConfig = await prisma.contactConfig.delete({
     *   where: {
     *     // ... filter to delete one ContactConfig
     *   }
     * })
     * 
     */
    delete<T extends ContactConfigDeleteArgs>(args: SelectSubset<T, ContactConfigDeleteArgs<ExtArgs>>): Prisma__ContactConfigClient<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactConfig.
     * @param {ContactConfigUpdateArgs} args - Arguments to update one ContactConfig.
     * @example
     * // Update one ContactConfig
     * const contactConfig = await prisma.contactConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactConfigUpdateArgs>(args: SelectSubset<T, ContactConfigUpdateArgs<ExtArgs>>): Prisma__ContactConfigClient<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactConfigs.
     * @param {ContactConfigDeleteManyArgs} args - Arguments to filter ContactConfigs to delete.
     * @example
     * // Delete a few ContactConfigs
     * const { count } = await prisma.contactConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactConfigDeleteManyArgs>(args?: SelectSubset<T, ContactConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactConfigs
     * const contactConfig = await prisma.contactConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactConfigUpdateManyArgs>(args: SelectSubset<T, ContactConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactConfigs and returns the data updated in the database.
     * @param {ContactConfigUpdateManyAndReturnArgs} args - Arguments to update many ContactConfigs.
     * @example
     * // Update many ContactConfigs
     * const contactConfig = await prisma.contactConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactConfigs and only return the `id`
     * const contactConfigWithIdOnly = await prisma.contactConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactConfig.
     * @param {ContactConfigUpsertArgs} args - Arguments to update or create a ContactConfig.
     * @example
     * // Update or create a ContactConfig
     * const contactConfig = await prisma.contactConfig.upsert({
     *   create: {
     *     // ... data to create a ContactConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactConfig we want to update
     *   }
     * })
     */
    upsert<T extends ContactConfigUpsertArgs>(args: SelectSubset<T, ContactConfigUpsertArgs<ExtArgs>>): Prisma__ContactConfigClient<$Result.GetResult<Prisma.$ContactConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactConfigCountArgs} args - Arguments to filter ContactConfigs to count.
     * @example
     * // Count the number of ContactConfigs
     * const count = await prisma.contactConfig.count({
     *   where: {
     *     // ... the filter for the ContactConfigs we want to count
     *   }
     * })
    **/
    count<T extends ContactConfigCountArgs>(
      args?: Subset<T, ContactConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactConfigAggregateArgs>(args: Subset<T, ContactConfigAggregateArgs>): Prisma.PrismaPromise<GetContactConfigAggregateType<T>>

    /**
     * Group by ContactConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactConfigGroupByArgs['orderBy'] }
        : { orderBy?: ContactConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactConfig model
   */
  readonly fields: ContactConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactConfig model
   */
  interface ContactConfigFieldRefs {
    readonly id: FieldRef<"ContactConfig", 'String'>
    readonly clientId: FieldRef<"ContactConfig", 'String'>
    readonly contactSuggestion: FieldRef<"ContactConfig", 'String'>
    readonly agentDescription: FieldRef<"ContactConfig", 'String'>
    readonly createdAt: FieldRef<"ContactConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactConfig findUnique
   */
  export type ContactConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * Filter, which ContactConfig to fetch.
     */
    where: ContactConfigWhereUniqueInput
  }

  /**
   * ContactConfig findUniqueOrThrow
   */
  export type ContactConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * Filter, which ContactConfig to fetch.
     */
    where: ContactConfigWhereUniqueInput
  }

  /**
   * ContactConfig findFirst
   */
  export type ContactConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * Filter, which ContactConfig to fetch.
     */
    where?: ContactConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactConfigs to fetch.
     */
    orderBy?: ContactConfigOrderByWithRelationInput | ContactConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactConfigs.
     */
    cursor?: ContactConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactConfigs.
     */
    distinct?: ContactConfigScalarFieldEnum | ContactConfigScalarFieldEnum[]
  }

  /**
   * ContactConfig findFirstOrThrow
   */
  export type ContactConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * Filter, which ContactConfig to fetch.
     */
    where?: ContactConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactConfigs to fetch.
     */
    orderBy?: ContactConfigOrderByWithRelationInput | ContactConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactConfigs.
     */
    cursor?: ContactConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactConfigs.
     */
    distinct?: ContactConfigScalarFieldEnum | ContactConfigScalarFieldEnum[]
  }

  /**
   * ContactConfig findMany
   */
  export type ContactConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * Filter, which ContactConfigs to fetch.
     */
    where?: ContactConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactConfigs to fetch.
     */
    orderBy?: ContactConfigOrderByWithRelationInput | ContactConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactConfigs.
     */
    cursor?: ContactConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactConfigs.
     */
    skip?: number
    distinct?: ContactConfigScalarFieldEnum | ContactConfigScalarFieldEnum[]
  }

  /**
   * ContactConfig create
   */
  export type ContactConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactConfig.
     */
    data: XOR<ContactConfigCreateInput, ContactConfigUncheckedCreateInput>
  }

  /**
   * ContactConfig createMany
   */
  export type ContactConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactConfigs.
     */
    data: ContactConfigCreateManyInput | ContactConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactConfig createManyAndReturn
   */
  export type ContactConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * The data used to create many ContactConfigs.
     */
    data: ContactConfigCreateManyInput | ContactConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactConfig update
   */
  export type ContactConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactConfig.
     */
    data: XOR<ContactConfigUpdateInput, ContactConfigUncheckedUpdateInput>
    /**
     * Choose, which ContactConfig to update.
     */
    where: ContactConfigWhereUniqueInput
  }

  /**
   * ContactConfig updateMany
   */
  export type ContactConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactConfigs.
     */
    data: XOR<ContactConfigUpdateManyMutationInput, ContactConfigUncheckedUpdateManyInput>
    /**
     * Filter which ContactConfigs to update
     */
    where?: ContactConfigWhereInput
    /**
     * Limit how many ContactConfigs to update.
     */
    limit?: number
  }

  /**
   * ContactConfig updateManyAndReturn
   */
  export type ContactConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * The data used to update ContactConfigs.
     */
    data: XOR<ContactConfigUpdateManyMutationInput, ContactConfigUncheckedUpdateManyInput>
    /**
     * Filter which ContactConfigs to update
     */
    where?: ContactConfigWhereInput
    /**
     * Limit how many ContactConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactConfig upsert
   */
  export type ContactConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactConfig to update in case it exists.
     */
    where: ContactConfigWhereUniqueInput
    /**
     * In case the ContactConfig found by the `where` argument doesn't exist, create a new ContactConfig with this data.
     */
    create: XOR<ContactConfigCreateInput, ContactConfigUncheckedCreateInput>
    /**
     * In case the ContactConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactConfigUpdateInput, ContactConfigUncheckedUpdateInput>
  }

  /**
   * ContactConfig delete
   */
  export type ContactConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
    /**
     * Filter which ContactConfig to delete.
     */
    where: ContactConfigWhereUniqueInput
  }

  /**
   * ContactConfig deleteMany
   */
  export type ContactConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactConfigs to delete
     */
    where?: ContactConfigWhereInput
    /**
     * Limit how many ContactConfigs to delete.
     */
    limit?: number
  }

  /**
   * ContactConfig without action
   */
  export type ContactConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactConfig
     */
    select?: ContactConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactConfig
     */
    omit?: ContactConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactConfigInclude<ExtArgs> | null
  }


  /**
   * Model HistoryConfig
   */

  export type AggregateHistoryConfig = {
    _count: HistoryConfigCountAggregateOutputType | null
    _min: HistoryConfigMinAggregateOutputType | null
    _max: HistoryConfigMaxAggregateOutputType | null
  }

  export type HistoryConfigMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    companyHistory: string | null
    agentDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HistoryConfigMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    companyHistory: string | null
    agentDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HistoryConfigCountAggregateOutputType = {
    id: number
    clientId: number
    companyHistory: number
    agentDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HistoryConfigMinAggregateInputType = {
    id?: true
    clientId?: true
    companyHistory?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HistoryConfigMaxAggregateInputType = {
    id?: true
    clientId?: true
    companyHistory?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HistoryConfigCountAggregateInputType = {
    id?: true
    clientId?: true
    companyHistory?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HistoryConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryConfig to aggregate.
     */
    where?: HistoryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryConfigs to fetch.
     */
    orderBy?: HistoryConfigOrderByWithRelationInput | HistoryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryConfigs
    **/
    _count?: true | HistoryConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryConfigMaxAggregateInputType
  }

  export type GetHistoryConfigAggregateType<T extends HistoryConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryConfig[P]>
      : GetScalarType<T[P], AggregateHistoryConfig[P]>
  }




  export type HistoryConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryConfigWhereInput
    orderBy?: HistoryConfigOrderByWithAggregationInput | HistoryConfigOrderByWithAggregationInput[]
    by: HistoryConfigScalarFieldEnum[] | HistoryConfigScalarFieldEnum
    having?: HistoryConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryConfigCountAggregateInputType | true
    _min?: HistoryConfigMinAggregateInputType
    _max?: HistoryConfigMaxAggregateInputType
  }

  export type HistoryConfigGroupByOutputType = {
    id: string
    clientId: string
    companyHistory: string
    agentDescription: string
    createdAt: Date
    updatedAt: Date
    _count: HistoryConfigCountAggregateOutputType | null
    _min: HistoryConfigMinAggregateOutputType | null
    _max: HistoryConfigMaxAggregateOutputType | null
  }

  type GetHistoryConfigGroupByPayload<T extends HistoryConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryConfigGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryConfigGroupByOutputType[P]>
        }
      >
    >


  export type HistoryConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    companyHistory?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyConfig"]>

  export type HistoryConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    companyHistory?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyConfig"]>

  export type HistoryConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    companyHistory?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyConfig"]>

  export type HistoryConfigSelectScalar = {
    id?: boolean
    clientId?: boolean
    companyHistory?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HistoryConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "companyHistory" | "agentDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["historyConfig"]>
  export type HistoryConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type HistoryConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type HistoryConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $HistoryConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryConfig"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      companyHistory: string
      agentDescription: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["historyConfig"]>
    composites: {}
  }

  type HistoryConfigGetPayload<S extends boolean | null | undefined | HistoryConfigDefaultArgs> = $Result.GetResult<Prisma.$HistoryConfigPayload, S>

  type HistoryConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryConfigCountAggregateInputType | true
    }

  export interface HistoryConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryConfig'], meta: { name: 'HistoryConfig' } }
    /**
     * Find zero or one HistoryConfig that matches the filter.
     * @param {HistoryConfigFindUniqueArgs} args - Arguments to find a HistoryConfig
     * @example
     * // Get one HistoryConfig
     * const historyConfig = await prisma.historyConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryConfigFindUniqueArgs>(args: SelectSubset<T, HistoryConfigFindUniqueArgs<ExtArgs>>): Prisma__HistoryConfigClient<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoryConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryConfigFindUniqueOrThrowArgs} args - Arguments to find a HistoryConfig
     * @example
     * // Get one HistoryConfig
     * const historyConfig = await prisma.historyConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryConfigClient<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryConfigFindFirstArgs} args - Arguments to find a HistoryConfig
     * @example
     * // Get one HistoryConfig
     * const historyConfig = await prisma.historyConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryConfigFindFirstArgs>(args?: SelectSubset<T, HistoryConfigFindFirstArgs<ExtArgs>>): Prisma__HistoryConfigClient<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoryConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryConfigFindFirstOrThrowArgs} args - Arguments to find a HistoryConfig
     * @example
     * // Get one HistoryConfig
     * const historyConfig = await prisma.historyConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryConfigClient<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoryConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryConfigs
     * const historyConfigs = await prisma.historyConfig.findMany()
     * 
     * // Get first 10 HistoryConfigs
     * const historyConfigs = await prisma.historyConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyConfigWithIdOnly = await prisma.historyConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryConfigFindManyArgs>(args?: SelectSubset<T, HistoryConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoryConfig.
     * @param {HistoryConfigCreateArgs} args - Arguments to create a HistoryConfig.
     * @example
     * // Create one HistoryConfig
     * const HistoryConfig = await prisma.historyConfig.create({
     *   data: {
     *     // ... data to create a HistoryConfig
     *   }
     * })
     * 
     */
    create<T extends HistoryConfigCreateArgs>(args: SelectSubset<T, HistoryConfigCreateArgs<ExtArgs>>): Prisma__HistoryConfigClient<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoryConfigs.
     * @param {HistoryConfigCreateManyArgs} args - Arguments to create many HistoryConfigs.
     * @example
     * // Create many HistoryConfigs
     * const historyConfig = await prisma.historyConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryConfigCreateManyArgs>(args?: SelectSubset<T, HistoryConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoryConfigs and returns the data saved in the database.
     * @param {HistoryConfigCreateManyAndReturnArgs} args - Arguments to create many HistoryConfigs.
     * @example
     * // Create many HistoryConfigs
     * const historyConfig = await prisma.historyConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoryConfigs and only return the `id`
     * const historyConfigWithIdOnly = await prisma.historyConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoryConfig.
     * @param {HistoryConfigDeleteArgs} args - Arguments to delete one HistoryConfig.
     * @example
     * // Delete one HistoryConfig
     * const HistoryConfig = await prisma.historyConfig.delete({
     *   where: {
     *     // ... filter to delete one HistoryConfig
     *   }
     * })
     * 
     */
    delete<T extends HistoryConfigDeleteArgs>(args: SelectSubset<T, HistoryConfigDeleteArgs<ExtArgs>>): Prisma__HistoryConfigClient<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoryConfig.
     * @param {HistoryConfigUpdateArgs} args - Arguments to update one HistoryConfig.
     * @example
     * // Update one HistoryConfig
     * const historyConfig = await prisma.historyConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryConfigUpdateArgs>(args: SelectSubset<T, HistoryConfigUpdateArgs<ExtArgs>>): Prisma__HistoryConfigClient<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoryConfigs.
     * @param {HistoryConfigDeleteManyArgs} args - Arguments to filter HistoryConfigs to delete.
     * @example
     * // Delete a few HistoryConfigs
     * const { count } = await prisma.historyConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryConfigDeleteManyArgs>(args?: SelectSubset<T, HistoryConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryConfigs
     * const historyConfig = await prisma.historyConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryConfigUpdateManyArgs>(args: SelectSubset<T, HistoryConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryConfigs and returns the data updated in the database.
     * @param {HistoryConfigUpdateManyAndReturnArgs} args - Arguments to update many HistoryConfigs.
     * @example
     * // Update many HistoryConfigs
     * const historyConfig = await prisma.historyConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoryConfigs and only return the `id`
     * const historyConfigWithIdOnly = await prisma.historyConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoryConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoryConfig.
     * @param {HistoryConfigUpsertArgs} args - Arguments to update or create a HistoryConfig.
     * @example
     * // Update or create a HistoryConfig
     * const historyConfig = await prisma.historyConfig.upsert({
     *   create: {
     *     // ... data to create a HistoryConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryConfig we want to update
     *   }
     * })
     */
    upsert<T extends HistoryConfigUpsertArgs>(args: SelectSubset<T, HistoryConfigUpsertArgs<ExtArgs>>): Prisma__HistoryConfigClient<$Result.GetResult<Prisma.$HistoryConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoryConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryConfigCountArgs} args - Arguments to filter HistoryConfigs to count.
     * @example
     * // Count the number of HistoryConfigs
     * const count = await prisma.historyConfig.count({
     *   where: {
     *     // ... the filter for the HistoryConfigs we want to count
     *   }
     * })
    **/
    count<T extends HistoryConfigCountArgs>(
      args?: Subset<T, HistoryConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryConfigAggregateArgs>(args: Subset<T, HistoryConfigAggregateArgs>): Prisma.PrismaPromise<GetHistoryConfigAggregateType<T>>

    /**
     * Group by HistoryConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryConfigGroupByArgs['orderBy'] }
        : { orderBy?: HistoryConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryConfig model
   */
  readonly fields: HistoryConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoryConfig model
   */
  interface HistoryConfigFieldRefs {
    readonly id: FieldRef<"HistoryConfig", 'String'>
    readonly clientId: FieldRef<"HistoryConfig", 'String'>
    readonly companyHistory: FieldRef<"HistoryConfig", 'String'>
    readonly agentDescription: FieldRef<"HistoryConfig", 'String'>
    readonly createdAt: FieldRef<"HistoryConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"HistoryConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistoryConfig findUnique
   */
  export type HistoryConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which HistoryConfig to fetch.
     */
    where: HistoryConfigWhereUniqueInput
  }

  /**
   * HistoryConfig findUniqueOrThrow
   */
  export type HistoryConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which HistoryConfig to fetch.
     */
    where: HistoryConfigWhereUniqueInput
  }

  /**
   * HistoryConfig findFirst
   */
  export type HistoryConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which HistoryConfig to fetch.
     */
    where?: HistoryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryConfigs to fetch.
     */
    orderBy?: HistoryConfigOrderByWithRelationInput | HistoryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryConfigs.
     */
    cursor?: HistoryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryConfigs.
     */
    distinct?: HistoryConfigScalarFieldEnum | HistoryConfigScalarFieldEnum[]
  }

  /**
   * HistoryConfig findFirstOrThrow
   */
  export type HistoryConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which HistoryConfig to fetch.
     */
    where?: HistoryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryConfigs to fetch.
     */
    orderBy?: HistoryConfigOrderByWithRelationInput | HistoryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryConfigs.
     */
    cursor?: HistoryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryConfigs.
     */
    distinct?: HistoryConfigScalarFieldEnum | HistoryConfigScalarFieldEnum[]
  }

  /**
   * HistoryConfig findMany
   */
  export type HistoryConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which HistoryConfigs to fetch.
     */
    where?: HistoryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryConfigs to fetch.
     */
    orderBy?: HistoryConfigOrderByWithRelationInput | HistoryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryConfigs.
     */
    cursor?: HistoryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryConfigs.
     */
    skip?: number
    distinct?: HistoryConfigScalarFieldEnum | HistoryConfigScalarFieldEnum[]
  }

  /**
   * HistoryConfig create
   */
  export type HistoryConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryConfig.
     */
    data: XOR<HistoryConfigCreateInput, HistoryConfigUncheckedCreateInput>
  }

  /**
   * HistoryConfig createMany
   */
  export type HistoryConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryConfigs.
     */
    data: HistoryConfigCreateManyInput | HistoryConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoryConfig createManyAndReturn
   */
  export type HistoryConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * The data used to create many HistoryConfigs.
     */
    data: HistoryConfigCreateManyInput | HistoryConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryConfig update
   */
  export type HistoryConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryConfig.
     */
    data: XOR<HistoryConfigUpdateInput, HistoryConfigUncheckedUpdateInput>
    /**
     * Choose, which HistoryConfig to update.
     */
    where: HistoryConfigWhereUniqueInput
  }

  /**
   * HistoryConfig updateMany
   */
  export type HistoryConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryConfigs.
     */
    data: XOR<HistoryConfigUpdateManyMutationInput, HistoryConfigUncheckedUpdateManyInput>
    /**
     * Filter which HistoryConfigs to update
     */
    where?: HistoryConfigWhereInput
    /**
     * Limit how many HistoryConfigs to update.
     */
    limit?: number
  }

  /**
   * HistoryConfig updateManyAndReturn
   */
  export type HistoryConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * The data used to update HistoryConfigs.
     */
    data: XOR<HistoryConfigUpdateManyMutationInput, HistoryConfigUncheckedUpdateManyInput>
    /**
     * Filter which HistoryConfigs to update
     */
    where?: HistoryConfigWhereInput
    /**
     * Limit how many HistoryConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryConfig upsert
   */
  export type HistoryConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryConfig to update in case it exists.
     */
    where: HistoryConfigWhereUniqueInput
    /**
     * In case the HistoryConfig found by the `where` argument doesn't exist, create a new HistoryConfig with this data.
     */
    create: XOR<HistoryConfigCreateInput, HistoryConfigUncheckedCreateInput>
    /**
     * In case the HistoryConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryConfigUpdateInput, HistoryConfigUncheckedUpdateInput>
  }

  /**
   * HistoryConfig delete
   */
  export type HistoryConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
    /**
     * Filter which HistoryConfig to delete.
     */
    where: HistoryConfigWhereUniqueInput
  }

  /**
   * HistoryConfig deleteMany
   */
  export type HistoryConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryConfigs to delete
     */
    where?: HistoryConfigWhereInput
    /**
     * Limit how many HistoryConfigs to delete.
     */
    limit?: number
  }

  /**
   * HistoryConfig without action
   */
  export type HistoryConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryConfig
     */
    select?: HistoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoryConfig
     */
    omit?: HistoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryConfigInclude<ExtArgs> | null
  }


  /**
   * Model MemoryConfig
   */

  export type AggregateMemoryConfig = {
    _count: MemoryConfigCountAggregateOutputType | null
    _min: MemoryConfigMinAggregateOutputType | null
    _max: MemoryConfigMaxAggregateOutputType | null
  }

  export type MemoryConfigMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    memoryGuidelines: string | null
    agentDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemoryConfigMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    memoryGuidelines: string | null
    agentDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemoryConfigCountAggregateOutputType = {
    id: number
    clientId: number
    memoryGuidelines: number
    agentDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemoryConfigMinAggregateInputType = {
    id?: true
    clientId?: true
    memoryGuidelines?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemoryConfigMaxAggregateInputType = {
    id?: true
    clientId?: true
    memoryGuidelines?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemoryConfigCountAggregateInputType = {
    id?: true
    clientId?: true
    memoryGuidelines?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemoryConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryConfig to aggregate.
     */
    where?: MemoryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryConfigs to fetch.
     */
    orderBy?: MemoryConfigOrderByWithRelationInput | MemoryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemoryConfigs
    **/
    _count?: true | MemoryConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryConfigMaxAggregateInputType
  }

  export type GetMemoryConfigAggregateType<T extends MemoryConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateMemoryConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemoryConfig[P]>
      : GetScalarType<T[P], AggregateMemoryConfig[P]>
  }




  export type MemoryConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryConfigWhereInput
    orderBy?: MemoryConfigOrderByWithAggregationInput | MemoryConfigOrderByWithAggregationInput[]
    by: MemoryConfigScalarFieldEnum[] | MemoryConfigScalarFieldEnum
    having?: MemoryConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryConfigCountAggregateInputType | true
    _min?: MemoryConfigMinAggregateInputType
    _max?: MemoryConfigMaxAggregateInputType
  }

  export type MemoryConfigGroupByOutputType = {
    id: string
    clientId: string
    memoryGuidelines: string
    agentDescription: string
    createdAt: Date
    updatedAt: Date
    _count: MemoryConfigCountAggregateOutputType | null
    _min: MemoryConfigMinAggregateOutputType | null
    _max: MemoryConfigMaxAggregateOutputType | null
  }

  type GetMemoryConfigGroupByPayload<T extends MemoryConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoryConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryConfigGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryConfigGroupByOutputType[P]>
        }
      >
    >


  export type MemoryConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    memoryGuidelines?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryConfig"]>

  export type MemoryConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    memoryGuidelines?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryConfig"]>

  export type MemoryConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    memoryGuidelines?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryConfig"]>

  export type MemoryConfigSelectScalar = {
    id?: boolean
    clientId?: boolean
    memoryGuidelines?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemoryConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "memoryGuidelines" | "agentDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["memoryConfig"]>
  export type MemoryConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type MemoryConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type MemoryConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $MemoryConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemoryConfig"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      memoryGuidelines: string
      agentDescription: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["memoryConfig"]>
    composites: {}
  }

  type MemoryConfigGetPayload<S extends boolean | null | undefined | MemoryConfigDefaultArgs> = $Result.GetResult<Prisma.$MemoryConfigPayload, S>

  type MemoryConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemoryConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemoryConfigCountAggregateInputType | true
    }

  export interface MemoryConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemoryConfig'], meta: { name: 'MemoryConfig' } }
    /**
     * Find zero or one MemoryConfig that matches the filter.
     * @param {MemoryConfigFindUniqueArgs} args - Arguments to find a MemoryConfig
     * @example
     * // Get one MemoryConfig
     * const memoryConfig = await prisma.memoryConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemoryConfigFindUniqueArgs>(args: SelectSubset<T, MemoryConfigFindUniqueArgs<ExtArgs>>): Prisma__MemoryConfigClient<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemoryConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemoryConfigFindUniqueOrThrowArgs} args - Arguments to find a MemoryConfig
     * @example
     * // Get one MemoryConfig
     * const memoryConfig = await prisma.memoryConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemoryConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, MemoryConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemoryConfigClient<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemoryConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryConfigFindFirstArgs} args - Arguments to find a MemoryConfig
     * @example
     * // Get one MemoryConfig
     * const memoryConfig = await prisma.memoryConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemoryConfigFindFirstArgs>(args?: SelectSubset<T, MemoryConfigFindFirstArgs<ExtArgs>>): Prisma__MemoryConfigClient<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemoryConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryConfigFindFirstOrThrowArgs} args - Arguments to find a MemoryConfig
     * @example
     * // Get one MemoryConfig
     * const memoryConfig = await prisma.memoryConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemoryConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, MemoryConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemoryConfigClient<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemoryConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemoryConfigs
     * const memoryConfigs = await prisma.memoryConfig.findMany()
     * 
     * // Get first 10 MemoryConfigs
     * const memoryConfigs = await prisma.memoryConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoryConfigWithIdOnly = await prisma.memoryConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemoryConfigFindManyArgs>(args?: SelectSubset<T, MemoryConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemoryConfig.
     * @param {MemoryConfigCreateArgs} args - Arguments to create a MemoryConfig.
     * @example
     * // Create one MemoryConfig
     * const MemoryConfig = await prisma.memoryConfig.create({
     *   data: {
     *     // ... data to create a MemoryConfig
     *   }
     * })
     * 
     */
    create<T extends MemoryConfigCreateArgs>(args: SelectSubset<T, MemoryConfigCreateArgs<ExtArgs>>): Prisma__MemoryConfigClient<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemoryConfigs.
     * @param {MemoryConfigCreateManyArgs} args - Arguments to create many MemoryConfigs.
     * @example
     * // Create many MemoryConfigs
     * const memoryConfig = await prisma.memoryConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemoryConfigCreateManyArgs>(args?: SelectSubset<T, MemoryConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemoryConfigs and returns the data saved in the database.
     * @param {MemoryConfigCreateManyAndReturnArgs} args - Arguments to create many MemoryConfigs.
     * @example
     * // Create many MemoryConfigs
     * const memoryConfig = await prisma.memoryConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemoryConfigs and only return the `id`
     * const memoryConfigWithIdOnly = await prisma.memoryConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemoryConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, MemoryConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemoryConfig.
     * @param {MemoryConfigDeleteArgs} args - Arguments to delete one MemoryConfig.
     * @example
     * // Delete one MemoryConfig
     * const MemoryConfig = await prisma.memoryConfig.delete({
     *   where: {
     *     // ... filter to delete one MemoryConfig
     *   }
     * })
     * 
     */
    delete<T extends MemoryConfigDeleteArgs>(args: SelectSubset<T, MemoryConfigDeleteArgs<ExtArgs>>): Prisma__MemoryConfigClient<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemoryConfig.
     * @param {MemoryConfigUpdateArgs} args - Arguments to update one MemoryConfig.
     * @example
     * // Update one MemoryConfig
     * const memoryConfig = await prisma.memoryConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemoryConfigUpdateArgs>(args: SelectSubset<T, MemoryConfigUpdateArgs<ExtArgs>>): Prisma__MemoryConfigClient<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemoryConfigs.
     * @param {MemoryConfigDeleteManyArgs} args - Arguments to filter MemoryConfigs to delete.
     * @example
     * // Delete a few MemoryConfigs
     * const { count } = await prisma.memoryConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemoryConfigDeleteManyArgs>(args?: SelectSubset<T, MemoryConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemoryConfigs
     * const memoryConfig = await prisma.memoryConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemoryConfigUpdateManyArgs>(args: SelectSubset<T, MemoryConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryConfigs and returns the data updated in the database.
     * @param {MemoryConfigUpdateManyAndReturnArgs} args - Arguments to update many MemoryConfigs.
     * @example
     * // Update many MemoryConfigs
     * const memoryConfig = await prisma.memoryConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemoryConfigs and only return the `id`
     * const memoryConfigWithIdOnly = await prisma.memoryConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemoryConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, MemoryConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemoryConfig.
     * @param {MemoryConfigUpsertArgs} args - Arguments to update or create a MemoryConfig.
     * @example
     * // Update or create a MemoryConfig
     * const memoryConfig = await prisma.memoryConfig.upsert({
     *   create: {
     *     // ... data to create a MemoryConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemoryConfig we want to update
     *   }
     * })
     */
    upsert<T extends MemoryConfigUpsertArgs>(args: SelectSubset<T, MemoryConfigUpsertArgs<ExtArgs>>): Prisma__MemoryConfigClient<$Result.GetResult<Prisma.$MemoryConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemoryConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryConfigCountArgs} args - Arguments to filter MemoryConfigs to count.
     * @example
     * // Count the number of MemoryConfigs
     * const count = await prisma.memoryConfig.count({
     *   where: {
     *     // ... the filter for the MemoryConfigs we want to count
     *   }
     * })
    **/
    count<T extends MemoryConfigCountArgs>(
      args?: Subset<T, MemoryConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemoryConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemoryConfigAggregateArgs>(args: Subset<T, MemoryConfigAggregateArgs>): Prisma.PrismaPromise<GetMemoryConfigAggregateType<T>>

    /**
     * Group by MemoryConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemoryConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryConfigGroupByArgs['orderBy'] }
        : { orderBy?: MemoryConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemoryConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemoryConfig model
   */
  readonly fields: MemoryConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemoryConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemoryConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemoryConfig model
   */
  interface MemoryConfigFieldRefs {
    readonly id: FieldRef<"MemoryConfig", 'String'>
    readonly clientId: FieldRef<"MemoryConfig", 'String'>
    readonly memoryGuidelines: FieldRef<"MemoryConfig", 'String'>
    readonly agentDescription: FieldRef<"MemoryConfig", 'String'>
    readonly createdAt: FieldRef<"MemoryConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"MemoryConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemoryConfig findUnique
   */
  export type MemoryConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which MemoryConfig to fetch.
     */
    where: MemoryConfigWhereUniqueInput
  }

  /**
   * MemoryConfig findUniqueOrThrow
   */
  export type MemoryConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which MemoryConfig to fetch.
     */
    where: MemoryConfigWhereUniqueInput
  }

  /**
   * MemoryConfig findFirst
   */
  export type MemoryConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which MemoryConfig to fetch.
     */
    where?: MemoryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryConfigs to fetch.
     */
    orderBy?: MemoryConfigOrderByWithRelationInput | MemoryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryConfigs.
     */
    cursor?: MemoryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryConfigs.
     */
    distinct?: MemoryConfigScalarFieldEnum | MemoryConfigScalarFieldEnum[]
  }

  /**
   * MemoryConfig findFirstOrThrow
   */
  export type MemoryConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which MemoryConfig to fetch.
     */
    where?: MemoryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryConfigs to fetch.
     */
    orderBy?: MemoryConfigOrderByWithRelationInput | MemoryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryConfigs.
     */
    cursor?: MemoryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryConfigs.
     */
    distinct?: MemoryConfigScalarFieldEnum | MemoryConfigScalarFieldEnum[]
  }

  /**
   * MemoryConfig findMany
   */
  export type MemoryConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * Filter, which MemoryConfigs to fetch.
     */
    where?: MemoryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryConfigs to fetch.
     */
    orderBy?: MemoryConfigOrderByWithRelationInput | MemoryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemoryConfigs.
     */
    cursor?: MemoryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryConfigs.
     */
    skip?: number
    distinct?: MemoryConfigScalarFieldEnum | MemoryConfigScalarFieldEnum[]
  }

  /**
   * MemoryConfig create
   */
  export type MemoryConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a MemoryConfig.
     */
    data: XOR<MemoryConfigCreateInput, MemoryConfigUncheckedCreateInput>
  }

  /**
   * MemoryConfig createMany
   */
  export type MemoryConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemoryConfigs.
     */
    data: MemoryConfigCreateManyInput | MemoryConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemoryConfig createManyAndReturn
   */
  export type MemoryConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * The data used to create many MemoryConfigs.
     */
    data: MemoryConfigCreateManyInput | MemoryConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemoryConfig update
   */
  export type MemoryConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a MemoryConfig.
     */
    data: XOR<MemoryConfigUpdateInput, MemoryConfigUncheckedUpdateInput>
    /**
     * Choose, which MemoryConfig to update.
     */
    where: MemoryConfigWhereUniqueInput
  }

  /**
   * MemoryConfig updateMany
   */
  export type MemoryConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemoryConfigs.
     */
    data: XOR<MemoryConfigUpdateManyMutationInput, MemoryConfigUncheckedUpdateManyInput>
    /**
     * Filter which MemoryConfigs to update
     */
    where?: MemoryConfigWhereInput
    /**
     * Limit how many MemoryConfigs to update.
     */
    limit?: number
  }

  /**
   * MemoryConfig updateManyAndReturn
   */
  export type MemoryConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * The data used to update MemoryConfigs.
     */
    data: XOR<MemoryConfigUpdateManyMutationInput, MemoryConfigUncheckedUpdateManyInput>
    /**
     * Filter which MemoryConfigs to update
     */
    where?: MemoryConfigWhereInput
    /**
     * Limit how many MemoryConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemoryConfig upsert
   */
  export type MemoryConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the MemoryConfig to update in case it exists.
     */
    where: MemoryConfigWhereUniqueInput
    /**
     * In case the MemoryConfig found by the `where` argument doesn't exist, create a new MemoryConfig with this data.
     */
    create: XOR<MemoryConfigCreateInput, MemoryConfigUncheckedCreateInput>
    /**
     * In case the MemoryConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemoryConfigUpdateInput, MemoryConfigUncheckedUpdateInput>
  }

  /**
   * MemoryConfig delete
   */
  export type MemoryConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
    /**
     * Filter which MemoryConfig to delete.
     */
    where: MemoryConfigWhereUniqueInput
  }

  /**
   * MemoryConfig deleteMany
   */
  export type MemoryConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryConfigs to delete
     */
    where?: MemoryConfigWhereInput
    /**
     * Limit how many MemoryConfigs to delete.
     */
    limit?: number
  }

  /**
   * MemoryConfig without action
   */
  export type MemoryConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryConfig
     */
    select?: MemoryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemoryConfig
     */
    omit?: MemoryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryConfigInclude<ExtArgs> | null
  }


  /**
   * Model PricingConfig
   */

  export type AggregatePricingConfig = {
    _count: PricingConfigCountAggregateOutputType | null
    _min: PricingConfigMinAggregateOutputType | null
    _max: PricingConfigMaxAggregateOutputType | null
  }

  export type PricingConfigMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    paymentMethods: string | null
    agentDescription: string | null
    noPricingInfoText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingConfigMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    paymentMethods: string | null
    agentDescription: string | null
    noPricingInfoText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingConfigCountAggregateOutputType = {
    id: number
    clientId: number
    paymentMethods: number
    agentDescription: number
    noPricingInfoText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingConfigMinAggregateInputType = {
    id?: true
    clientId?: true
    paymentMethods?: true
    agentDescription?: true
    noPricingInfoText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingConfigMaxAggregateInputType = {
    id?: true
    clientId?: true
    paymentMethods?: true
    agentDescription?: true
    noPricingInfoText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingConfigCountAggregateInputType = {
    id?: true
    clientId?: true
    paymentMethods?: true
    agentDescription?: true
    noPricingInfoText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingConfig to aggregate.
     */
    where?: PricingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingConfigs to fetch.
     */
    orderBy?: PricingConfigOrderByWithRelationInput | PricingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingConfigs
    **/
    _count?: true | PricingConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingConfigMaxAggregateInputType
  }

  export type GetPricingConfigAggregateType<T extends PricingConfigAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingConfig[P]>
      : GetScalarType<T[P], AggregatePricingConfig[P]>
  }




  export type PricingConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingConfigWhereInput
    orderBy?: PricingConfigOrderByWithAggregationInput | PricingConfigOrderByWithAggregationInput[]
    by: PricingConfigScalarFieldEnum[] | PricingConfigScalarFieldEnum
    having?: PricingConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingConfigCountAggregateInputType | true
    _min?: PricingConfigMinAggregateInputType
    _max?: PricingConfigMaxAggregateInputType
  }

  export type PricingConfigGroupByOutputType = {
    id: string
    clientId: string
    paymentMethods: string
    agentDescription: string
    noPricingInfoText: string
    createdAt: Date
    updatedAt: Date
    _count: PricingConfigCountAggregateOutputType | null
    _min: PricingConfigMinAggregateOutputType | null
    _max: PricingConfigMaxAggregateOutputType | null
  }

  type GetPricingConfigGroupByPayload<T extends PricingConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingConfigGroupByOutputType[P]>
            : GetScalarType<T[P], PricingConfigGroupByOutputType[P]>
        }
      >
    >


  export type PricingConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    paymentMethods?: boolean
    agentDescription?: boolean
    noPricingInfoText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingConfig"]>

  export type PricingConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    paymentMethods?: boolean
    agentDescription?: boolean
    noPricingInfoText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingConfig"]>

  export type PricingConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    paymentMethods?: boolean
    agentDescription?: boolean
    noPricingInfoText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingConfig"]>

  export type PricingConfigSelectScalar = {
    id?: boolean
    clientId?: boolean
    paymentMethods?: boolean
    agentDescription?: boolean
    noPricingInfoText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "paymentMethods" | "agentDescription" | "noPricingInfoText" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingConfig"]>
  export type PricingConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type PricingConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type PricingConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $PricingConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingConfig"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      paymentMethods: string
      agentDescription: string
      noPricingInfoText: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingConfig"]>
    composites: {}
  }

  type PricingConfigGetPayload<S extends boolean | null | undefined | PricingConfigDefaultArgs> = $Result.GetResult<Prisma.$PricingConfigPayload, S>

  type PricingConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingConfigCountAggregateInputType | true
    }

  export interface PricingConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingConfig'], meta: { name: 'PricingConfig' } }
    /**
     * Find zero or one PricingConfig that matches the filter.
     * @param {PricingConfigFindUniqueArgs} args - Arguments to find a PricingConfig
     * @example
     * // Get one PricingConfig
     * const pricingConfig = await prisma.pricingConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingConfigFindUniqueArgs>(args: SelectSubset<T, PricingConfigFindUniqueArgs<ExtArgs>>): Prisma__PricingConfigClient<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingConfigFindUniqueOrThrowArgs} args - Arguments to find a PricingConfig
     * @example
     * // Get one PricingConfig
     * const pricingConfig = await prisma.pricingConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingConfigClient<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingConfigFindFirstArgs} args - Arguments to find a PricingConfig
     * @example
     * // Get one PricingConfig
     * const pricingConfig = await prisma.pricingConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingConfigFindFirstArgs>(args?: SelectSubset<T, PricingConfigFindFirstArgs<ExtArgs>>): Prisma__PricingConfigClient<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingConfigFindFirstOrThrowArgs} args - Arguments to find a PricingConfig
     * @example
     * // Get one PricingConfig
     * const pricingConfig = await prisma.pricingConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingConfigClient<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingConfigs
     * const pricingConfigs = await prisma.pricingConfig.findMany()
     * 
     * // Get first 10 PricingConfigs
     * const pricingConfigs = await prisma.pricingConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingConfigWithIdOnly = await prisma.pricingConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingConfigFindManyArgs>(args?: SelectSubset<T, PricingConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingConfig.
     * @param {PricingConfigCreateArgs} args - Arguments to create a PricingConfig.
     * @example
     * // Create one PricingConfig
     * const PricingConfig = await prisma.pricingConfig.create({
     *   data: {
     *     // ... data to create a PricingConfig
     *   }
     * })
     * 
     */
    create<T extends PricingConfigCreateArgs>(args: SelectSubset<T, PricingConfigCreateArgs<ExtArgs>>): Prisma__PricingConfigClient<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingConfigs.
     * @param {PricingConfigCreateManyArgs} args - Arguments to create many PricingConfigs.
     * @example
     * // Create many PricingConfigs
     * const pricingConfig = await prisma.pricingConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingConfigCreateManyArgs>(args?: SelectSubset<T, PricingConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingConfigs and returns the data saved in the database.
     * @param {PricingConfigCreateManyAndReturnArgs} args - Arguments to create many PricingConfigs.
     * @example
     * // Create many PricingConfigs
     * const pricingConfig = await prisma.pricingConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingConfigs and only return the `id`
     * const pricingConfigWithIdOnly = await prisma.pricingConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingConfig.
     * @param {PricingConfigDeleteArgs} args - Arguments to delete one PricingConfig.
     * @example
     * // Delete one PricingConfig
     * const PricingConfig = await prisma.pricingConfig.delete({
     *   where: {
     *     // ... filter to delete one PricingConfig
     *   }
     * })
     * 
     */
    delete<T extends PricingConfigDeleteArgs>(args: SelectSubset<T, PricingConfigDeleteArgs<ExtArgs>>): Prisma__PricingConfigClient<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingConfig.
     * @param {PricingConfigUpdateArgs} args - Arguments to update one PricingConfig.
     * @example
     * // Update one PricingConfig
     * const pricingConfig = await prisma.pricingConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingConfigUpdateArgs>(args: SelectSubset<T, PricingConfigUpdateArgs<ExtArgs>>): Prisma__PricingConfigClient<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingConfigs.
     * @param {PricingConfigDeleteManyArgs} args - Arguments to filter PricingConfigs to delete.
     * @example
     * // Delete a few PricingConfigs
     * const { count } = await prisma.pricingConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingConfigDeleteManyArgs>(args?: SelectSubset<T, PricingConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingConfigs
     * const pricingConfig = await prisma.pricingConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingConfigUpdateManyArgs>(args: SelectSubset<T, PricingConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingConfigs and returns the data updated in the database.
     * @param {PricingConfigUpdateManyAndReturnArgs} args - Arguments to update many PricingConfigs.
     * @example
     * // Update many PricingConfigs
     * const pricingConfig = await prisma.pricingConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingConfigs and only return the `id`
     * const pricingConfigWithIdOnly = await prisma.pricingConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PricingConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingConfig.
     * @param {PricingConfigUpsertArgs} args - Arguments to update or create a PricingConfig.
     * @example
     * // Update or create a PricingConfig
     * const pricingConfig = await prisma.pricingConfig.upsert({
     *   create: {
     *     // ... data to create a PricingConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingConfig we want to update
     *   }
     * })
     */
    upsert<T extends PricingConfigUpsertArgs>(args: SelectSubset<T, PricingConfigUpsertArgs<ExtArgs>>): Prisma__PricingConfigClient<$Result.GetResult<Prisma.$PricingConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingConfigCountArgs} args - Arguments to filter PricingConfigs to count.
     * @example
     * // Count the number of PricingConfigs
     * const count = await prisma.pricingConfig.count({
     *   where: {
     *     // ... the filter for the PricingConfigs we want to count
     *   }
     * })
    **/
    count<T extends PricingConfigCountArgs>(
      args?: Subset<T, PricingConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PricingConfigAggregateArgs>(args: Subset<T, PricingConfigAggregateArgs>): Prisma.PrismaPromise<GetPricingConfigAggregateType<T>>

    /**
     * Group by PricingConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PricingConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingConfigGroupByArgs['orderBy'] }
        : { orderBy?: PricingConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricingConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingConfig model
   */
  readonly fields: PricingConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PricingConfig model
   */
  interface PricingConfigFieldRefs {
    readonly id: FieldRef<"PricingConfig", 'String'>
    readonly clientId: FieldRef<"PricingConfig", 'String'>
    readonly paymentMethods: FieldRef<"PricingConfig", 'String'>
    readonly agentDescription: FieldRef<"PricingConfig", 'String'>
    readonly noPricingInfoText: FieldRef<"PricingConfig", 'String'>
    readonly createdAt: FieldRef<"PricingConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingConfig findUnique
   */
  export type PricingConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which PricingConfig to fetch.
     */
    where: PricingConfigWhereUniqueInput
  }

  /**
   * PricingConfig findUniqueOrThrow
   */
  export type PricingConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which PricingConfig to fetch.
     */
    where: PricingConfigWhereUniqueInput
  }

  /**
   * PricingConfig findFirst
   */
  export type PricingConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which PricingConfig to fetch.
     */
    where?: PricingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingConfigs to fetch.
     */
    orderBy?: PricingConfigOrderByWithRelationInput | PricingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingConfigs.
     */
    cursor?: PricingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingConfigs.
     */
    distinct?: PricingConfigScalarFieldEnum | PricingConfigScalarFieldEnum[]
  }

  /**
   * PricingConfig findFirstOrThrow
   */
  export type PricingConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which PricingConfig to fetch.
     */
    where?: PricingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingConfigs to fetch.
     */
    orderBy?: PricingConfigOrderByWithRelationInput | PricingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingConfigs.
     */
    cursor?: PricingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingConfigs.
     */
    distinct?: PricingConfigScalarFieldEnum | PricingConfigScalarFieldEnum[]
  }

  /**
   * PricingConfig findMany
   */
  export type PricingConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which PricingConfigs to fetch.
     */
    where?: PricingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingConfigs to fetch.
     */
    orderBy?: PricingConfigOrderByWithRelationInput | PricingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingConfigs.
     */
    cursor?: PricingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingConfigs.
     */
    skip?: number
    distinct?: PricingConfigScalarFieldEnum | PricingConfigScalarFieldEnum[]
  }

  /**
   * PricingConfig create
   */
  export type PricingConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingConfig.
     */
    data: XOR<PricingConfigCreateInput, PricingConfigUncheckedCreateInput>
  }

  /**
   * PricingConfig createMany
   */
  export type PricingConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingConfigs.
     */
    data: PricingConfigCreateManyInput | PricingConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingConfig createManyAndReturn
   */
  export type PricingConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * The data used to create many PricingConfigs.
     */
    data: PricingConfigCreateManyInput | PricingConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingConfig update
   */
  export type PricingConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingConfig.
     */
    data: XOR<PricingConfigUpdateInput, PricingConfigUncheckedUpdateInput>
    /**
     * Choose, which PricingConfig to update.
     */
    where: PricingConfigWhereUniqueInput
  }

  /**
   * PricingConfig updateMany
   */
  export type PricingConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingConfigs.
     */
    data: XOR<PricingConfigUpdateManyMutationInput, PricingConfigUncheckedUpdateManyInput>
    /**
     * Filter which PricingConfigs to update
     */
    where?: PricingConfigWhereInput
    /**
     * Limit how many PricingConfigs to update.
     */
    limit?: number
  }

  /**
   * PricingConfig updateManyAndReturn
   */
  export type PricingConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * The data used to update PricingConfigs.
     */
    data: XOR<PricingConfigUpdateManyMutationInput, PricingConfigUncheckedUpdateManyInput>
    /**
     * Filter which PricingConfigs to update
     */
    where?: PricingConfigWhereInput
    /**
     * Limit how many PricingConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingConfig upsert
   */
  export type PricingConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingConfig to update in case it exists.
     */
    where: PricingConfigWhereUniqueInput
    /**
     * In case the PricingConfig found by the `where` argument doesn't exist, create a new PricingConfig with this data.
     */
    create: XOR<PricingConfigCreateInput, PricingConfigUncheckedCreateInput>
    /**
     * In case the PricingConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingConfigUpdateInput, PricingConfigUncheckedUpdateInput>
  }

  /**
   * PricingConfig delete
   */
  export type PricingConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
    /**
     * Filter which PricingConfig to delete.
     */
    where: PricingConfigWhereUniqueInput
  }

  /**
   * PricingConfig deleteMany
   */
  export type PricingConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingConfigs to delete
     */
    where?: PricingConfigWhereInput
    /**
     * Limit how many PricingConfigs to delete.
     */
    limit?: number
  }

  /**
   * PricingConfig without action
   */
  export type PricingConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingConfig
     */
    select?: PricingConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingConfig
     */
    omit?: PricingConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingConfigInclude<ExtArgs> | null
  }


  /**
   * Model ServicesConfig
   */

  export type AggregateServicesConfig = {
    _count: ServicesConfigCountAggregateOutputType | null
    _min: ServicesConfigMinAggregateOutputType | null
    _max: ServicesConfigMaxAggregateOutputType | null
  }

  export type ServicesConfigMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    servicesOffered: string | null
    agentDescription: string | null
    conversationStyle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicesConfigMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    servicesOffered: string | null
    agentDescription: string | null
    conversationStyle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServicesConfigCountAggregateOutputType = {
    id: number
    clientId: number
    servicesOffered: number
    agentDescription: number
    conversationStyle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServicesConfigMinAggregateInputType = {
    id?: true
    clientId?: true
    servicesOffered?: true
    agentDescription?: true
    conversationStyle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicesConfigMaxAggregateInputType = {
    id?: true
    clientId?: true
    servicesOffered?: true
    agentDescription?: true
    conversationStyle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServicesConfigCountAggregateInputType = {
    id?: true
    clientId?: true
    servicesOffered?: true
    agentDescription?: true
    conversationStyle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServicesConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicesConfig to aggregate.
     */
    where?: ServicesConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicesConfigs to fetch.
     */
    orderBy?: ServicesConfigOrderByWithRelationInput | ServicesConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicesConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicesConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicesConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicesConfigs
    **/
    _count?: true | ServicesConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesConfigMaxAggregateInputType
  }

  export type GetServicesConfigAggregateType<T extends ServicesConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateServicesConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicesConfig[P]>
      : GetScalarType<T[P], AggregateServicesConfig[P]>
  }




  export type ServicesConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesConfigWhereInput
    orderBy?: ServicesConfigOrderByWithAggregationInput | ServicesConfigOrderByWithAggregationInput[]
    by: ServicesConfigScalarFieldEnum[] | ServicesConfigScalarFieldEnum
    having?: ServicesConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesConfigCountAggregateInputType | true
    _min?: ServicesConfigMinAggregateInputType
    _max?: ServicesConfigMaxAggregateInputType
  }

  export type ServicesConfigGroupByOutputType = {
    id: string
    clientId: string
    servicesOffered: string
    agentDescription: string
    conversationStyle: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServicesConfigCountAggregateOutputType | null
    _min: ServicesConfigMinAggregateOutputType | null
    _max: ServicesConfigMaxAggregateOutputType | null
  }

  type GetServicesConfigGroupByPayload<T extends ServicesConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesConfigGroupByOutputType[P]>
        }
      >
    >


  export type ServicesConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    servicesOffered?: boolean
    agentDescription?: boolean
    conversationStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicesConfig"]>

  export type ServicesConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    servicesOffered?: boolean
    agentDescription?: boolean
    conversationStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicesConfig"]>

  export type ServicesConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    servicesOffered?: boolean
    agentDescription?: boolean
    conversationStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicesConfig"]>

  export type ServicesConfigSelectScalar = {
    id?: boolean
    clientId?: boolean
    servicesOffered?: boolean
    agentDescription?: boolean
    conversationStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServicesConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "servicesOffered" | "agentDescription" | "conversationStyle" | "createdAt" | "updatedAt", ExtArgs["result"]["servicesConfig"]>
  export type ServicesConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ServicesConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ServicesConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ServicesConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicesConfig"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      servicesOffered: string
      agentDescription: string
      conversationStyle: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["servicesConfig"]>
    composites: {}
  }

  type ServicesConfigGetPayload<S extends boolean | null | undefined | ServicesConfigDefaultArgs> = $Result.GetResult<Prisma.$ServicesConfigPayload, S>

  type ServicesConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicesConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesConfigCountAggregateInputType | true
    }

  export interface ServicesConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicesConfig'], meta: { name: 'ServicesConfig' } }
    /**
     * Find zero or one ServicesConfig that matches the filter.
     * @param {ServicesConfigFindUniqueArgs} args - Arguments to find a ServicesConfig
     * @example
     * // Get one ServicesConfig
     * const servicesConfig = await prisma.servicesConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicesConfigFindUniqueArgs>(args: SelectSubset<T, ServicesConfigFindUniqueArgs<ExtArgs>>): Prisma__ServicesConfigClient<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicesConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicesConfigFindUniqueOrThrowArgs} args - Arguments to find a ServicesConfig
     * @example
     * // Get one ServicesConfig
     * const servicesConfig = await prisma.servicesConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicesConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicesConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicesConfigClient<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicesConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesConfigFindFirstArgs} args - Arguments to find a ServicesConfig
     * @example
     * // Get one ServicesConfig
     * const servicesConfig = await prisma.servicesConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicesConfigFindFirstArgs>(args?: SelectSubset<T, ServicesConfigFindFirstArgs<ExtArgs>>): Prisma__ServicesConfigClient<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicesConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesConfigFindFirstOrThrowArgs} args - Arguments to find a ServicesConfig
     * @example
     * // Get one ServicesConfig
     * const servicesConfig = await prisma.servicesConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicesConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicesConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicesConfigClient<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicesConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicesConfigs
     * const servicesConfigs = await prisma.servicesConfig.findMany()
     * 
     * // Get first 10 ServicesConfigs
     * const servicesConfigs = await prisma.servicesConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesConfigWithIdOnly = await prisma.servicesConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicesConfigFindManyArgs>(args?: SelectSubset<T, ServicesConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicesConfig.
     * @param {ServicesConfigCreateArgs} args - Arguments to create a ServicesConfig.
     * @example
     * // Create one ServicesConfig
     * const ServicesConfig = await prisma.servicesConfig.create({
     *   data: {
     *     // ... data to create a ServicesConfig
     *   }
     * })
     * 
     */
    create<T extends ServicesConfigCreateArgs>(args: SelectSubset<T, ServicesConfigCreateArgs<ExtArgs>>): Prisma__ServicesConfigClient<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicesConfigs.
     * @param {ServicesConfigCreateManyArgs} args - Arguments to create many ServicesConfigs.
     * @example
     * // Create many ServicesConfigs
     * const servicesConfig = await prisma.servicesConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicesConfigCreateManyArgs>(args?: SelectSubset<T, ServicesConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicesConfigs and returns the data saved in the database.
     * @param {ServicesConfigCreateManyAndReturnArgs} args - Arguments to create many ServicesConfigs.
     * @example
     * // Create many ServicesConfigs
     * const servicesConfig = await prisma.servicesConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicesConfigs and only return the `id`
     * const servicesConfigWithIdOnly = await prisma.servicesConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicesConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicesConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicesConfig.
     * @param {ServicesConfigDeleteArgs} args - Arguments to delete one ServicesConfig.
     * @example
     * // Delete one ServicesConfig
     * const ServicesConfig = await prisma.servicesConfig.delete({
     *   where: {
     *     // ... filter to delete one ServicesConfig
     *   }
     * })
     * 
     */
    delete<T extends ServicesConfigDeleteArgs>(args: SelectSubset<T, ServicesConfigDeleteArgs<ExtArgs>>): Prisma__ServicesConfigClient<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicesConfig.
     * @param {ServicesConfigUpdateArgs} args - Arguments to update one ServicesConfig.
     * @example
     * // Update one ServicesConfig
     * const servicesConfig = await prisma.servicesConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicesConfigUpdateArgs>(args: SelectSubset<T, ServicesConfigUpdateArgs<ExtArgs>>): Prisma__ServicesConfigClient<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicesConfigs.
     * @param {ServicesConfigDeleteManyArgs} args - Arguments to filter ServicesConfigs to delete.
     * @example
     * // Delete a few ServicesConfigs
     * const { count } = await prisma.servicesConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicesConfigDeleteManyArgs>(args?: SelectSubset<T, ServicesConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicesConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicesConfigs
     * const servicesConfig = await prisma.servicesConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicesConfigUpdateManyArgs>(args: SelectSubset<T, ServicesConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicesConfigs and returns the data updated in the database.
     * @param {ServicesConfigUpdateManyAndReturnArgs} args - Arguments to update many ServicesConfigs.
     * @example
     * // Update many ServicesConfigs
     * const servicesConfig = await prisma.servicesConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicesConfigs and only return the `id`
     * const servicesConfigWithIdOnly = await prisma.servicesConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicesConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicesConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicesConfig.
     * @param {ServicesConfigUpsertArgs} args - Arguments to update or create a ServicesConfig.
     * @example
     * // Update or create a ServicesConfig
     * const servicesConfig = await prisma.servicesConfig.upsert({
     *   create: {
     *     // ... data to create a ServicesConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicesConfig we want to update
     *   }
     * })
     */
    upsert<T extends ServicesConfigUpsertArgs>(args: SelectSubset<T, ServicesConfigUpsertArgs<ExtArgs>>): Prisma__ServicesConfigClient<$Result.GetResult<Prisma.$ServicesConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicesConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesConfigCountArgs} args - Arguments to filter ServicesConfigs to count.
     * @example
     * // Count the number of ServicesConfigs
     * const count = await prisma.servicesConfig.count({
     *   where: {
     *     // ... the filter for the ServicesConfigs we want to count
     *   }
     * })
    **/
    count<T extends ServicesConfigCountArgs>(
      args?: Subset<T, ServicesConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicesConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicesConfigAggregateArgs>(args: Subset<T, ServicesConfigAggregateArgs>): Prisma.PrismaPromise<GetServicesConfigAggregateType<T>>

    /**
     * Group by ServicesConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicesConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesConfigGroupByArgs['orderBy'] }
        : { orderBy?: ServicesConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicesConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicesConfig model
   */
  readonly fields: ServicesConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicesConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicesConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicesConfig model
   */
  interface ServicesConfigFieldRefs {
    readonly id: FieldRef<"ServicesConfig", 'String'>
    readonly clientId: FieldRef<"ServicesConfig", 'String'>
    readonly servicesOffered: FieldRef<"ServicesConfig", 'String'>
    readonly agentDescription: FieldRef<"ServicesConfig", 'String'>
    readonly conversationStyle: FieldRef<"ServicesConfig", 'String'>
    readonly createdAt: FieldRef<"ServicesConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"ServicesConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServicesConfig findUnique
   */
  export type ServicesConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * Filter, which ServicesConfig to fetch.
     */
    where: ServicesConfigWhereUniqueInput
  }

  /**
   * ServicesConfig findUniqueOrThrow
   */
  export type ServicesConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * Filter, which ServicesConfig to fetch.
     */
    where: ServicesConfigWhereUniqueInput
  }

  /**
   * ServicesConfig findFirst
   */
  export type ServicesConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * Filter, which ServicesConfig to fetch.
     */
    where?: ServicesConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicesConfigs to fetch.
     */
    orderBy?: ServicesConfigOrderByWithRelationInput | ServicesConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicesConfigs.
     */
    cursor?: ServicesConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicesConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicesConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicesConfigs.
     */
    distinct?: ServicesConfigScalarFieldEnum | ServicesConfigScalarFieldEnum[]
  }

  /**
   * ServicesConfig findFirstOrThrow
   */
  export type ServicesConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * Filter, which ServicesConfig to fetch.
     */
    where?: ServicesConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicesConfigs to fetch.
     */
    orderBy?: ServicesConfigOrderByWithRelationInput | ServicesConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicesConfigs.
     */
    cursor?: ServicesConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicesConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicesConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicesConfigs.
     */
    distinct?: ServicesConfigScalarFieldEnum | ServicesConfigScalarFieldEnum[]
  }

  /**
   * ServicesConfig findMany
   */
  export type ServicesConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * Filter, which ServicesConfigs to fetch.
     */
    where?: ServicesConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicesConfigs to fetch.
     */
    orderBy?: ServicesConfigOrderByWithRelationInput | ServicesConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicesConfigs.
     */
    cursor?: ServicesConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicesConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicesConfigs.
     */
    skip?: number
    distinct?: ServicesConfigScalarFieldEnum | ServicesConfigScalarFieldEnum[]
  }

  /**
   * ServicesConfig create
   */
  export type ServicesConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicesConfig.
     */
    data: XOR<ServicesConfigCreateInput, ServicesConfigUncheckedCreateInput>
  }

  /**
   * ServicesConfig createMany
   */
  export type ServicesConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicesConfigs.
     */
    data: ServicesConfigCreateManyInput | ServicesConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicesConfig createManyAndReturn
   */
  export type ServicesConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * The data used to create many ServicesConfigs.
     */
    data: ServicesConfigCreateManyInput | ServicesConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicesConfig update
   */
  export type ServicesConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicesConfig.
     */
    data: XOR<ServicesConfigUpdateInput, ServicesConfigUncheckedUpdateInput>
    /**
     * Choose, which ServicesConfig to update.
     */
    where: ServicesConfigWhereUniqueInput
  }

  /**
   * ServicesConfig updateMany
   */
  export type ServicesConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicesConfigs.
     */
    data: XOR<ServicesConfigUpdateManyMutationInput, ServicesConfigUncheckedUpdateManyInput>
    /**
     * Filter which ServicesConfigs to update
     */
    where?: ServicesConfigWhereInput
    /**
     * Limit how many ServicesConfigs to update.
     */
    limit?: number
  }

  /**
   * ServicesConfig updateManyAndReturn
   */
  export type ServicesConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * The data used to update ServicesConfigs.
     */
    data: XOR<ServicesConfigUpdateManyMutationInput, ServicesConfigUncheckedUpdateManyInput>
    /**
     * Filter which ServicesConfigs to update
     */
    where?: ServicesConfigWhereInput
    /**
     * Limit how many ServicesConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicesConfig upsert
   */
  export type ServicesConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicesConfig to update in case it exists.
     */
    where: ServicesConfigWhereUniqueInput
    /**
     * In case the ServicesConfig found by the `where` argument doesn't exist, create a new ServicesConfig with this data.
     */
    create: XOR<ServicesConfigCreateInput, ServicesConfigUncheckedCreateInput>
    /**
     * In case the ServicesConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicesConfigUpdateInput, ServicesConfigUncheckedUpdateInput>
  }

  /**
   * ServicesConfig delete
   */
  export type ServicesConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
    /**
     * Filter which ServicesConfig to delete.
     */
    where: ServicesConfigWhereUniqueInput
  }

  /**
   * ServicesConfig deleteMany
   */
  export type ServicesConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicesConfigs to delete
     */
    where?: ServicesConfigWhereInput
    /**
     * Limit how many ServicesConfigs to delete.
     */
    limit?: number
  }

  /**
   * ServicesConfig without action
   */
  export type ServicesConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesConfig
     */
    select?: ServicesConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicesConfig
     */
    omit?: ServicesConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicesConfigInclude<ExtArgs> | null
  }


  /**
   * Model SmalltalkConfig
   */

  export type AggregateSmalltalkConfig = {
    _count: SmalltalkConfigCountAggregateOutputType | null
    _min: SmalltalkConfigMinAggregateOutputType | null
    _max: SmalltalkConfigMaxAggregateOutputType | null
  }

  export type SmalltalkConfigMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    smalltalkGuidelines: string | null
    agentDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmalltalkConfigMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    smalltalkGuidelines: string | null
    agentDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmalltalkConfigCountAggregateOutputType = {
    id: number
    clientId: number
    smalltalkGuidelines: number
    agentDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SmalltalkConfigMinAggregateInputType = {
    id?: true
    clientId?: true
    smalltalkGuidelines?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmalltalkConfigMaxAggregateInputType = {
    id?: true
    clientId?: true
    smalltalkGuidelines?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmalltalkConfigCountAggregateInputType = {
    id?: true
    clientId?: true
    smalltalkGuidelines?: true
    agentDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SmalltalkConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmalltalkConfig to aggregate.
     */
    where?: SmalltalkConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmalltalkConfigs to fetch.
     */
    orderBy?: SmalltalkConfigOrderByWithRelationInput | SmalltalkConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmalltalkConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmalltalkConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmalltalkConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmalltalkConfigs
    **/
    _count?: true | SmalltalkConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmalltalkConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmalltalkConfigMaxAggregateInputType
  }

  export type GetSmalltalkConfigAggregateType<T extends SmalltalkConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSmalltalkConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmalltalkConfig[P]>
      : GetScalarType<T[P], AggregateSmalltalkConfig[P]>
  }




  export type SmalltalkConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmalltalkConfigWhereInput
    orderBy?: SmalltalkConfigOrderByWithAggregationInput | SmalltalkConfigOrderByWithAggregationInput[]
    by: SmalltalkConfigScalarFieldEnum[] | SmalltalkConfigScalarFieldEnum
    having?: SmalltalkConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmalltalkConfigCountAggregateInputType | true
    _min?: SmalltalkConfigMinAggregateInputType
    _max?: SmalltalkConfigMaxAggregateInputType
  }

  export type SmalltalkConfigGroupByOutputType = {
    id: string
    clientId: string
    smalltalkGuidelines: string
    agentDescription: string
    createdAt: Date
    updatedAt: Date
    _count: SmalltalkConfigCountAggregateOutputType | null
    _min: SmalltalkConfigMinAggregateOutputType | null
    _max: SmalltalkConfigMaxAggregateOutputType | null
  }

  type GetSmalltalkConfigGroupByPayload<T extends SmalltalkConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmalltalkConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmalltalkConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmalltalkConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SmalltalkConfigGroupByOutputType[P]>
        }
      >
    >


  export type SmalltalkConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    smalltalkGuidelines?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smalltalkConfig"]>

  export type SmalltalkConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    smalltalkGuidelines?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smalltalkConfig"]>

  export type SmalltalkConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    smalltalkGuidelines?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smalltalkConfig"]>

  export type SmalltalkConfigSelectScalar = {
    id?: boolean
    clientId?: boolean
    smalltalkGuidelines?: boolean
    agentDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SmalltalkConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "smalltalkGuidelines" | "agentDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["smalltalkConfig"]>
  export type SmalltalkConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type SmalltalkConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type SmalltalkConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $SmalltalkConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmalltalkConfig"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      smalltalkGuidelines: string
      agentDescription: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["smalltalkConfig"]>
    composites: {}
  }

  type SmalltalkConfigGetPayload<S extends boolean | null | undefined | SmalltalkConfigDefaultArgs> = $Result.GetResult<Prisma.$SmalltalkConfigPayload, S>

  type SmalltalkConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SmalltalkConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SmalltalkConfigCountAggregateInputType | true
    }

  export interface SmalltalkConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmalltalkConfig'], meta: { name: 'SmalltalkConfig' } }
    /**
     * Find zero or one SmalltalkConfig that matches the filter.
     * @param {SmalltalkConfigFindUniqueArgs} args - Arguments to find a SmalltalkConfig
     * @example
     * // Get one SmalltalkConfig
     * const smalltalkConfig = await prisma.smalltalkConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmalltalkConfigFindUniqueArgs>(args: SelectSubset<T, SmalltalkConfigFindUniqueArgs<ExtArgs>>): Prisma__SmalltalkConfigClient<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SmalltalkConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SmalltalkConfigFindUniqueOrThrowArgs} args - Arguments to find a SmalltalkConfig
     * @example
     * // Get one SmalltalkConfig
     * const smalltalkConfig = await prisma.smalltalkConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmalltalkConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SmalltalkConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmalltalkConfigClient<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmalltalkConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmalltalkConfigFindFirstArgs} args - Arguments to find a SmalltalkConfig
     * @example
     * // Get one SmalltalkConfig
     * const smalltalkConfig = await prisma.smalltalkConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmalltalkConfigFindFirstArgs>(args?: SelectSubset<T, SmalltalkConfigFindFirstArgs<ExtArgs>>): Prisma__SmalltalkConfigClient<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmalltalkConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmalltalkConfigFindFirstOrThrowArgs} args - Arguments to find a SmalltalkConfig
     * @example
     * // Get one SmalltalkConfig
     * const smalltalkConfig = await prisma.smalltalkConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmalltalkConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SmalltalkConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmalltalkConfigClient<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SmalltalkConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmalltalkConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmalltalkConfigs
     * const smalltalkConfigs = await prisma.smalltalkConfig.findMany()
     * 
     * // Get first 10 SmalltalkConfigs
     * const smalltalkConfigs = await prisma.smalltalkConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smalltalkConfigWithIdOnly = await prisma.smalltalkConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmalltalkConfigFindManyArgs>(args?: SelectSubset<T, SmalltalkConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SmalltalkConfig.
     * @param {SmalltalkConfigCreateArgs} args - Arguments to create a SmalltalkConfig.
     * @example
     * // Create one SmalltalkConfig
     * const SmalltalkConfig = await prisma.smalltalkConfig.create({
     *   data: {
     *     // ... data to create a SmalltalkConfig
     *   }
     * })
     * 
     */
    create<T extends SmalltalkConfigCreateArgs>(args: SelectSubset<T, SmalltalkConfigCreateArgs<ExtArgs>>): Prisma__SmalltalkConfigClient<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SmalltalkConfigs.
     * @param {SmalltalkConfigCreateManyArgs} args - Arguments to create many SmalltalkConfigs.
     * @example
     * // Create many SmalltalkConfigs
     * const smalltalkConfig = await prisma.smalltalkConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmalltalkConfigCreateManyArgs>(args?: SelectSubset<T, SmalltalkConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmalltalkConfigs and returns the data saved in the database.
     * @param {SmalltalkConfigCreateManyAndReturnArgs} args - Arguments to create many SmalltalkConfigs.
     * @example
     * // Create many SmalltalkConfigs
     * const smalltalkConfig = await prisma.smalltalkConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmalltalkConfigs and only return the `id`
     * const smalltalkConfigWithIdOnly = await prisma.smalltalkConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmalltalkConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SmalltalkConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SmalltalkConfig.
     * @param {SmalltalkConfigDeleteArgs} args - Arguments to delete one SmalltalkConfig.
     * @example
     * // Delete one SmalltalkConfig
     * const SmalltalkConfig = await prisma.smalltalkConfig.delete({
     *   where: {
     *     // ... filter to delete one SmalltalkConfig
     *   }
     * })
     * 
     */
    delete<T extends SmalltalkConfigDeleteArgs>(args: SelectSubset<T, SmalltalkConfigDeleteArgs<ExtArgs>>): Prisma__SmalltalkConfigClient<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SmalltalkConfig.
     * @param {SmalltalkConfigUpdateArgs} args - Arguments to update one SmalltalkConfig.
     * @example
     * // Update one SmalltalkConfig
     * const smalltalkConfig = await prisma.smalltalkConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmalltalkConfigUpdateArgs>(args: SelectSubset<T, SmalltalkConfigUpdateArgs<ExtArgs>>): Prisma__SmalltalkConfigClient<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SmalltalkConfigs.
     * @param {SmalltalkConfigDeleteManyArgs} args - Arguments to filter SmalltalkConfigs to delete.
     * @example
     * // Delete a few SmalltalkConfigs
     * const { count } = await prisma.smalltalkConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmalltalkConfigDeleteManyArgs>(args?: SelectSubset<T, SmalltalkConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmalltalkConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmalltalkConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmalltalkConfigs
     * const smalltalkConfig = await prisma.smalltalkConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmalltalkConfigUpdateManyArgs>(args: SelectSubset<T, SmalltalkConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmalltalkConfigs and returns the data updated in the database.
     * @param {SmalltalkConfigUpdateManyAndReturnArgs} args - Arguments to update many SmalltalkConfigs.
     * @example
     * // Update many SmalltalkConfigs
     * const smalltalkConfig = await prisma.smalltalkConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SmalltalkConfigs and only return the `id`
     * const smalltalkConfigWithIdOnly = await prisma.smalltalkConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SmalltalkConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SmalltalkConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SmalltalkConfig.
     * @param {SmalltalkConfigUpsertArgs} args - Arguments to update or create a SmalltalkConfig.
     * @example
     * // Update or create a SmalltalkConfig
     * const smalltalkConfig = await prisma.smalltalkConfig.upsert({
     *   create: {
     *     // ... data to create a SmalltalkConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmalltalkConfig we want to update
     *   }
     * })
     */
    upsert<T extends SmalltalkConfigUpsertArgs>(args: SelectSubset<T, SmalltalkConfigUpsertArgs<ExtArgs>>): Prisma__SmalltalkConfigClient<$Result.GetResult<Prisma.$SmalltalkConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SmalltalkConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmalltalkConfigCountArgs} args - Arguments to filter SmalltalkConfigs to count.
     * @example
     * // Count the number of SmalltalkConfigs
     * const count = await prisma.smalltalkConfig.count({
     *   where: {
     *     // ... the filter for the SmalltalkConfigs we want to count
     *   }
     * })
    **/
    count<T extends SmalltalkConfigCountArgs>(
      args?: Subset<T, SmalltalkConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmalltalkConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmalltalkConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmalltalkConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SmalltalkConfigAggregateArgs>(args: Subset<T, SmalltalkConfigAggregateArgs>): Prisma.PrismaPromise<GetSmalltalkConfigAggregateType<T>>

    /**
     * Group by SmalltalkConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmalltalkConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SmalltalkConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmalltalkConfigGroupByArgs['orderBy'] }
        : { orderBy?: SmalltalkConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SmalltalkConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmalltalkConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmalltalkConfig model
   */
  readonly fields: SmalltalkConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmalltalkConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmalltalkConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SmalltalkConfig model
   */
  interface SmalltalkConfigFieldRefs {
    readonly id: FieldRef<"SmalltalkConfig", 'String'>
    readonly clientId: FieldRef<"SmalltalkConfig", 'String'>
    readonly smalltalkGuidelines: FieldRef<"SmalltalkConfig", 'String'>
    readonly agentDescription: FieldRef<"SmalltalkConfig", 'String'>
    readonly createdAt: FieldRef<"SmalltalkConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SmalltalkConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmalltalkConfig findUnique
   */
  export type SmalltalkConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * Filter, which SmalltalkConfig to fetch.
     */
    where: SmalltalkConfigWhereUniqueInput
  }

  /**
   * SmalltalkConfig findUniqueOrThrow
   */
  export type SmalltalkConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * Filter, which SmalltalkConfig to fetch.
     */
    where: SmalltalkConfigWhereUniqueInput
  }

  /**
   * SmalltalkConfig findFirst
   */
  export type SmalltalkConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * Filter, which SmalltalkConfig to fetch.
     */
    where?: SmalltalkConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmalltalkConfigs to fetch.
     */
    orderBy?: SmalltalkConfigOrderByWithRelationInput | SmalltalkConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmalltalkConfigs.
     */
    cursor?: SmalltalkConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmalltalkConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmalltalkConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmalltalkConfigs.
     */
    distinct?: SmalltalkConfigScalarFieldEnum | SmalltalkConfigScalarFieldEnum[]
  }

  /**
   * SmalltalkConfig findFirstOrThrow
   */
  export type SmalltalkConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * Filter, which SmalltalkConfig to fetch.
     */
    where?: SmalltalkConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmalltalkConfigs to fetch.
     */
    orderBy?: SmalltalkConfigOrderByWithRelationInput | SmalltalkConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmalltalkConfigs.
     */
    cursor?: SmalltalkConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmalltalkConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmalltalkConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmalltalkConfigs.
     */
    distinct?: SmalltalkConfigScalarFieldEnum | SmalltalkConfigScalarFieldEnum[]
  }

  /**
   * SmalltalkConfig findMany
   */
  export type SmalltalkConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * Filter, which SmalltalkConfigs to fetch.
     */
    where?: SmalltalkConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmalltalkConfigs to fetch.
     */
    orderBy?: SmalltalkConfigOrderByWithRelationInput | SmalltalkConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmalltalkConfigs.
     */
    cursor?: SmalltalkConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmalltalkConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmalltalkConfigs.
     */
    skip?: number
    distinct?: SmalltalkConfigScalarFieldEnum | SmalltalkConfigScalarFieldEnum[]
  }

  /**
   * SmalltalkConfig create
   */
  export type SmalltalkConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a SmalltalkConfig.
     */
    data: XOR<SmalltalkConfigCreateInput, SmalltalkConfigUncheckedCreateInput>
  }

  /**
   * SmalltalkConfig createMany
   */
  export type SmalltalkConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmalltalkConfigs.
     */
    data: SmalltalkConfigCreateManyInput | SmalltalkConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmalltalkConfig createManyAndReturn
   */
  export type SmalltalkConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SmalltalkConfigs.
     */
    data: SmalltalkConfigCreateManyInput | SmalltalkConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SmalltalkConfig update
   */
  export type SmalltalkConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a SmalltalkConfig.
     */
    data: XOR<SmalltalkConfigUpdateInput, SmalltalkConfigUncheckedUpdateInput>
    /**
     * Choose, which SmalltalkConfig to update.
     */
    where: SmalltalkConfigWhereUniqueInput
  }

  /**
   * SmalltalkConfig updateMany
   */
  export type SmalltalkConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmalltalkConfigs.
     */
    data: XOR<SmalltalkConfigUpdateManyMutationInput, SmalltalkConfigUncheckedUpdateManyInput>
    /**
     * Filter which SmalltalkConfigs to update
     */
    where?: SmalltalkConfigWhereInput
    /**
     * Limit how many SmalltalkConfigs to update.
     */
    limit?: number
  }

  /**
   * SmalltalkConfig updateManyAndReturn
   */
  export type SmalltalkConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * The data used to update SmalltalkConfigs.
     */
    data: XOR<SmalltalkConfigUpdateManyMutationInput, SmalltalkConfigUncheckedUpdateManyInput>
    /**
     * Filter which SmalltalkConfigs to update
     */
    where?: SmalltalkConfigWhereInput
    /**
     * Limit how many SmalltalkConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SmalltalkConfig upsert
   */
  export type SmalltalkConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the SmalltalkConfig to update in case it exists.
     */
    where: SmalltalkConfigWhereUniqueInput
    /**
     * In case the SmalltalkConfig found by the `where` argument doesn't exist, create a new SmalltalkConfig with this data.
     */
    create: XOR<SmalltalkConfigCreateInput, SmalltalkConfigUncheckedCreateInput>
    /**
     * In case the SmalltalkConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmalltalkConfigUpdateInput, SmalltalkConfigUncheckedUpdateInput>
  }

  /**
   * SmalltalkConfig delete
   */
  export type SmalltalkConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
    /**
     * Filter which SmalltalkConfig to delete.
     */
    where: SmalltalkConfigWhereUniqueInput
  }

  /**
   * SmalltalkConfig deleteMany
   */
  export type SmalltalkConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmalltalkConfigs to delete
     */
    where?: SmalltalkConfigWhereInput
    /**
     * Limit how many SmalltalkConfigs to delete.
     */
    limit?: number
  }

  /**
   * SmalltalkConfig without action
   */
  export type SmalltalkConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmalltalkConfig
     */
    select?: SmalltalkConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmalltalkConfig
     */
    omit?: SmalltalkConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmalltalkConfigInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClassificationScalarFieldEnum: {
    id: 'id',
    question: 'question',
    response: 'response',
    createdAt: 'createdAt'
  };

  export type ClassificationScalarFieldEnum = (typeof ClassificationScalarFieldEnum)[keyof typeof ClassificationScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    companyName: 'companyName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    whatsappAccessToken: 'whatsappAccessToken',
    whatsappPhoneNumberId: 'whatsappPhoneNumberId',
    whatsappBusinessId: 'whatsappBusinessId',
    onboardingCompleted: 'onboardingCompleted'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const WhatsappNumberScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsappNumberScalarFieldEnum = (typeof WhatsappNumberScalarFieldEnum)[keyof typeof WhatsappNumberScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContactConfigScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    contactSuggestion: 'contactSuggestion',
    agentDescription: 'agentDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactConfigScalarFieldEnum = (typeof ContactConfigScalarFieldEnum)[keyof typeof ContactConfigScalarFieldEnum]


  export const HistoryConfigScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    companyHistory: 'companyHistory',
    agentDescription: 'agentDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HistoryConfigScalarFieldEnum = (typeof HistoryConfigScalarFieldEnum)[keyof typeof HistoryConfigScalarFieldEnum]


  export const MemoryConfigScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    memoryGuidelines: 'memoryGuidelines',
    agentDescription: 'agentDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemoryConfigScalarFieldEnum = (typeof MemoryConfigScalarFieldEnum)[keyof typeof MemoryConfigScalarFieldEnum]


  export const PricingConfigScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    paymentMethods: 'paymentMethods',
    agentDescription: 'agentDescription',
    noPricingInfoText: 'noPricingInfoText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingConfigScalarFieldEnum = (typeof PricingConfigScalarFieldEnum)[keyof typeof PricingConfigScalarFieldEnum]


  export const ServicesConfigScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    servicesOffered: 'servicesOffered',
    agentDescription: 'agentDescription',
    conversationStyle: 'conversationStyle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServicesConfigScalarFieldEnum = (typeof ServicesConfigScalarFieldEnum)[keyof typeof ServicesConfigScalarFieldEnum]


  export const SmalltalkConfigScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    smalltalkGuidelines: 'smalltalkGuidelines',
    agentDescription: 'agentDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SmalltalkConfigScalarFieldEnum = (typeof SmalltalkConfigScalarFieldEnum)[keyof typeof SmalltalkConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClassificationWhereInput = {
    AND?: ClassificationWhereInput | ClassificationWhereInput[]
    OR?: ClassificationWhereInput[]
    NOT?: ClassificationWhereInput | ClassificationWhereInput[]
    id?: IntFilter<"Classification"> | number
    question?: StringFilter<"Classification"> | string
    response?: StringFilter<"Classification"> | string
    createdAt?: DateTimeFilter<"Classification"> | Date | string
  }

  export type ClassificationOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassificationWhereInput | ClassificationWhereInput[]
    OR?: ClassificationWhereInput[]
    NOT?: ClassificationWhereInput | ClassificationWhereInput[]
    question?: StringFilter<"Classification"> | string
    response?: StringFilter<"Classification"> | string
    createdAt?: DateTimeFilter<"Classification"> | Date | string
  }, "id">

  export type ClassificationOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    _count?: ClassificationCountOrderByAggregateInput
    _avg?: ClassificationAvgOrderByAggregateInput
    _max?: ClassificationMaxOrderByAggregateInput
    _min?: ClassificationMinOrderByAggregateInput
    _sum?: ClassificationSumOrderByAggregateInput
  }

  export type ClassificationScalarWhereWithAggregatesInput = {
    AND?: ClassificationScalarWhereWithAggregatesInput | ClassificationScalarWhereWithAggregatesInput[]
    OR?: ClassificationScalarWhereWithAggregatesInput[]
    NOT?: ClassificationScalarWhereWithAggregatesInput | ClassificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Classification"> | number
    question?: StringWithAggregatesFilter<"Classification"> | string
    response?: StringWithAggregatesFilter<"Classification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Classification"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    companyName?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    whatsappAccessToken?: StringNullableFilter<"Client"> | string | null
    whatsappPhoneNumberId?: StringNullableFilter<"Client"> | string | null
    whatsappBusinessId?: StringNullableFilter<"Client"> | string | null
    onboardingCompleted?: BoolFilter<"Client"> | boolean
    contactConfig?: ContactConfigListRelationFilter
    historyConfig?: HistoryConfigListRelationFilter
    memoryConfig?: MemoryConfigListRelationFilter
    pricingConfig?: PricingConfigListRelationFilter
    servicesConfig?: ServicesConfigListRelationFilter
    smalltalkConfig?: SmalltalkConfigListRelationFilter
    users?: UserListRelationFilter
    whatsappNumbers?: WhatsappNumberListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whatsappAccessToken?: SortOrderInput | SortOrder
    whatsappPhoneNumberId?: SortOrderInput | SortOrder
    whatsappBusinessId?: SortOrderInput | SortOrder
    onboardingCompleted?: SortOrder
    contactConfig?: ContactConfigOrderByRelationAggregateInput
    historyConfig?: HistoryConfigOrderByRelationAggregateInput
    memoryConfig?: MemoryConfigOrderByRelationAggregateInput
    pricingConfig?: PricingConfigOrderByRelationAggregateInput
    servicesConfig?: ServicesConfigOrderByRelationAggregateInput
    smalltalkConfig?: SmalltalkConfigOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    whatsappNumbers?: WhatsappNumberOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    companyName?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    whatsappAccessToken?: StringNullableFilter<"Client"> | string | null
    whatsappPhoneNumberId?: StringNullableFilter<"Client"> | string | null
    whatsappBusinessId?: StringNullableFilter<"Client"> | string | null
    onboardingCompleted?: BoolFilter<"Client"> | boolean
    contactConfig?: ContactConfigListRelationFilter
    historyConfig?: HistoryConfigListRelationFilter
    memoryConfig?: MemoryConfigListRelationFilter
    pricingConfig?: PricingConfigListRelationFilter
    servicesConfig?: ServicesConfigListRelationFilter
    smalltalkConfig?: SmalltalkConfigListRelationFilter
    users?: UserListRelationFilter
    whatsappNumbers?: WhatsappNumberListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whatsappAccessToken?: SortOrderInput | SortOrder
    whatsappPhoneNumberId?: SortOrderInput | SortOrder
    whatsappBusinessId?: SortOrderInput | SortOrder
    onboardingCompleted?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    companyName?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    whatsappAccessToken?: StringNullableWithAggregatesFilter<"Client"> | string | null
    whatsappPhoneNumberId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    whatsappBusinessId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    onboardingCompleted?: BoolWithAggregatesFilter<"Client"> | boolean
  }

  export type WhatsappNumberWhereInput = {
    AND?: WhatsappNumberWhereInput | WhatsappNumberWhereInput[]
    OR?: WhatsappNumberWhereInput[]
    NOT?: WhatsappNumberWhereInput | WhatsappNumberWhereInput[]
    id?: StringFilter<"WhatsappNumber"> | string
    phoneNumber?: StringFilter<"WhatsappNumber"> | string
    clientId?: StringFilter<"WhatsappNumber"> | string
    createdAt?: DateTimeFilter<"WhatsappNumber"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappNumber"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type WhatsappNumberOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type WhatsappNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    AND?: WhatsappNumberWhereInput | WhatsappNumberWhereInput[]
    OR?: WhatsappNumberWhereInput[]
    NOT?: WhatsappNumberWhereInput | WhatsappNumberWhereInput[]
    clientId?: StringFilter<"WhatsappNumber"> | string
    createdAt?: DateTimeFilter<"WhatsappNumber"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappNumber"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "phoneNumber">

  export type WhatsappNumberOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsappNumberCountOrderByAggregateInput
    _max?: WhatsappNumberMaxOrderByAggregateInput
    _min?: WhatsappNumberMinOrderByAggregateInput
  }

  export type WhatsappNumberScalarWhereWithAggregatesInput = {
    AND?: WhatsappNumberScalarWhereWithAggregatesInput | WhatsappNumberScalarWhereWithAggregatesInput[]
    OR?: WhatsappNumberScalarWhereWithAggregatesInput[]
    NOT?: WhatsappNumberScalarWhereWithAggregatesInput | WhatsappNumberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsappNumber"> | string
    phoneNumber?: StringWithAggregatesFilter<"WhatsappNumber"> | string
    clientId?: StringWithAggregatesFilter<"WhatsappNumber"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WhatsappNumber"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsappNumber"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    clientId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    clientId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    clientId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContactConfigWhereInput = {
    AND?: ContactConfigWhereInput | ContactConfigWhereInput[]
    OR?: ContactConfigWhereInput[]
    NOT?: ContactConfigWhereInput | ContactConfigWhereInput[]
    id?: StringFilter<"ContactConfig"> | string
    clientId?: StringFilter<"ContactConfig"> | string
    contactSuggestion?: StringFilter<"ContactConfig"> | string
    agentDescription?: StringFilter<"ContactConfig"> | string
    createdAt?: DateTimeFilter<"ContactConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ContactConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type ContactConfigOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    contactSuggestion?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ContactConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactConfigWhereInput | ContactConfigWhereInput[]
    OR?: ContactConfigWhereInput[]
    NOT?: ContactConfigWhereInput | ContactConfigWhereInput[]
    clientId?: StringFilter<"ContactConfig"> | string
    contactSuggestion?: StringFilter<"ContactConfig"> | string
    agentDescription?: StringFilter<"ContactConfig"> | string
    createdAt?: DateTimeFilter<"ContactConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ContactConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type ContactConfigOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    contactSuggestion?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactConfigCountOrderByAggregateInput
    _max?: ContactConfigMaxOrderByAggregateInput
    _min?: ContactConfigMinOrderByAggregateInput
  }

  export type ContactConfigScalarWhereWithAggregatesInput = {
    AND?: ContactConfigScalarWhereWithAggregatesInput | ContactConfigScalarWhereWithAggregatesInput[]
    OR?: ContactConfigScalarWhereWithAggregatesInput[]
    NOT?: ContactConfigScalarWhereWithAggregatesInput | ContactConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactConfig"> | string
    clientId?: StringWithAggregatesFilter<"ContactConfig"> | string
    contactSuggestion?: StringWithAggregatesFilter<"ContactConfig"> | string
    agentDescription?: StringWithAggregatesFilter<"ContactConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactConfig"> | Date | string
  }

  export type HistoryConfigWhereInput = {
    AND?: HistoryConfigWhereInput | HistoryConfigWhereInput[]
    OR?: HistoryConfigWhereInput[]
    NOT?: HistoryConfigWhereInput | HistoryConfigWhereInput[]
    id?: StringFilter<"HistoryConfig"> | string
    clientId?: StringFilter<"HistoryConfig"> | string
    companyHistory?: StringFilter<"HistoryConfig"> | string
    agentDescription?: StringFilter<"HistoryConfig"> | string
    createdAt?: DateTimeFilter<"HistoryConfig"> | Date | string
    updatedAt?: DateTimeFilter<"HistoryConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type HistoryConfigOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    companyHistory?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type HistoryConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryConfigWhereInput | HistoryConfigWhereInput[]
    OR?: HistoryConfigWhereInput[]
    NOT?: HistoryConfigWhereInput | HistoryConfigWhereInput[]
    clientId?: StringFilter<"HistoryConfig"> | string
    companyHistory?: StringFilter<"HistoryConfig"> | string
    agentDescription?: StringFilter<"HistoryConfig"> | string
    createdAt?: DateTimeFilter<"HistoryConfig"> | Date | string
    updatedAt?: DateTimeFilter<"HistoryConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type HistoryConfigOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    companyHistory?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HistoryConfigCountOrderByAggregateInput
    _max?: HistoryConfigMaxOrderByAggregateInput
    _min?: HistoryConfigMinOrderByAggregateInput
  }

  export type HistoryConfigScalarWhereWithAggregatesInput = {
    AND?: HistoryConfigScalarWhereWithAggregatesInput | HistoryConfigScalarWhereWithAggregatesInput[]
    OR?: HistoryConfigScalarWhereWithAggregatesInput[]
    NOT?: HistoryConfigScalarWhereWithAggregatesInput | HistoryConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoryConfig"> | string
    clientId?: StringWithAggregatesFilter<"HistoryConfig"> | string
    companyHistory?: StringWithAggregatesFilter<"HistoryConfig"> | string
    agentDescription?: StringWithAggregatesFilter<"HistoryConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HistoryConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HistoryConfig"> | Date | string
  }

  export type MemoryConfigWhereInput = {
    AND?: MemoryConfigWhereInput | MemoryConfigWhereInput[]
    OR?: MemoryConfigWhereInput[]
    NOT?: MemoryConfigWhereInput | MemoryConfigWhereInput[]
    id?: StringFilter<"MemoryConfig"> | string
    clientId?: StringFilter<"MemoryConfig"> | string
    memoryGuidelines?: StringFilter<"MemoryConfig"> | string
    agentDescription?: StringFilter<"MemoryConfig"> | string
    createdAt?: DateTimeFilter<"MemoryConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MemoryConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type MemoryConfigOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    memoryGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type MemoryConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemoryConfigWhereInput | MemoryConfigWhereInput[]
    OR?: MemoryConfigWhereInput[]
    NOT?: MemoryConfigWhereInput | MemoryConfigWhereInput[]
    clientId?: StringFilter<"MemoryConfig"> | string
    memoryGuidelines?: StringFilter<"MemoryConfig"> | string
    agentDescription?: StringFilter<"MemoryConfig"> | string
    createdAt?: DateTimeFilter<"MemoryConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MemoryConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type MemoryConfigOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    memoryGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemoryConfigCountOrderByAggregateInput
    _max?: MemoryConfigMaxOrderByAggregateInput
    _min?: MemoryConfigMinOrderByAggregateInput
  }

  export type MemoryConfigScalarWhereWithAggregatesInput = {
    AND?: MemoryConfigScalarWhereWithAggregatesInput | MemoryConfigScalarWhereWithAggregatesInput[]
    OR?: MemoryConfigScalarWhereWithAggregatesInput[]
    NOT?: MemoryConfigScalarWhereWithAggregatesInput | MemoryConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemoryConfig"> | string
    clientId?: StringWithAggregatesFilter<"MemoryConfig"> | string
    memoryGuidelines?: StringWithAggregatesFilter<"MemoryConfig"> | string
    agentDescription?: StringWithAggregatesFilter<"MemoryConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MemoryConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MemoryConfig"> | Date | string
  }

  export type PricingConfigWhereInput = {
    AND?: PricingConfigWhereInput | PricingConfigWhereInput[]
    OR?: PricingConfigWhereInput[]
    NOT?: PricingConfigWhereInput | PricingConfigWhereInput[]
    id?: StringFilter<"PricingConfig"> | string
    clientId?: StringFilter<"PricingConfig"> | string
    paymentMethods?: StringFilter<"PricingConfig"> | string
    agentDescription?: StringFilter<"PricingConfig"> | string
    noPricingInfoText?: StringFilter<"PricingConfig"> | string
    createdAt?: DateTimeFilter<"PricingConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PricingConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type PricingConfigOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    paymentMethods?: SortOrder
    agentDescription?: SortOrder
    noPricingInfoText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type PricingConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricingConfigWhereInput | PricingConfigWhereInput[]
    OR?: PricingConfigWhereInput[]
    NOT?: PricingConfigWhereInput | PricingConfigWhereInput[]
    clientId?: StringFilter<"PricingConfig"> | string
    paymentMethods?: StringFilter<"PricingConfig"> | string
    agentDescription?: StringFilter<"PricingConfig"> | string
    noPricingInfoText?: StringFilter<"PricingConfig"> | string
    createdAt?: DateTimeFilter<"PricingConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PricingConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type PricingConfigOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    paymentMethods?: SortOrder
    agentDescription?: SortOrder
    noPricingInfoText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingConfigCountOrderByAggregateInput
    _max?: PricingConfigMaxOrderByAggregateInput
    _min?: PricingConfigMinOrderByAggregateInput
  }

  export type PricingConfigScalarWhereWithAggregatesInput = {
    AND?: PricingConfigScalarWhereWithAggregatesInput | PricingConfigScalarWhereWithAggregatesInput[]
    OR?: PricingConfigScalarWhereWithAggregatesInput[]
    NOT?: PricingConfigScalarWhereWithAggregatesInput | PricingConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingConfig"> | string
    clientId?: StringWithAggregatesFilter<"PricingConfig"> | string
    paymentMethods?: StringWithAggregatesFilter<"PricingConfig"> | string
    agentDescription?: StringWithAggregatesFilter<"PricingConfig"> | string
    noPricingInfoText?: StringWithAggregatesFilter<"PricingConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PricingConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingConfig"> | Date | string
  }

  export type ServicesConfigWhereInput = {
    AND?: ServicesConfigWhereInput | ServicesConfigWhereInput[]
    OR?: ServicesConfigWhereInput[]
    NOT?: ServicesConfigWhereInput | ServicesConfigWhereInput[]
    id?: StringFilter<"ServicesConfig"> | string
    clientId?: StringFilter<"ServicesConfig"> | string
    servicesOffered?: StringFilter<"ServicesConfig"> | string
    agentDescription?: StringFilter<"ServicesConfig"> | string
    conversationStyle?: StringNullableFilter<"ServicesConfig"> | string | null
    createdAt?: DateTimeFilter<"ServicesConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ServicesConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type ServicesConfigOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicesOffered?: SortOrder
    agentDescription?: SortOrder
    conversationStyle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ServicesConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicesConfigWhereInput | ServicesConfigWhereInput[]
    OR?: ServicesConfigWhereInput[]
    NOT?: ServicesConfigWhereInput | ServicesConfigWhereInput[]
    clientId?: StringFilter<"ServicesConfig"> | string
    servicesOffered?: StringFilter<"ServicesConfig"> | string
    agentDescription?: StringFilter<"ServicesConfig"> | string
    conversationStyle?: StringNullableFilter<"ServicesConfig"> | string | null
    createdAt?: DateTimeFilter<"ServicesConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ServicesConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type ServicesConfigOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicesOffered?: SortOrder
    agentDescription?: SortOrder
    conversationStyle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServicesConfigCountOrderByAggregateInput
    _max?: ServicesConfigMaxOrderByAggregateInput
    _min?: ServicesConfigMinOrderByAggregateInput
  }

  export type ServicesConfigScalarWhereWithAggregatesInput = {
    AND?: ServicesConfigScalarWhereWithAggregatesInput | ServicesConfigScalarWhereWithAggregatesInput[]
    OR?: ServicesConfigScalarWhereWithAggregatesInput[]
    NOT?: ServicesConfigScalarWhereWithAggregatesInput | ServicesConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServicesConfig"> | string
    clientId?: StringWithAggregatesFilter<"ServicesConfig"> | string
    servicesOffered?: StringWithAggregatesFilter<"ServicesConfig"> | string
    agentDescription?: StringWithAggregatesFilter<"ServicesConfig"> | string
    conversationStyle?: StringNullableWithAggregatesFilter<"ServicesConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ServicesConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServicesConfig"> | Date | string
  }

  export type SmalltalkConfigWhereInput = {
    AND?: SmalltalkConfigWhereInput | SmalltalkConfigWhereInput[]
    OR?: SmalltalkConfigWhereInput[]
    NOT?: SmalltalkConfigWhereInput | SmalltalkConfigWhereInput[]
    id?: StringFilter<"SmalltalkConfig"> | string
    clientId?: StringFilter<"SmalltalkConfig"> | string
    smalltalkGuidelines?: StringFilter<"SmalltalkConfig"> | string
    agentDescription?: StringFilter<"SmalltalkConfig"> | string
    createdAt?: DateTimeFilter<"SmalltalkConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SmalltalkConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type SmalltalkConfigOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    smalltalkGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type SmalltalkConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SmalltalkConfigWhereInput | SmalltalkConfigWhereInput[]
    OR?: SmalltalkConfigWhereInput[]
    NOT?: SmalltalkConfigWhereInput | SmalltalkConfigWhereInput[]
    clientId?: StringFilter<"SmalltalkConfig"> | string
    smalltalkGuidelines?: StringFilter<"SmalltalkConfig"> | string
    agentDescription?: StringFilter<"SmalltalkConfig"> | string
    createdAt?: DateTimeFilter<"SmalltalkConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SmalltalkConfig"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type SmalltalkConfigOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    smalltalkGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SmalltalkConfigCountOrderByAggregateInput
    _max?: SmalltalkConfigMaxOrderByAggregateInput
    _min?: SmalltalkConfigMinOrderByAggregateInput
  }

  export type SmalltalkConfigScalarWhereWithAggregatesInput = {
    AND?: SmalltalkConfigScalarWhereWithAggregatesInput | SmalltalkConfigScalarWhereWithAggregatesInput[]
    OR?: SmalltalkConfigScalarWhereWithAggregatesInput[]
    NOT?: SmalltalkConfigScalarWhereWithAggregatesInput | SmalltalkConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SmalltalkConfig"> | string
    clientId?: StringWithAggregatesFilter<"SmalltalkConfig"> | string
    smalltalkGuidelines?: StringWithAggregatesFilter<"SmalltalkConfig"> | string
    agentDescription?: StringWithAggregatesFilter<"SmalltalkConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SmalltalkConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SmalltalkConfig"> | Date | string
  }

  export type ClassificationCreateInput = {
    question: string
    response: string
    createdAt?: Date | string
  }

  export type ClassificationUncheckedCreateInput = {
    id?: number
    question: string
    response: string
    createdAt?: Date | string
  }

  export type ClassificationUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationCreateManyInput = {
    id?: number
    question: string
    response: string
    createdAt?: Date | string
  }

  export type ClassificationUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigUncheckedCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigUncheckedCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigUncheckedCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigUncheckedCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigUncheckedCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUncheckedUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUncheckedUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUncheckedUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUncheckedUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUncheckedUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WhatsappNumberCreateInput = {
    id?: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutWhatsappNumbersInput
  }

  export type WhatsappNumberUncheckedCreateInput = {
    id?: string
    phoneNumber: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappNumberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutWhatsappNumbersNestedInput
  }

  export type WhatsappNumberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappNumberCreateManyInput = {
    id?: string
    phoneNumber: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappNumberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappNumberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactConfigCreateInput = {
    id?: string
    contactSuggestion: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutContactConfigInput
  }

  export type ContactConfigUncheckedCreateInput = {
    id?: string
    clientId: string
    contactSuggestion: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactSuggestion?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutContactConfigNestedInput
  }

  export type ContactConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    contactSuggestion?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactConfigCreateManyInput = {
    id?: string
    clientId: string
    contactSuggestion: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactSuggestion?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    contactSuggestion?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryConfigCreateInput = {
    id?: string
    companyHistory: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutHistoryConfigInput
  }

  export type HistoryConfigUncheckedCreateInput = {
    id?: string
    clientId: string
    companyHistory: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoryConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyHistory?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutHistoryConfigNestedInput
  }

  export type HistoryConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    companyHistory?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryConfigCreateManyInput = {
    id?: string
    clientId: string
    companyHistory: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoryConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyHistory?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    companyHistory?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryConfigCreateInput = {
    id?: string
    memoryGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutMemoryConfigInput
  }

  export type MemoryConfigUncheckedCreateInput = {
    id?: string
    clientId: string
    memoryGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutMemoryConfigNestedInput
  }

  export type MemoryConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    memoryGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryConfigCreateManyInput = {
    id?: string
    clientId: string
    memoryGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    memoryGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingConfigCreateInput = {
    id?: string
    paymentMethods: string
    agentDescription: string
    noPricingInfoText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutPricingConfigInput
  }

  export type PricingConfigUncheckedCreateInput = {
    id?: string
    clientId: string
    paymentMethods: string
    agentDescription: string
    noPricingInfoText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethods?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    noPricingInfoText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutPricingConfigNestedInput
  }

  export type PricingConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    paymentMethods?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    noPricingInfoText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingConfigCreateManyInput = {
    id?: string
    clientId: string
    paymentMethods: string
    agentDescription: string
    noPricingInfoText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethods?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    noPricingInfoText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    paymentMethods?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    noPricingInfoText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesConfigCreateInput = {
    id?: string
    servicesOffered: string
    agentDescription: string
    conversationStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutServicesConfigInput
  }

  export type ServicesConfigUncheckedCreateInput = {
    id?: string
    clientId: string
    servicesOffered: string
    agentDescription: string
    conversationStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicesOffered?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    conversationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutServicesConfigNestedInput
  }

  export type ServicesConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    servicesOffered?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    conversationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesConfigCreateManyInput = {
    id?: string
    clientId: string
    servicesOffered: string
    agentDescription: string
    conversationStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicesOffered?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    conversationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    servicesOffered?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    conversationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmalltalkConfigCreateInput = {
    id?: string
    smalltalkGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutSmalltalkConfigInput
  }

  export type SmalltalkConfigUncheckedCreateInput = {
    id?: string
    clientId: string
    smalltalkGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmalltalkConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    smalltalkGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSmalltalkConfigNestedInput
  }

  export type SmalltalkConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    smalltalkGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmalltalkConfigCreateManyInput = {
    id?: string
    clientId: string
    smalltalkGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmalltalkConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    smalltalkGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmalltalkConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    smalltalkGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClassificationCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassificationMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassificationMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContactConfigListRelationFilter = {
    every?: ContactConfigWhereInput
    some?: ContactConfigWhereInput
    none?: ContactConfigWhereInput
  }

  export type HistoryConfigListRelationFilter = {
    every?: HistoryConfigWhereInput
    some?: HistoryConfigWhereInput
    none?: HistoryConfigWhereInput
  }

  export type MemoryConfigListRelationFilter = {
    every?: MemoryConfigWhereInput
    some?: MemoryConfigWhereInput
    none?: MemoryConfigWhereInput
  }

  export type PricingConfigListRelationFilter = {
    every?: PricingConfigWhereInput
    some?: PricingConfigWhereInput
    none?: PricingConfigWhereInput
  }

  export type ServicesConfigListRelationFilter = {
    every?: ServicesConfigWhereInput
    some?: ServicesConfigWhereInput
    none?: ServicesConfigWhereInput
  }

  export type SmalltalkConfigListRelationFilter = {
    every?: SmalltalkConfigWhereInput
    some?: SmalltalkConfigWhereInput
    none?: SmalltalkConfigWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type WhatsappNumberListRelationFilter = {
    every?: WhatsappNumberWhereInput
    some?: WhatsappNumberWhereInput
    none?: WhatsappNumberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemoryConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PricingConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicesConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SmalltalkConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsappNumberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whatsappAccessToken?: SortOrder
    whatsappPhoneNumberId?: SortOrder
    whatsappBusinessId?: SortOrder
    onboardingCompleted?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whatsappAccessToken?: SortOrder
    whatsappPhoneNumberId?: SortOrder
    whatsappBusinessId?: SortOrder
    onboardingCompleted?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    companyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    whatsappAccessToken?: SortOrder
    whatsappPhoneNumberId?: SortOrder
    whatsappBusinessId?: SortOrder
    onboardingCompleted?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type WhatsappNumberCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsappNumberMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactConfigCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    contactSuggestion?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    contactSuggestion?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactConfigMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    contactSuggestion?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryConfigCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    companyHistory?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    companyHistory?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HistoryConfigMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    companyHistory?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemoryConfigCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    memoryGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemoryConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    memoryGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemoryConfigMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    memoryGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingConfigCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    paymentMethods?: SortOrder
    agentDescription?: SortOrder
    noPricingInfoText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    paymentMethods?: SortOrder
    agentDescription?: SortOrder
    noPricingInfoText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingConfigMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    paymentMethods?: SortOrder
    agentDescription?: SortOrder
    noPricingInfoText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesConfigCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicesOffered?: SortOrder
    agentDescription?: SortOrder
    conversationStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicesOffered?: SortOrder
    agentDescription?: SortOrder
    conversationStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServicesConfigMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    servicesOffered?: SortOrder
    agentDescription?: SortOrder
    conversationStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmalltalkConfigCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    smalltalkGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmalltalkConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    smalltalkGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmalltalkConfigMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    smalltalkGuidelines?: SortOrder
    agentDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContactConfigCreateNestedManyWithoutClientInput = {
    create?: XOR<ContactConfigCreateWithoutClientInput, ContactConfigUncheckedCreateWithoutClientInput> | ContactConfigCreateWithoutClientInput[] | ContactConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContactConfigCreateOrConnectWithoutClientInput | ContactConfigCreateOrConnectWithoutClientInput[]
    createMany?: ContactConfigCreateManyClientInputEnvelope
    connect?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
  }

  export type HistoryConfigCreateNestedManyWithoutClientInput = {
    create?: XOR<HistoryConfigCreateWithoutClientInput, HistoryConfigUncheckedCreateWithoutClientInput> | HistoryConfigCreateWithoutClientInput[] | HistoryConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: HistoryConfigCreateOrConnectWithoutClientInput | HistoryConfigCreateOrConnectWithoutClientInput[]
    createMany?: HistoryConfigCreateManyClientInputEnvelope
    connect?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
  }

  export type MemoryConfigCreateNestedManyWithoutClientInput = {
    create?: XOR<MemoryConfigCreateWithoutClientInput, MemoryConfigUncheckedCreateWithoutClientInput> | MemoryConfigCreateWithoutClientInput[] | MemoryConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MemoryConfigCreateOrConnectWithoutClientInput | MemoryConfigCreateOrConnectWithoutClientInput[]
    createMany?: MemoryConfigCreateManyClientInputEnvelope
    connect?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
  }

  export type PricingConfigCreateNestedManyWithoutClientInput = {
    create?: XOR<PricingConfigCreateWithoutClientInput, PricingConfigUncheckedCreateWithoutClientInput> | PricingConfigCreateWithoutClientInput[] | PricingConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PricingConfigCreateOrConnectWithoutClientInput | PricingConfigCreateOrConnectWithoutClientInput[]
    createMany?: PricingConfigCreateManyClientInputEnvelope
    connect?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
  }

  export type ServicesConfigCreateNestedManyWithoutClientInput = {
    create?: XOR<ServicesConfigCreateWithoutClientInput, ServicesConfigUncheckedCreateWithoutClientInput> | ServicesConfigCreateWithoutClientInput[] | ServicesConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesConfigCreateOrConnectWithoutClientInput | ServicesConfigCreateOrConnectWithoutClientInput[]
    createMany?: ServicesConfigCreateManyClientInputEnvelope
    connect?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
  }

  export type SmalltalkConfigCreateNestedManyWithoutClientInput = {
    create?: XOR<SmalltalkConfigCreateWithoutClientInput, SmalltalkConfigUncheckedCreateWithoutClientInput> | SmalltalkConfigCreateWithoutClientInput[] | SmalltalkConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SmalltalkConfigCreateOrConnectWithoutClientInput | SmalltalkConfigCreateOrConnectWithoutClientInput[]
    createMany?: SmalltalkConfigCreateManyClientInputEnvelope
    connect?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput> | UserCreateWithoutClientInput[] | UserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | UserCreateOrConnectWithoutClientInput[]
    createMany?: UserCreateManyClientInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WhatsappNumberCreateNestedManyWithoutClientInput = {
    create?: XOR<WhatsappNumberCreateWithoutClientInput, WhatsappNumberUncheckedCreateWithoutClientInput> | WhatsappNumberCreateWithoutClientInput[] | WhatsappNumberUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WhatsappNumberCreateOrConnectWithoutClientInput | WhatsappNumberCreateOrConnectWithoutClientInput[]
    createMany?: WhatsappNumberCreateManyClientInputEnvelope
    connect?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
  }

  export type ContactConfigUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ContactConfigCreateWithoutClientInput, ContactConfigUncheckedCreateWithoutClientInput> | ContactConfigCreateWithoutClientInput[] | ContactConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContactConfigCreateOrConnectWithoutClientInput | ContactConfigCreateOrConnectWithoutClientInput[]
    createMany?: ContactConfigCreateManyClientInputEnvelope
    connect?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
  }

  export type HistoryConfigUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<HistoryConfigCreateWithoutClientInput, HistoryConfigUncheckedCreateWithoutClientInput> | HistoryConfigCreateWithoutClientInput[] | HistoryConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: HistoryConfigCreateOrConnectWithoutClientInput | HistoryConfigCreateOrConnectWithoutClientInput[]
    createMany?: HistoryConfigCreateManyClientInputEnvelope
    connect?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
  }

  export type MemoryConfigUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MemoryConfigCreateWithoutClientInput, MemoryConfigUncheckedCreateWithoutClientInput> | MemoryConfigCreateWithoutClientInput[] | MemoryConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MemoryConfigCreateOrConnectWithoutClientInput | MemoryConfigCreateOrConnectWithoutClientInput[]
    createMany?: MemoryConfigCreateManyClientInputEnvelope
    connect?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
  }

  export type PricingConfigUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PricingConfigCreateWithoutClientInput, PricingConfigUncheckedCreateWithoutClientInput> | PricingConfigCreateWithoutClientInput[] | PricingConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PricingConfigCreateOrConnectWithoutClientInput | PricingConfigCreateOrConnectWithoutClientInput[]
    createMany?: PricingConfigCreateManyClientInputEnvelope
    connect?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
  }

  export type ServicesConfigUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ServicesConfigCreateWithoutClientInput, ServicesConfigUncheckedCreateWithoutClientInput> | ServicesConfigCreateWithoutClientInput[] | ServicesConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesConfigCreateOrConnectWithoutClientInput | ServicesConfigCreateOrConnectWithoutClientInput[]
    createMany?: ServicesConfigCreateManyClientInputEnvelope
    connect?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
  }

  export type SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SmalltalkConfigCreateWithoutClientInput, SmalltalkConfigUncheckedCreateWithoutClientInput> | SmalltalkConfigCreateWithoutClientInput[] | SmalltalkConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SmalltalkConfigCreateOrConnectWithoutClientInput | SmalltalkConfigCreateOrConnectWithoutClientInput[]
    createMany?: SmalltalkConfigCreateManyClientInputEnvelope
    connect?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput> | UserCreateWithoutClientInput[] | UserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | UserCreateOrConnectWithoutClientInput[]
    createMany?: UserCreateManyClientInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WhatsappNumberUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<WhatsappNumberCreateWithoutClientInput, WhatsappNumberUncheckedCreateWithoutClientInput> | WhatsappNumberCreateWithoutClientInput[] | WhatsappNumberUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WhatsappNumberCreateOrConnectWithoutClientInput | WhatsappNumberCreateOrConnectWithoutClientInput[]
    createMany?: WhatsappNumberCreateManyClientInputEnvelope
    connect?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContactConfigUpdateManyWithoutClientNestedInput = {
    create?: XOR<ContactConfigCreateWithoutClientInput, ContactConfigUncheckedCreateWithoutClientInput> | ContactConfigCreateWithoutClientInput[] | ContactConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContactConfigCreateOrConnectWithoutClientInput | ContactConfigCreateOrConnectWithoutClientInput[]
    upsert?: ContactConfigUpsertWithWhereUniqueWithoutClientInput | ContactConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ContactConfigCreateManyClientInputEnvelope
    set?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
    disconnect?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
    delete?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
    connect?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
    update?: ContactConfigUpdateWithWhereUniqueWithoutClientInput | ContactConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ContactConfigUpdateManyWithWhereWithoutClientInput | ContactConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ContactConfigScalarWhereInput | ContactConfigScalarWhereInput[]
  }

  export type HistoryConfigUpdateManyWithoutClientNestedInput = {
    create?: XOR<HistoryConfigCreateWithoutClientInput, HistoryConfigUncheckedCreateWithoutClientInput> | HistoryConfigCreateWithoutClientInput[] | HistoryConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: HistoryConfigCreateOrConnectWithoutClientInput | HistoryConfigCreateOrConnectWithoutClientInput[]
    upsert?: HistoryConfigUpsertWithWhereUniqueWithoutClientInput | HistoryConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: HistoryConfigCreateManyClientInputEnvelope
    set?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
    disconnect?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
    delete?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
    connect?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
    update?: HistoryConfigUpdateWithWhereUniqueWithoutClientInput | HistoryConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: HistoryConfigUpdateManyWithWhereWithoutClientInput | HistoryConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: HistoryConfigScalarWhereInput | HistoryConfigScalarWhereInput[]
  }

  export type MemoryConfigUpdateManyWithoutClientNestedInput = {
    create?: XOR<MemoryConfigCreateWithoutClientInput, MemoryConfigUncheckedCreateWithoutClientInput> | MemoryConfigCreateWithoutClientInput[] | MemoryConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MemoryConfigCreateOrConnectWithoutClientInput | MemoryConfigCreateOrConnectWithoutClientInput[]
    upsert?: MemoryConfigUpsertWithWhereUniqueWithoutClientInput | MemoryConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MemoryConfigCreateManyClientInputEnvelope
    set?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
    disconnect?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
    delete?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
    connect?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
    update?: MemoryConfigUpdateWithWhereUniqueWithoutClientInput | MemoryConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MemoryConfigUpdateManyWithWhereWithoutClientInput | MemoryConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MemoryConfigScalarWhereInput | MemoryConfigScalarWhereInput[]
  }

  export type PricingConfigUpdateManyWithoutClientNestedInput = {
    create?: XOR<PricingConfigCreateWithoutClientInput, PricingConfigUncheckedCreateWithoutClientInput> | PricingConfigCreateWithoutClientInput[] | PricingConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PricingConfigCreateOrConnectWithoutClientInput | PricingConfigCreateOrConnectWithoutClientInput[]
    upsert?: PricingConfigUpsertWithWhereUniqueWithoutClientInput | PricingConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PricingConfigCreateManyClientInputEnvelope
    set?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
    disconnect?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
    delete?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
    connect?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
    update?: PricingConfigUpdateWithWhereUniqueWithoutClientInput | PricingConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PricingConfigUpdateManyWithWhereWithoutClientInput | PricingConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PricingConfigScalarWhereInput | PricingConfigScalarWhereInput[]
  }

  export type ServicesConfigUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServicesConfigCreateWithoutClientInput, ServicesConfigUncheckedCreateWithoutClientInput> | ServicesConfigCreateWithoutClientInput[] | ServicesConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesConfigCreateOrConnectWithoutClientInput | ServicesConfigCreateOrConnectWithoutClientInput[]
    upsert?: ServicesConfigUpsertWithWhereUniqueWithoutClientInput | ServicesConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServicesConfigCreateManyClientInputEnvelope
    set?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
    disconnect?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
    delete?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
    connect?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
    update?: ServicesConfigUpdateWithWhereUniqueWithoutClientInput | ServicesConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServicesConfigUpdateManyWithWhereWithoutClientInput | ServicesConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServicesConfigScalarWhereInput | ServicesConfigScalarWhereInput[]
  }

  export type SmalltalkConfigUpdateManyWithoutClientNestedInput = {
    create?: XOR<SmalltalkConfigCreateWithoutClientInput, SmalltalkConfigUncheckedCreateWithoutClientInput> | SmalltalkConfigCreateWithoutClientInput[] | SmalltalkConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SmalltalkConfigCreateOrConnectWithoutClientInput | SmalltalkConfigCreateOrConnectWithoutClientInput[]
    upsert?: SmalltalkConfigUpsertWithWhereUniqueWithoutClientInput | SmalltalkConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SmalltalkConfigCreateManyClientInputEnvelope
    set?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
    disconnect?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
    delete?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
    connect?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
    update?: SmalltalkConfigUpdateWithWhereUniqueWithoutClientInput | SmalltalkConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SmalltalkConfigUpdateManyWithWhereWithoutClientInput | SmalltalkConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SmalltalkConfigScalarWhereInput | SmalltalkConfigScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClientNestedInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput> | UserCreateWithoutClientInput[] | UserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | UserCreateOrConnectWithoutClientInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientInput | UserUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UserCreateManyClientInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientInput | UserUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientInput | UserUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WhatsappNumberUpdateManyWithoutClientNestedInput = {
    create?: XOR<WhatsappNumberCreateWithoutClientInput, WhatsappNumberUncheckedCreateWithoutClientInput> | WhatsappNumberCreateWithoutClientInput[] | WhatsappNumberUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WhatsappNumberCreateOrConnectWithoutClientInput | WhatsappNumberCreateOrConnectWithoutClientInput[]
    upsert?: WhatsappNumberUpsertWithWhereUniqueWithoutClientInput | WhatsappNumberUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: WhatsappNumberCreateManyClientInputEnvelope
    set?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
    disconnect?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
    delete?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
    connect?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
    update?: WhatsappNumberUpdateWithWhereUniqueWithoutClientInput | WhatsappNumberUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: WhatsappNumberUpdateManyWithWhereWithoutClientInput | WhatsappNumberUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: WhatsappNumberScalarWhereInput | WhatsappNumberScalarWhereInput[]
  }

  export type ContactConfigUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ContactConfigCreateWithoutClientInput, ContactConfigUncheckedCreateWithoutClientInput> | ContactConfigCreateWithoutClientInput[] | ContactConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ContactConfigCreateOrConnectWithoutClientInput | ContactConfigCreateOrConnectWithoutClientInput[]
    upsert?: ContactConfigUpsertWithWhereUniqueWithoutClientInput | ContactConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ContactConfigCreateManyClientInputEnvelope
    set?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
    disconnect?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
    delete?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
    connect?: ContactConfigWhereUniqueInput | ContactConfigWhereUniqueInput[]
    update?: ContactConfigUpdateWithWhereUniqueWithoutClientInput | ContactConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ContactConfigUpdateManyWithWhereWithoutClientInput | ContactConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ContactConfigScalarWhereInput | ContactConfigScalarWhereInput[]
  }

  export type HistoryConfigUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<HistoryConfigCreateWithoutClientInput, HistoryConfigUncheckedCreateWithoutClientInput> | HistoryConfigCreateWithoutClientInput[] | HistoryConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: HistoryConfigCreateOrConnectWithoutClientInput | HistoryConfigCreateOrConnectWithoutClientInput[]
    upsert?: HistoryConfigUpsertWithWhereUniqueWithoutClientInput | HistoryConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: HistoryConfigCreateManyClientInputEnvelope
    set?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
    disconnect?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
    delete?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
    connect?: HistoryConfigWhereUniqueInput | HistoryConfigWhereUniqueInput[]
    update?: HistoryConfigUpdateWithWhereUniqueWithoutClientInput | HistoryConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: HistoryConfigUpdateManyWithWhereWithoutClientInput | HistoryConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: HistoryConfigScalarWhereInput | HistoryConfigScalarWhereInput[]
  }

  export type MemoryConfigUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MemoryConfigCreateWithoutClientInput, MemoryConfigUncheckedCreateWithoutClientInput> | MemoryConfigCreateWithoutClientInput[] | MemoryConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MemoryConfigCreateOrConnectWithoutClientInput | MemoryConfigCreateOrConnectWithoutClientInput[]
    upsert?: MemoryConfigUpsertWithWhereUniqueWithoutClientInput | MemoryConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MemoryConfigCreateManyClientInputEnvelope
    set?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
    disconnect?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
    delete?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
    connect?: MemoryConfigWhereUniqueInput | MemoryConfigWhereUniqueInput[]
    update?: MemoryConfigUpdateWithWhereUniqueWithoutClientInput | MemoryConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MemoryConfigUpdateManyWithWhereWithoutClientInput | MemoryConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MemoryConfigScalarWhereInput | MemoryConfigScalarWhereInput[]
  }

  export type PricingConfigUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PricingConfigCreateWithoutClientInput, PricingConfigUncheckedCreateWithoutClientInput> | PricingConfigCreateWithoutClientInput[] | PricingConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PricingConfigCreateOrConnectWithoutClientInput | PricingConfigCreateOrConnectWithoutClientInput[]
    upsert?: PricingConfigUpsertWithWhereUniqueWithoutClientInput | PricingConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PricingConfigCreateManyClientInputEnvelope
    set?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
    disconnect?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
    delete?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
    connect?: PricingConfigWhereUniqueInput | PricingConfigWhereUniqueInput[]
    update?: PricingConfigUpdateWithWhereUniqueWithoutClientInput | PricingConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PricingConfigUpdateManyWithWhereWithoutClientInput | PricingConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PricingConfigScalarWhereInput | PricingConfigScalarWhereInput[]
  }

  export type ServicesConfigUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServicesConfigCreateWithoutClientInput, ServicesConfigUncheckedCreateWithoutClientInput> | ServicesConfigCreateWithoutClientInput[] | ServicesConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServicesConfigCreateOrConnectWithoutClientInput | ServicesConfigCreateOrConnectWithoutClientInput[]
    upsert?: ServicesConfigUpsertWithWhereUniqueWithoutClientInput | ServicesConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServicesConfigCreateManyClientInputEnvelope
    set?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
    disconnect?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
    delete?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
    connect?: ServicesConfigWhereUniqueInput | ServicesConfigWhereUniqueInput[]
    update?: ServicesConfigUpdateWithWhereUniqueWithoutClientInput | ServicesConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServicesConfigUpdateManyWithWhereWithoutClientInput | ServicesConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServicesConfigScalarWhereInput | ServicesConfigScalarWhereInput[]
  }

  export type SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SmalltalkConfigCreateWithoutClientInput, SmalltalkConfigUncheckedCreateWithoutClientInput> | SmalltalkConfigCreateWithoutClientInput[] | SmalltalkConfigUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SmalltalkConfigCreateOrConnectWithoutClientInput | SmalltalkConfigCreateOrConnectWithoutClientInput[]
    upsert?: SmalltalkConfigUpsertWithWhereUniqueWithoutClientInput | SmalltalkConfigUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SmalltalkConfigCreateManyClientInputEnvelope
    set?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
    disconnect?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
    delete?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
    connect?: SmalltalkConfigWhereUniqueInput | SmalltalkConfigWhereUniqueInput[]
    update?: SmalltalkConfigUpdateWithWhereUniqueWithoutClientInput | SmalltalkConfigUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SmalltalkConfigUpdateManyWithWhereWithoutClientInput | SmalltalkConfigUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SmalltalkConfigScalarWhereInput | SmalltalkConfigScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput> | UserCreateWithoutClientInput[] | UserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClientInput | UserCreateOrConnectWithoutClientInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClientInput | UserUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: UserCreateManyClientInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClientInput | UserUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClientInput | UserUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<WhatsappNumberCreateWithoutClientInput, WhatsappNumberUncheckedCreateWithoutClientInput> | WhatsappNumberCreateWithoutClientInput[] | WhatsappNumberUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WhatsappNumberCreateOrConnectWithoutClientInput | WhatsappNumberCreateOrConnectWithoutClientInput[]
    upsert?: WhatsappNumberUpsertWithWhereUniqueWithoutClientInput | WhatsappNumberUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: WhatsappNumberCreateManyClientInputEnvelope
    set?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
    disconnect?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
    delete?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
    connect?: WhatsappNumberWhereUniqueInput | WhatsappNumberWhereUniqueInput[]
    update?: WhatsappNumberUpdateWithWhereUniqueWithoutClientInput | WhatsappNumberUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: WhatsappNumberUpdateManyWithWhereWithoutClientInput | WhatsappNumberUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: WhatsappNumberScalarWhereInput | WhatsappNumberScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutWhatsappNumbersInput = {
    create?: XOR<ClientCreateWithoutWhatsappNumbersInput, ClientUncheckedCreateWithoutWhatsappNumbersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutWhatsappNumbersInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutWhatsappNumbersNestedInput = {
    create?: XOR<ClientCreateWithoutWhatsappNumbersInput, ClientUncheckedCreateWithoutWhatsappNumbersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutWhatsappNumbersInput
    upsert?: ClientUpsertWithoutWhatsappNumbersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutWhatsappNumbersInput, ClientUpdateWithoutWhatsappNumbersInput>, ClientUncheckedUpdateWithoutWhatsappNumbersInput>
  }

  export type ClientCreateNestedOneWithoutUsersInput = {
    create?: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutUsersInput
    upsert?: ClientUpsertWithoutUsersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutUsersInput, ClientUpdateWithoutUsersInput>, ClientUncheckedUpdateWithoutUsersInput>
  }

  export type ClientCreateNestedOneWithoutContactConfigInput = {
    create?: XOR<ClientCreateWithoutContactConfigInput, ClientUncheckedCreateWithoutContactConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutContactConfigInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutContactConfigNestedInput = {
    create?: XOR<ClientCreateWithoutContactConfigInput, ClientUncheckedCreateWithoutContactConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutContactConfigInput
    upsert?: ClientUpsertWithoutContactConfigInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutContactConfigInput, ClientUpdateWithoutContactConfigInput>, ClientUncheckedUpdateWithoutContactConfigInput>
  }

  export type ClientCreateNestedOneWithoutHistoryConfigInput = {
    create?: XOR<ClientCreateWithoutHistoryConfigInput, ClientUncheckedCreateWithoutHistoryConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutHistoryConfigInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutHistoryConfigNestedInput = {
    create?: XOR<ClientCreateWithoutHistoryConfigInput, ClientUncheckedCreateWithoutHistoryConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutHistoryConfigInput
    upsert?: ClientUpsertWithoutHistoryConfigInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutHistoryConfigInput, ClientUpdateWithoutHistoryConfigInput>, ClientUncheckedUpdateWithoutHistoryConfigInput>
  }

  export type ClientCreateNestedOneWithoutMemoryConfigInput = {
    create?: XOR<ClientCreateWithoutMemoryConfigInput, ClientUncheckedCreateWithoutMemoryConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMemoryConfigInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutMemoryConfigNestedInput = {
    create?: XOR<ClientCreateWithoutMemoryConfigInput, ClientUncheckedCreateWithoutMemoryConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutMemoryConfigInput
    upsert?: ClientUpsertWithoutMemoryConfigInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutMemoryConfigInput, ClientUpdateWithoutMemoryConfigInput>, ClientUncheckedUpdateWithoutMemoryConfigInput>
  }

  export type ClientCreateNestedOneWithoutPricingConfigInput = {
    create?: XOR<ClientCreateWithoutPricingConfigInput, ClientUncheckedCreateWithoutPricingConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPricingConfigInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutPricingConfigNestedInput = {
    create?: XOR<ClientCreateWithoutPricingConfigInput, ClientUncheckedCreateWithoutPricingConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPricingConfigInput
    upsert?: ClientUpsertWithoutPricingConfigInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutPricingConfigInput, ClientUpdateWithoutPricingConfigInput>, ClientUncheckedUpdateWithoutPricingConfigInput>
  }

  export type ClientCreateNestedOneWithoutServicesConfigInput = {
    create?: XOR<ClientCreateWithoutServicesConfigInput, ClientUncheckedCreateWithoutServicesConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutServicesConfigInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutServicesConfigNestedInput = {
    create?: XOR<ClientCreateWithoutServicesConfigInput, ClientUncheckedCreateWithoutServicesConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutServicesConfigInput
    upsert?: ClientUpsertWithoutServicesConfigInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutServicesConfigInput, ClientUpdateWithoutServicesConfigInput>, ClientUncheckedUpdateWithoutServicesConfigInput>
  }

  export type ClientCreateNestedOneWithoutSmalltalkConfigInput = {
    create?: XOR<ClientCreateWithoutSmalltalkConfigInput, ClientUncheckedCreateWithoutSmalltalkConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSmalltalkConfigInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutSmalltalkConfigNestedInput = {
    create?: XOR<ClientCreateWithoutSmalltalkConfigInput, ClientUncheckedCreateWithoutSmalltalkConfigInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSmalltalkConfigInput
    upsert?: ClientUpsertWithoutSmalltalkConfigInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSmalltalkConfigInput, ClientUpdateWithoutSmalltalkConfigInput>, ClientUncheckedUpdateWithoutSmalltalkConfigInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactConfigCreateWithoutClientInput = {
    id?: string
    contactSuggestion: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactConfigUncheckedCreateWithoutClientInput = {
    id?: string
    contactSuggestion: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactConfigCreateOrConnectWithoutClientInput = {
    where: ContactConfigWhereUniqueInput
    create: XOR<ContactConfigCreateWithoutClientInput, ContactConfigUncheckedCreateWithoutClientInput>
  }

  export type ContactConfigCreateManyClientInputEnvelope = {
    data: ContactConfigCreateManyClientInput | ContactConfigCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type HistoryConfigCreateWithoutClientInput = {
    id?: string
    companyHistory: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoryConfigUncheckedCreateWithoutClientInput = {
    id?: string
    companyHistory: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoryConfigCreateOrConnectWithoutClientInput = {
    where: HistoryConfigWhereUniqueInput
    create: XOR<HistoryConfigCreateWithoutClientInput, HistoryConfigUncheckedCreateWithoutClientInput>
  }

  export type HistoryConfigCreateManyClientInputEnvelope = {
    data: HistoryConfigCreateManyClientInput | HistoryConfigCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type MemoryConfigCreateWithoutClientInput = {
    id?: string
    memoryGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryConfigUncheckedCreateWithoutClientInput = {
    id?: string
    memoryGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryConfigCreateOrConnectWithoutClientInput = {
    where: MemoryConfigWhereUniqueInput
    create: XOR<MemoryConfigCreateWithoutClientInput, MemoryConfigUncheckedCreateWithoutClientInput>
  }

  export type MemoryConfigCreateManyClientInputEnvelope = {
    data: MemoryConfigCreateManyClientInput | MemoryConfigCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type PricingConfigCreateWithoutClientInput = {
    id?: string
    paymentMethods: string
    agentDescription: string
    noPricingInfoText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingConfigUncheckedCreateWithoutClientInput = {
    id?: string
    paymentMethods: string
    agentDescription: string
    noPricingInfoText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingConfigCreateOrConnectWithoutClientInput = {
    where: PricingConfigWhereUniqueInput
    create: XOR<PricingConfigCreateWithoutClientInput, PricingConfigUncheckedCreateWithoutClientInput>
  }

  export type PricingConfigCreateManyClientInputEnvelope = {
    data: PricingConfigCreateManyClientInput | PricingConfigCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ServicesConfigCreateWithoutClientInput = {
    id?: string
    servicesOffered: string
    agentDescription: string
    conversationStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesConfigUncheckedCreateWithoutClientInput = {
    id?: string
    servicesOffered: string
    agentDescription: string
    conversationStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesConfigCreateOrConnectWithoutClientInput = {
    where: ServicesConfigWhereUniqueInput
    create: XOR<ServicesConfigCreateWithoutClientInput, ServicesConfigUncheckedCreateWithoutClientInput>
  }

  export type ServicesConfigCreateManyClientInputEnvelope = {
    data: ServicesConfigCreateManyClientInput | ServicesConfigCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SmalltalkConfigCreateWithoutClientInput = {
    id?: string
    smalltalkGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmalltalkConfigUncheckedCreateWithoutClientInput = {
    id?: string
    smalltalkGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmalltalkConfigCreateOrConnectWithoutClientInput = {
    where: SmalltalkConfigWhereUniqueInput
    create: XOR<SmalltalkConfigCreateWithoutClientInput, SmalltalkConfigUncheckedCreateWithoutClientInput>
  }

  export type SmalltalkConfigCreateManyClientInputEnvelope = {
    data: SmalltalkConfigCreateManyClientInput | SmalltalkConfigCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutClientInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutClientInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type UserCreateManyClientInputEnvelope = {
    data: UserCreateManyClientInput | UserCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type WhatsappNumberCreateWithoutClientInput = {
    id?: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappNumberUncheckedCreateWithoutClientInput = {
    id?: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappNumberCreateOrConnectWithoutClientInput = {
    where: WhatsappNumberWhereUniqueInput
    create: XOR<WhatsappNumberCreateWithoutClientInput, WhatsappNumberUncheckedCreateWithoutClientInput>
  }

  export type WhatsappNumberCreateManyClientInputEnvelope = {
    data: WhatsappNumberCreateManyClientInput | WhatsappNumberCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ContactConfigUpsertWithWhereUniqueWithoutClientInput = {
    where: ContactConfigWhereUniqueInput
    update: XOR<ContactConfigUpdateWithoutClientInput, ContactConfigUncheckedUpdateWithoutClientInput>
    create: XOR<ContactConfigCreateWithoutClientInput, ContactConfigUncheckedCreateWithoutClientInput>
  }

  export type ContactConfigUpdateWithWhereUniqueWithoutClientInput = {
    where: ContactConfigWhereUniqueInput
    data: XOR<ContactConfigUpdateWithoutClientInput, ContactConfigUncheckedUpdateWithoutClientInput>
  }

  export type ContactConfigUpdateManyWithWhereWithoutClientInput = {
    where: ContactConfigScalarWhereInput
    data: XOR<ContactConfigUpdateManyMutationInput, ContactConfigUncheckedUpdateManyWithoutClientInput>
  }

  export type ContactConfigScalarWhereInput = {
    AND?: ContactConfigScalarWhereInput | ContactConfigScalarWhereInput[]
    OR?: ContactConfigScalarWhereInput[]
    NOT?: ContactConfigScalarWhereInput | ContactConfigScalarWhereInput[]
    id?: StringFilter<"ContactConfig"> | string
    clientId?: StringFilter<"ContactConfig"> | string
    contactSuggestion?: StringFilter<"ContactConfig"> | string
    agentDescription?: StringFilter<"ContactConfig"> | string
    createdAt?: DateTimeFilter<"ContactConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ContactConfig"> | Date | string
  }

  export type HistoryConfigUpsertWithWhereUniqueWithoutClientInput = {
    where: HistoryConfigWhereUniqueInput
    update: XOR<HistoryConfigUpdateWithoutClientInput, HistoryConfigUncheckedUpdateWithoutClientInput>
    create: XOR<HistoryConfigCreateWithoutClientInput, HistoryConfigUncheckedCreateWithoutClientInput>
  }

  export type HistoryConfigUpdateWithWhereUniqueWithoutClientInput = {
    where: HistoryConfigWhereUniqueInput
    data: XOR<HistoryConfigUpdateWithoutClientInput, HistoryConfigUncheckedUpdateWithoutClientInput>
  }

  export type HistoryConfigUpdateManyWithWhereWithoutClientInput = {
    where: HistoryConfigScalarWhereInput
    data: XOR<HistoryConfigUpdateManyMutationInput, HistoryConfigUncheckedUpdateManyWithoutClientInput>
  }

  export type HistoryConfigScalarWhereInput = {
    AND?: HistoryConfigScalarWhereInput | HistoryConfigScalarWhereInput[]
    OR?: HistoryConfigScalarWhereInput[]
    NOT?: HistoryConfigScalarWhereInput | HistoryConfigScalarWhereInput[]
    id?: StringFilter<"HistoryConfig"> | string
    clientId?: StringFilter<"HistoryConfig"> | string
    companyHistory?: StringFilter<"HistoryConfig"> | string
    agentDescription?: StringFilter<"HistoryConfig"> | string
    createdAt?: DateTimeFilter<"HistoryConfig"> | Date | string
    updatedAt?: DateTimeFilter<"HistoryConfig"> | Date | string
  }

  export type MemoryConfigUpsertWithWhereUniqueWithoutClientInput = {
    where: MemoryConfigWhereUniqueInput
    update: XOR<MemoryConfigUpdateWithoutClientInput, MemoryConfigUncheckedUpdateWithoutClientInput>
    create: XOR<MemoryConfigCreateWithoutClientInput, MemoryConfigUncheckedCreateWithoutClientInput>
  }

  export type MemoryConfigUpdateWithWhereUniqueWithoutClientInput = {
    where: MemoryConfigWhereUniqueInput
    data: XOR<MemoryConfigUpdateWithoutClientInput, MemoryConfigUncheckedUpdateWithoutClientInput>
  }

  export type MemoryConfigUpdateManyWithWhereWithoutClientInput = {
    where: MemoryConfigScalarWhereInput
    data: XOR<MemoryConfigUpdateManyMutationInput, MemoryConfigUncheckedUpdateManyWithoutClientInput>
  }

  export type MemoryConfigScalarWhereInput = {
    AND?: MemoryConfigScalarWhereInput | MemoryConfigScalarWhereInput[]
    OR?: MemoryConfigScalarWhereInput[]
    NOT?: MemoryConfigScalarWhereInput | MemoryConfigScalarWhereInput[]
    id?: StringFilter<"MemoryConfig"> | string
    clientId?: StringFilter<"MemoryConfig"> | string
    memoryGuidelines?: StringFilter<"MemoryConfig"> | string
    agentDescription?: StringFilter<"MemoryConfig"> | string
    createdAt?: DateTimeFilter<"MemoryConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MemoryConfig"> | Date | string
  }

  export type PricingConfigUpsertWithWhereUniqueWithoutClientInput = {
    where: PricingConfigWhereUniqueInput
    update: XOR<PricingConfigUpdateWithoutClientInput, PricingConfigUncheckedUpdateWithoutClientInput>
    create: XOR<PricingConfigCreateWithoutClientInput, PricingConfigUncheckedCreateWithoutClientInput>
  }

  export type PricingConfigUpdateWithWhereUniqueWithoutClientInput = {
    where: PricingConfigWhereUniqueInput
    data: XOR<PricingConfigUpdateWithoutClientInput, PricingConfigUncheckedUpdateWithoutClientInput>
  }

  export type PricingConfigUpdateManyWithWhereWithoutClientInput = {
    where: PricingConfigScalarWhereInput
    data: XOR<PricingConfigUpdateManyMutationInput, PricingConfigUncheckedUpdateManyWithoutClientInput>
  }

  export type PricingConfigScalarWhereInput = {
    AND?: PricingConfigScalarWhereInput | PricingConfigScalarWhereInput[]
    OR?: PricingConfigScalarWhereInput[]
    NOT?: PricingConfigScalarWhereInput | PricingConfigScalarWhereInput[]
    id?: StringFilter<"PricingConfig"> | string
    clientId?: StringFilter<"PricingConfig"> | string
    paymentMethods?: StringFilter<"PricingConfig"> | string
    agentDescription?: StringFilter<"PricingConfig"> | string
    noPricingInfoText?: StringFilter<"PricingConfig"> | string
    createdAt?: DateTimeFilter<"PricingConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PricingConfig"> | Date | string
  }

  export type ServicesConfigUpsertWithWhereUniqueWithoutClientInput = {
    where: ServicesConfigWhereUniqueInput
    update: XOR<ServicesConfigUpdateWithoutClientInput, ServicesConfigUncheckedUpdateWithoutClientInput>
    create: XOR<ServicesConfigCreateWithoutClientInput, ServicesConfigUncheckedCreateWithoutClientInput>
  }

  export type ServicesConfigUpdateWithWhereUniqueWithoutClientInput = {
    where: ServicesConfigWhereUniqueInput
    data: XOR<ServicesConfigUpdateWithoutClientInput, ServicesConfigUncheckedUpdateWithoutClientInput>
  }

  export type ServicesConfigUpdateManyWithWhereWithoutClientInput = {
    where: ServicesConfigScalarWhereInput
    data: XOR<ServicesConfigUpdateManyMutationInput, ServicesConfigUncheckedUpdateManyWithoutClientInput>
  }

  export type ServicesConfigScalarWhereInput = {
    AND?: ServicesConfigScalarWhereInput | ServicesConfigScalarWhereInput[]
    OR?: ServicesConfigScalarWhereInput[]
    NOT?: ServicesConfigScalarWhereInput | ServicesConfigScalarWhereInput[]
    id?: StringFilter<"ServicesConfig"> | string
    clientId?: StringFilter<"ServicesConfig"> | string
    servicesOffered?: StringFilter<"ServicesConfig"> | string
    agentDescription?: StringFilter<"ServicesConfig"> | string
    conversationStyle?: StringNullableFilter<"ServicesConfig"> | string | null
    createdAt?: DateTimeFilter<"ServicesConfig"> | Date | string
    updatedAt?: DateTimeFilter<"ServicesConfig"> | Date | string
  }

  export type SmalltalkConfigUpsertWithWhereUniqueWithoutClientInput = {
    where: SmalltalkConfigWhereUniqueInput
    update: XOR<SmalltalkConfigUpdateWithoutClientInput, SmalltalkConfigUncheckedUpdateWithoutClientInput>
    create: XOR<SmalltalkConfigCreateWithoutClientInput, SmalltalkConfigUncheckedCreateWithoutClientInput>
  }

  export type SmalltalkConfigUpdateWithWhereUniqueWithoutClientInput = {
    where: SmalltalkConfigWhereUniqueInput
    data: XOR<SmalltalkConfigUpdateWithoutClientInput, SmalltalkConfigUncheckedUpdateWithoutClientInput>
  }

  export type SmalltalkConfigUpdateManyWithWhereWithoutClientInput = {
    where: SmalltalkConfigScalarWhereInput
    data: XOR<SmalltalkConfigUpdateManyMutationInput, SmalltalkConfigUncheckedUpdateManyWithoutClientInput>
  }

  export type SmalltalkConfigScalarWhereInput = {
    AND?: SmalltalkConfigScalarWhereInput | SmalltalkConfigScalarWhereInput[]
    OR?: SmalltalkConfigScalarWhereInput[]
    NOT?: SmalltalkConfigScalarWhereInput | SmalltalkConfigScalarWhereInput[]
    id?: StringFilter<"SmalltalkConfig"> | string
    clientId?: StringFilter<"SmalltalkConfig"> | string
    smalltalkGuidelines?: StringFilter<"SmalltalkConfig"> | string
    agentDescription?: StringFilter<"SmalltalkConfig"> | string
    createdAt?: DateTimeFilter<"SmalltalkConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SmalltalkConfig"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutClientInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClientInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
  }

  export type UserUpdateManyWithWhereWithoutClientInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClientInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    clientId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type WhatsappNumberUpsertWithWhereUniqueWithoutClientInput = {
    where: WhatsappNumberWhereUniqueInput
    update: XOR<WhatsappNumberUpdateWithoutClientInput, WhatsappNumberUncheckedUpdateWithoutClientInput>
    create: XOR<WhatsappNumberCreateWithoutClientInput, WhatsappNumberUncheckedCreateWithoutClientInput>
  }

  export type WhatsappNumberUpdateWithWhereUniqueWithoutClientInput = {
    where: WhatsappNumberWhereUniqueInput
    data: XOR<WhatsappNumberUpdateWithoutClientInput, WhatsappNumberUncheckedUpdateWithoutClientInput>
  }

  export type WhatsappNumberUpdateManyWithWhereWithoutClientInput = {
    where: WhatsappNumberScalarWhereInput
    data: XOR<WhatsappNumberUpdateManyMutationInput, WhatsappNumberUncheckedUpdateManyWithoutClientInput>
  }

  export type WhatsappNumberScalarWhereInput = {
    AND?: WhatsappNumberScalarWhereInput | WhatsappNumberScalarWhereInput[]
    OR?: WhatsappNumberScalarWhereInput[]
    NOT?: WhatsappNumberScalarWhereInput | WhatsappNumberScalarWhereInput[]
    id?: StringFilter<"WhatsappNumber"> | string
    phoneNumber?: StringFilter<"WhatsappNumber"> | string
    clientId?: StringFilter<"WhatsappNumber"> | string
    createdAt?: DateTimeFilter<"WhatsappNumber"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsappNumber"> | Date | string
  }

  export type ClientCreateWithoutWhatsappNumbersInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutWhatsappNumbersInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigUncheckedCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigUncheckedCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigUncheckedCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigUncheckedCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigUncheckedCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutWhatsappNumbersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutWhatsappNumbersInput, ClientUncheckedCreateWithoutWhatsappNumbersInput>
  }

  export type ClientUpsertWithoutWhatsappNumbersInput = {
    update: XOR<ClientUpdateWithoutWhatsappNumbersInput, ClientUncheckedUpdateWithoutWhatsappNumbersInput>
    create: XOR<ClientCreateWithoutWhatsappNumbersInput, ClientUncheckedCreateWithoutWhatsappNumbersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutWhatsappNumbersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutWhatsappNumbersInput, ClientUncheckedUpdateWithoutWhatsappNumbersInput>
  }

  export type ClientUpdateWithoutWhatsappNumbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutWhatsappNumbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUncheckedUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUncheckedUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUncheckedUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUncheckedUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUncheckedUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigUncheckedCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigUncheckedCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigUncheckedCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigUncheckedCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigUncheckedCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUsersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
  }

  export type ClientUpsertWithoutUsersInput = {
    update: XOR<ClientUpdateWithoutUsersInput, ClientUncheckedUpdateWithoutUsersInput>
    create: XOR<ClientCreateWithoutUsersInput, ClientUncheckedCreateWithoutUsersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutUsersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutUsersInput, ClientUncheckedUpdateWithoutUsersInput>
  }

  export type ClientUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUncheckedUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUncheckedUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUncheckedUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUncheckedUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUncheckedUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutContactConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    historyConfig?: HistoryConfigCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutContactConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    historyConfig?: HistoryConfigUncheckedCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigUncheckedCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigUncheckedCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigUncheckedCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutContactConfigInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutContactConfigInput, ClientUncheckedCreateWithoutContactConfigInput>
  }

  export type ClientUpsertWithoutContactConfigInput = {
    update: XOR<ClientUpdateWithoutContactConfigInput, ClientUncheckedUpdateWithoutContactConfigInput>
    create: XOR<ClientCreateWithoutContactConfigInput, ClientUncheckedCreateWithoutContactConfigInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutContactConfigInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutContactConfigInput, ClientUncheckedUpdateWithoutContactConfigInput>
  }

  export type ClientUpdateWithoutContactConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    historyConfig?: HistoryConfigUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutContactConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    historyConfig?: HistoryConfigUncheckedUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUncheckedUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUncheckedUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUncheckedUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutHistoryConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutHistoryConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigUncheckedCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigUncheckedCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigUncheckedCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigUncheckedCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutHistoryConfigInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutHistoryConfigInput, ClientUncheckedCreateWithoutHistoryConfigInput>
  }

  export type ClientUpsertWithoutHistoryConfigInput = {
    update: XOR<ClientUpdateWithoutHistoryConfigInput, ClientUncheckedUpdateWithoutHistoryConfigInput>
    create: XOR<ClientCreateWithoutHistoryConfigInput, ClientUncheckedCreateWithoutHistoryConfigInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutHistoryConfigInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutHistoryConfigInput, ClientUncheckedUpdateWithoutHistoryConfigInput>
  }

  export type ClientUpdateWithoutHistoryConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutHistoryConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUncheckedUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUncheckedUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUncheckedUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUncheckedUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutMemoryConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutMemoryConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigUncheckedCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigUncheckedCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigUncheckedCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigUncheckedCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutMemoryConfigInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutMemoryConfigInput, ClientUncheckedCreateWithoutMemoryConfigInput>
  }

  export type ClientUpsertWithoutMemoryConfigInput = {
    update: XOR<ClientUpdateWithoutMemoryConfigInput, ClientUncheckedUpdateWithoutMemoryConfigInput>
    create: XOR<ClientCreateWithoutMemoryConfigInput, ClientUncheckedCreateWithoutMemoryConfigInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutMemoryConfigInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutMemoryConfigInput, ClientUncheckedUpdateWithoutMemoryConfigInput>
  }

  export type ClientUpdateWithoutMemoryConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutMemoryConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUncheckedUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUncheckedUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUncheckedUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUncheckedUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutPricingConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPricingConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigUncheckedCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigUncheckedCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigUncheckedCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigUncheckedCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPricingConfigInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPricingConfigInput, ClientUncheckedCreateWithoutPricingConfigInput>
  }

  export type ClientUpsertWithoutPricingConfigInput = {
    update: XOR<ClientUpdateWithoutPricingConfigInput, ClientUncheckedUpdateWithoutPricingConfigInput>
    create: XOR<ClientCreateWithoutPricingConfigInput, ClientUncheckedCreateWithoutPricingConfigInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutPricingConfigInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutPricingConfigInput, ClientUncheckedUpdateWithoutPricingConfigInput>
  }

  export type ClientUpdateWithoutPricingConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPricingConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUncheckedUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUncheckedUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUncheckedUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUncheckedUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutServicesConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutServicesConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigUncheckedCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigUncheckedCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigUncheckedCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigUncheckedCreateNestedManyWithoutClientInput
    smalltalkConfig?: SmalltalkConfigUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutServicesConfigInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutServicesConfigInput, ClientUncheckedCreateWithoutServicesConfigInput>
  }

  export type ClientUpsertWithoutServicesConfigInput = {
    update: XOR<ClientUpdateWithoutServicesConfigInput, ClientUncheckedUpdateWithoutServicesConfigInput>
    create: XOR<ClientCreateWithoutServicesConfigInput, ClientUncheckedCreateWithoutServicesConfigInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutServicesConfigInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutServicesConfigInput, ClientUncheckedUpdateWithoutServicesConfigInput>
  }

  export type ClientUpdateWithoutServicesConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutServicesConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUncheckedUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUncheckedUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUncheckedUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUncheckedUpdateManyWithoutClientNestedInput
    smalltalkConfig?: SmalltalkConfigUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutSmalltalkConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigCreateNestedManyWithoutClientInput
    users?: UserCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSmalltalkConfigInput = {
    id?: string
    name: string
    email: string
    companyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    whatsappAccessToken?: string | null
    whatsappPhoneNumberId?: string | null
    whatsappBusinessId?: string | null
    onboardingCompleted?: boolean
    contactConfig?: ContactConfigUncheckedCreateNestedManyWithoutClientInput
    historyConfig?: HistoryConfigUncheckedCreateNestedManyWithoutClientInput
    memoryConfig?: MemoryConfigUncheckedCreateNestedManyWithoutClientInput
    pricingConfig?: PricingConfigUncheckedCreateNestedManyWithoutClientInput
    servicesConfig?: ServicesConfigUncheckedCreateNestedManyWithoutClientInput
    users?: UserUncheckedCreateNestedManyWithoutClientInput
    whatsappNumbers?: WhatsappNumberUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSmalltalkConfigInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSmalltalkConfigInput, ClientUncheckedCreateWithoutSmalltalkConfigInput>
  }

  export type ClientUpsertWithoutSmalltalkConfigInput = {
    update: XOR<ClientUpdateWithoutSmalltalkConfigInput, ClientUncheckedUpdateWithoutSmalltalkConfigInput>
    create: XOR<ClientCreateWithoutSmalltalkConfigInput, ClientUncheckedCreateWithoutSmalltalkConfigInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSmalltalkConfigInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSmalltalkConfigInput, ClientUncheckedUpdateWithoutSmalltalkConfigInput>
  }

  export type ClientUpdateWithoutSmalltalkConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUpdateManyWithoutClientNestedInput
    users?: UserUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSmalltalkConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whatsappAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappPhoneNumberId?: NullableStringFieldUpdateOperationsInput | string | null
    whatsappBusinessId?: NullableStringFieldUpdateOperationsInput | string | null
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    contactConfig?: ContactConfigUncheckedUpdateManyWithoutClientNestedInput
    historyConfig?: HistoryConfigUncheckedUpdateManyWithoutClientNestedInput
    memoryConfig?: MemoryConfigUncheckedUpdateManyWithoutClientNestedInput
    pricingConfig?: PricingConfigUncheckedUpdateManyWithoutClientNestedInput
    servicesConfig?: ServicesConfigUncheckedUpdateManyWithoutClientNestedInput
    users?: UserUncheckedUpdateManyWithoutClientNestedInput
    whatsappNumbers?: WhatsappNumberUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ContactConfigCreateManyClientInput = {
    id?: string
    contactSuggestion: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoryConfigCreateManyClientInput = {
    id?: string
    companyHistory: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemoryConfigCreateManyClientInput = {
    id?: string
    memoryGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingConfigCreateManyClientInput = {
    id?: string
    paymentMethods: string
    agentDescription: string
    noPricingInfoText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServicesConfigCreateManyClientInput = {
    id?: string
    servicesOffered: string
    agentDescription: string
    conversationStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmalltalkConfigCreateManyClientInput = {
    id?: string
    smalltalkGuidelines: string
    agentDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyClientInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsappNumberCreateManyClientInput = {
    id?: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactConfigUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactSuggestion?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactConfigUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactSuggestion?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactConfigUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactSuggestion?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryConfigUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyHistory?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryConfigUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyHistory?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryConfigUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyHistory?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryConfigUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryConfigUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryConfigUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingConfigUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethods?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    noPricingInfoText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingConfigUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethods?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    noPricingInfoText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingConfigUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethods?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    noPricingInfoText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesConfigUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicesOffered?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    conversationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesConfigUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicesOffered?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    conversationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicesConfigUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicesOffered?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    conversationStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmalltalkConfigUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    smalltalkGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmalltalkConfigUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    smalltalkGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmalltalkConfigUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    smalltalkGuidelines?: StringFieldUpdateOperationsInput | string
    agentDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappNumberUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappNumberUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsappNumberUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}