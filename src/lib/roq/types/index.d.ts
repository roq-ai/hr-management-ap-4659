/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model new_table
 *
 */
export type new_table = $Result.DefaultSelection<Prisma.$new_tablePayload>;
/**
 * Model schedule
 *
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>;
/**
 * Model teacheronteacheron_ki
 *
 */
export type teacheronteacheron_ki = $Result.DefaultSelection<Prisma.$teacheronteacheron_kiPayload>;
/**
 * Model team
 *
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.new_table`: Exposes CRUD operations for the **new_table** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more New_tables
   * const new_tables = await prisma.new_table.findMany()
   * ```
   */
  get new_table(): Prisma.new_tableDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schedules
   * const schedules = await prisma.schedule.findMany()
   * ```
   */
  get schedule(): Prisma.scheduleDelegate<ExtArgs>;

  /**
   * `prisma.teacheronteacheron_ki`: Exposes CRUD operations for the **teacheronteacheron_ki** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teacheronteacheron_kis
   * const teacheronteacheron_kis = await prisma.teacheronteacheron_ki.findMany()
   * ```
   */
  get teacheronteacheron_ki(): Prisma.teacheronteacheron_kiDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.teamDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    employee: 'employee';
    new_table: 'new_table';
    schedule: 'schedule';
    teacheronteacheron_ki: 'teacheronteacheron_ki';
    team: 'team';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'employee' | 'new_table' | 'schedule' | 'teacheronteacheron_ki' | 'team' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      new_table: {
        payload: Prisma.$new_tablePayload<ExtArgs>;
        fields: Prisma.new_tableFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.new_tableFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.new_tableFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload>;
          };
          findFirst: {
            args: Prisma.new_tableFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.new_tableFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload>;
          };
          findMany: {
            args: Prisma.new_tableFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload>[];
          };
          create: {
            args: Prisma.new_tableCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload>;
          };
          createMany: {
            args: Prisma.new_tableCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.new_tableDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload>;
          };
          update: {
            args: Prisma.new_tableUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload>;
          };
          deleteMany: {
            args: Prisma.new_tableDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.new_tableUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.new_tableUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$new_tablePayload>;
          };
          aggregate: {
            args: Prisma.New_tableAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNew_table>;
          };
          groupBy: {
            args: Prisma.new_tableGroupByArgs<ExtArgs>;
            result: $Utils.Optional<New_tableGroupByOutputType>[];
          };
          count: {
            args: Prisma.new_tableCountArgs<ExtArgs>;
            result: $Utils.Optional<New_tableCountAggregateOutputType> | number;
          };
        };
      };
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>;
        fields: Prisma.scheduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[];
          };
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchedule>;
          };
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleGroupByOutputType>[];
          };
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number;
          };
        };
      };
      teacheronteacheron_ki: {
        payload: Prisma.$teacheronteacheron_kiPayload<ExtArgs>;
        fields: Prisma.teacheronteacheron_kiFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teacheronteacheron_kiFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teacheronteacheron_kiFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload>;
          };
          findFirst: {
            args: Prisma.teacheronteacheron_kiFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teacheronteacheron_kiFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload>;
          };
          findMany: {
            args: Prisma.teacheronteacheron_kiFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload>[];
          };
          create: {
            args: Prisma.teacheronteacheron_kiCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload>;
          };
          createMany: {
            args: Prisma.teacheronteacheron_kiCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teacheronteacheron_kiDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload>;
          };
          update: {
            args: Prisma.teacheronteacheron_kiUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload>;
          };
          deleteMany: {
            args: Prisma.teacheronteacheron_kiDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teacheronteacheron_kiUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teacheronteacheron_kiUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacheronteacheron_kiPayload>;
          };
          aggregate: {
            args: Prisma.Teacheronteacheron_kiAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeacheronteacheron_ki>;
          };
          groupBy: {
            args: Prisma.teacheronteacheron_kiGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Teacheronteacheron_kiGroupByOutputType>[];
          };
          count: {
            args: Prisma.teacheronteacheron_kiCountArgs<ExtArgs>;
            result: $Utils.Optional<Teacheronteacheron_kiCountAggregateOutputType> | number;
          };
        };
      };
      team: {
        payload: Prisma.$teamPayload<ExtArgs>;
        fields: Prisma.teamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[];
          };
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.teamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    user: number;
  };

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TeamCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    employee_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    employee_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    employee_status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    employee_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    employee_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    employee_status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    employee_status: string | null;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        employee_status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    employee_status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        employee_status: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
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
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly employee_status: FieldRef<'employee', 'String'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data?: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
  };

  /**
   * Model new_table
   */

  export type AggregateNew_table = {
    _count: New_tableCountAggregateOutputType | null;
    _min: New_tableMinAggregateOutputType | null;
    _max: New_tableMaxAggregateOutputType | null;
  };

  export type New_tableMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type New_tableMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type New_tableCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type New_tableMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type New_tableMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type New_tableCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type New_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which new_table to aggregate.
     */
    where?: new_tableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of new_tables to fetch.
     */
    orderBy?: new_tableOrderByWithRelationInput | new_tableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: new_tableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` new_tables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` new_tables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned new_tables
     **/
    _count?: true | New_tableCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: New_tableMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: New_tableMaxAggregateInputType;
  };

  export type GetNew_tableAggregateType<T extends New_tableAggregateArgs> = {
    [P in keyof T & keyof AggregateNew_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNew_table[P]>
      : GetScalarType<T[P], AggregateNew_table[P]>;
  };

  export type new_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: new_tableWhereInput;
    orderBy?: new_tableOrderByWithAggregationInput | new_tableOrderByWithAggregationInput[];
    by: New_tableScalarFieldEnum[] | New_tableScalarFieldEnum;
    having?: new_tableScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: New_tableCountAggregateInputType | true;
    _min?: New_tableMinAggregateInputType;
    _max?: New_tableMaxAggregateInputType;
  };

  export type New_tableGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: New_tableCountAggregateOutputType | null;
    _min: New_tableMinAggregateOutputType | null;
    _max: New_tableMaxAggregateOutputType | null;
  };

  type GetNew_tableGroupByPayload<T extends new_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<New_tableGroupByOutputType, T['by']> & {
        [P in keyof T & keyof New_tableGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], New_tableGroupByOutputType[P]>
          : GetScalarType<T[P], New_tableGroupByOutputType[P]>;
      }
    >
  >;

  export type new_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['new_table']
    >;

  export type new_tableSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $new_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'new_table';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['new_table']
    >;
    composites: {};
  };

  type new_tableGetPayload<S extends boolean | null | undefined | new_tableDefaultArgs> = $Result.GetResult<
    Prisma.$new_tablePayload,
    S
  >;

  type new_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    new_tableFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: New_tableCountAggregateInputType | true;
  };

  export interface new_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['new_table']; meta: { name: 'new_table' } };
    /**
     * Find zero or one New_table that matches the filter.
     * @param {new_tableFindUniqueArgs} args - Arguments to find a New_table
     * @example
     * // Get one New_table
     * const new_table = await prisma.new_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends new_tableFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, new_tableFindUniqueArgs<ExtArgs>>,
    ): Prisma__new_tableClient<
      $Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one New_table that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {new_tableFindUniqueOrThrowArgs} args - Arguments to find a New_table
     * @example
     * // Get one New_table
     * const new_table = await prisma.new_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends new_tableFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, new_tableFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__new_tableClient<
      $Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first New_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {new_tableFindFirstArgs} args - Arguments to find a New_table
     * @example
     * // Get one New_table
     * const new_table = await prisma.new_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends new_tableFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, new_tableFindFirstArgs<ExtArgs>>,
    ): Prisma__new_tableClient<
      $Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first New_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {new_tableFindFirstOrThrowArgs} args - Arguments to find a New_table
     * @example
     * // Get one New_table
     * const new_table = await prisma.new_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends new_tableFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, new_tableFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__new_tableClient<
      $Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more New_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {new_tableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all New_tables
     * const new_tables = await prisma.new_table.findMany()
     *
     * // Get first 10 New_tables
     * const new_tables = await prisma.new_table.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const new_tableWithIdOnly = await prisma.new_table.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends new_tableFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, new_tableFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a New_table.
     * @param {new_tableCreateArgs} args - Arguments to create a New_table.
     * @example
     * // Create one New_table
     * const New_table = await prisma.new_table.create({
     *   data: {
     *     // ... data to create a New_table
     *   }
     * })
     *
     **/
    create<T extends new_tableCreateArgs<ExtArgs>>(
      args: SelectSubset<T, new_tableCreateArgs<ExtArgs>>,
    ): Prisma__new_tableClient<$Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many New_tables.
     *     @param {new_tableCreateManyArgs} args - Arguments to create many New_tables.
     *     @example
     *     // Create many New_tables
     *     const new_table = await prisma.new_table.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends new_tableCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, new_tableCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a New_table.
     * @param {new_tableDeleteArgs} args - Arguments to delete one New_table.
     * @example
     * // Delete one New_table
     * const New_table = await prisma.new_table.delete({
     *   where: {
     *     // ... filter to delete one New_table
     *   }
     * })
     *
     **/
    delete<T extends new_tableDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, new_tableDeleteArgs<ExtArgs>>,
    ): Prisma__new_tableClient<$Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one New_table.
     * @param {new_tableUpdateArgs} args - Arguments to update one New_table.
     * @example
     * // Update one New_table
     * const new_table = await prisma.new_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends new_tableUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, new_tableUpdateArgs<ExtArgs>>,
    ): Prisma__new_tableClient<$Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more New_tables.
     * @param {new_tableDeleteManyArgs} args - Arguments to filter New_tables to delete.
     * @example
     * // Delete a few New_tables
     * const { count } = await prisma.new_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends new_tableDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, new_tableDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more New_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {new_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many New_tables
     * const new_table = await prisma.new_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends new_tableUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, new_tableUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one New_table.
     * @param {new_tableUpsertArgs} args - Arguments to update or create a New_table.
     * @example
     * // Update or create a New_table
     * const new_table = await prisma.new_table.upsert({
     *   create: {
     *     // ... data to create a New_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the New_table we want to update
     *   }
     * })
     **/
    upsert<T extends new_tableUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, new_tableUpsertArgs<ExtArgs>>,
    ): Prisma__new_tableClient<$Result.GetResult<Prisma.$new_tablePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of New_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {new_tableCountArgs} args - Arguments to filter New_tables to count.
     * @example
     * // Count the number of New_tables
     * const count = await prisma.new_table.count({
     *   where: {
     *     // ... the filter for the New_tables we want to count
     *   }
     * })
     **/
    count<T extends new_tableCountArgs>(
      args?: Subset<T, new_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], New_tableCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a New_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {New_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends New_tableAggregateArgs>(
      args: Subset<T, New_tableAggregateArgs>,
    ): Prisma.PrismaPromise<GetNew_tableAggregateType<T>>;

    /**
     * Group by New_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {new_tableGroupByArgs} args - Group by arguments.
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
      T extends new_tableGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: new_tableGroupByArgs['orderBy'] }
        : { orderBy?: new_tableGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, new_tableGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetNew_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the new_table model
     */
    readonly fields: new_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for new_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__new_tableClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the new_table model
   */
  interface new_tableFieldRefs {
    readonly id: FieldRef<'new_table', 'String'>;
    readonly created_at: FieldRef<'new_table', 'DateTime'>;
    readonly updated_at: FieldRef<'new_table', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * new_table findUnique
   */
  export type new_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * Filter, which new_table to fetch.
     */
    where: new_tableWhereUniqueInput;
  };

  /**
   * new_table findUniqueOrThrow
   */
  export type new_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * Filter, which new_table to fetch.
     */
    where: new_tableWhereUniqueInput;
  };

  /**
   * new_table findFirst
   */
  export type new_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * Filter, which new_table to fetch.
     */
    where?: new_tableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of new_tables to fetch.
     */
    orderBy?: new_tableOrderByWithRelationInput | new_tableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for new_tables.
     */
    cursor?: new_tableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` new_tables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` new_tables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of new_tables.
     */
    distinct?: New_tableScalarFieldEnum | New_tableScalarFieldEnum[];
  };

  /**
   * new_table findFirstOrThrow
   */
  export type new_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * Filter, which new_table to fetch.
     */
    where?: new_tableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of new_tables to fetch.
     */
    orderBy?: new_tableOrderByWithRelationInput | new_tableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for new_tables.
     */
    cursor?: new_tableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` new_tables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` new_tables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of new_tables.
     */
    distinct?: New_tableScalarFieldEnum | New_tableScalarFieldEnum[];
  };

  /**
   * new_table findMany
   */
  export type new_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * Filter, which new_tables to fetch.
     */
    where?: new_tableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of new_tables to fetch.
     */
    orderBy?: new_tableOrderByWithRelationInput | new_tableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing new_tables.
     */
    cursor?: new_tableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` new_tables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` new_tables.
     */
    skip?: number;
    distinct?: New_tableScalarFieldEnum | New_tableScalarFieldEnum[];
  };

  /**
   * new_table create
   */
  export type new_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * The data needed to create a new_table.
     */
    data?: XOR<new_tableCreateInput, new_tableUncheckedCreateInput>;
  };

  /**
   * new_table createMany
   */
  export type new_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many new_tables.
     */
    data: new_tableCreateManyInput | new_tableCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * new_table update
   */
  export type new_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * The data needed to update a new_table.
     */
    data: XOR<new_tableUpdateInput, new_tableUncheckedUpdateInput>;
    /**
     * Choose, which new_table to update.
     */
    where: new_tableWhereUniqueInput;
  };

  /**
   * new_table updateMany
   */
  export type new_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update new_tables.
     */
    data: XOR<new_tableUpdateManyMutationInput, new_tableUncheckedUpdateManyInput>;
    /**
     * Filter which new_tables to update
     */
    where?: new_tableWhereInput;
  };

  /**
   * new_table upsert
   */
  export type new_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * The filter to search for the new_table to update in case it exists.
     */
    where: new_tableWhereUniqueInput;
    /**
     * In case the new_table found by the `where` argument doesn't exist, create a new new_table with this data.
     */
    create: XOR<new_tableCreateInput, new_tableUncheckedCreateInput>;
    /**
     * In case the new_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<new_tableUpdateInput, new_tableUncheckedUpdateInput>;
  };

  /**
   * new_table delete
   */
  export type new_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
    /**
     * Filter which new_table to delete.
     */
    where: new_tableWhereUniqueInput;
  };

  /**
   * new_table deleteMany
   */
  export type new_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which new_tables to delete
     */
    where?: new_tableWhereInput;
  };

  /**
   * new_table without action
   */
  export type new_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the new_table
     */
    select?: new_tableSelect<ExtArgs> | null;
  };

  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  export type ScheduleMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ScheduleMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schedules
     **/
    _count?: true | ScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ScheduleMaxAggregateInputType;
  };

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>;
  };

  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput;
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[];
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum;
    having?: scheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
  };

  export type ScheduleGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ScheduleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
          : GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
      }
    >
  >;

  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['schedule']
    >;

  export type scheduleSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'schedule';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['schedule']
    >;
    composites: {};
  };

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<
    Prisma.$schedulePayload,
    S
  >;

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    scheduleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ScheduleCountAggregateInputType | true;
  };

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule']; meta: { name: 'schedule' } };
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends scheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Schedule that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends scheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     *
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends scheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     *
     **/
    create<T extends scheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schedules.
     *     @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends scheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     *
     **/
    delete<T extends scheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends scheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends scheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends scheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     **/
    upsert<T extends scheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
     **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(
      args: Subset<T, ScheduleAggregateArgs>,
    ): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
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
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the schedule model
     */
    readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the schedule model
   */
  interface scheduleFieldRefs {
    readonly id: FieldRef<'schedule', 'String'>;
    readonly created_at: FieldRef<'schedule', 'DateTime'>;
    readonly updated_at: FieldRef<'schedule', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The data needed to create a schedule.
     */
    data?: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
  };

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>;
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput;
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
  };

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
  };

  /**
   * Model teacheronteacheron_ki
   */

  export type AggregateTeacheronteacheron_ki = {
    _count: Teacheronteacheron_kiCountAggregateOutputType | null;
    _min: Teacheronteacheron_kiMinAggregateOutputType | null;
    _max: Teacheronteacheron_kiMaxAggregateOutputType | null;
  };

  export type Teacheronteacheron_kiMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Teacheronteacheron_kiMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Teacheronteacheron_kiCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Teacheronteacheron_kiMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Teacheronteacheron_kiMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Teacheronteacheron_kiCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Teacheronteacheron_kiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacheronteacheron_ki to aggregate.
     */
    where?: teacheronteacheron_kiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teacheronteacheron_kis to fetch.
     */
    orderBy?: teacheronteacheron_kiOrderByWithRelationInput | teacheronteacheron_kiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teacheronteacheron_kiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teacheronteacheron_kis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teacheronteacheron_kis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teacheronteacheron_kis
     **/
    _count?: true | Teacheronteacheron_kiCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Teacheronteacheron_kiMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Teacheronteacheron_kiMaxAggregateInputType;
  };

  export type GetTeacheronteacheron_kiAggregateType<T extends Teacheronteacheron_kiAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacheronteacheron_ki]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacheronteacheron_ki[P]>
      : GetScalarType<T[P], AggregateTeacheronteacheron_ki[P]>;
  };

  export type teacheronteacheron_kiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacheronteacheron_kiWhereInput;
    orderBy?: teacheronteacheron_kiOrderByWithAggregationInput | teacheronteacheron_kiOrderByWithAggregationInput[];
    by: Teacheronteacheron_kiScalarFieldEnum[] | Teacheronteacheron_kiScalarFieldEnum;
    having?: teacheronteacheron_kiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Teacheronteacheron_kiCountAggregateInputType | true;
    _min?: Teacheronteacheron_kiMinAggregateInputType;
    _max?: Teacheronteacheron_kiMaxAggregateInputType;
  };

  export type Teacheronteacheron_kiGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Teacheronteacheron_kiCountAggregateOutputType | null;
    _min: Teacheronteacheron_kiMinAggregateOutputType | null;
    _max: Teacheronteacheron_kiMaxAggregateOutputType | null;
  };

  type GetTeacheronteacheron_kiGroupByPayload<T extends teacheronteacheron_kiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Teacheronteacheron_kiGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Teacheronteacheron_kiGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Teacheronteacheron_kiGroupByOutputType[P]>
          : GetScalarType<T[P], Teacheronteacheron_kiGroupByOutputType[P]>;
      }
    >
  >;

  export type teacheronteacheron_kiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['teacheronteacheron_ki']
    >;

  export type teacheronteacheron_kiSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $teacheronteacheron_kiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'teacheronteacheron_ki';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['teacheronteacheron_ki']
    >;
    composites: {};
  };

  type teacheronteacheron_kiGetPayload<S extends boolean | null | undefined | teacheronteacheron_kiDefaultArgs> =
    $Result.GetResult<Prisma.$teacheronteacheron_kiPayload, S>;

  type teacheronteacheron_kiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teacheronteacheron_kiFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Teacheronteacheron_kiCountAggregateInputType | true;
  };

  export interface teacheronteacheron_kiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['teacheronteacheron_ki'];
      meta: { name: 'teacheronteacheron_ki' };
    };
    /**
     * Find zero or one Teacheronteacheron_ki that matches the filter.
     * @param {teacheronteacheron_kiFindUniqueArgs} args - Arguments to find a Teacheronteacheron_ki
     * @example
     * // Get one Teacheronteacheron_ki
     * const teacheronteacheron_ki = await prisma.teacheronteacheron_ki.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teacheronteacheron_kiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teacheronteacheron_kiFindUniqueArgs<ExtArgs>>,
    ): Prisma__teacheronteacheron_kiClient<
      $Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Teacheronteacheron_ki that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teacheronteacheron_kiFindUniqueOrThrowArgs} args - Arguments to find a Teacheronteacheron_ki
     * @example
     * // Get one Teacheronteacheron_ki
     * const teacheronteacheron_ki = await prisma.teacheronteacheron_ki.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teacheronteacheron_kiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacheronteacheron_kiFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teacheronteacheron_kiClient<
      $Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Teacheronteacheron_ki that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacheronteacheron_kiFindFirstArgs} args - Arguments to find a Teacheronteacheron_ki
     * @example
     * // Get one Teacheronteacheron_ki
     * const teacheronteacheron_ki = await prisma.teacheronteacheron_ki.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teacheronteacheron_kiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teacheronteacheron_kiFindFirstArgs<ExtArgs>>,
    ): Prisma__teacheronteacheron_kiClient<
      $Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Teacheronteacheron_ki that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacheronteacheron_kiFindFirstOrThrowArgs} args - Arguments to find a Teacheronteacheron_ki
     * @example
     * // Get one Teacheronteacheron_ki
     * const teacheronteacheron_ki = await prisma.teacheronteacheron_ki.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teacheronteacheron_kiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacheronteacheron_kiFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teacheronteacheron_kiClient<
      $Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Teacheronteacheron_kis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacheronteacheron_kiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teacheronteacheron_kis
     * const teacheronteacheron_kis = await prisma.teacheronteacheron_ki.findMany()
     *
     * // Get first 10 Teacheronteacheron_kis
     * const teacheronteacheron_kis = await prisma.teacheronteacheron_ki.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacheronteacheron_kiWithIdOnly = await prisma.teacheronteacheron_ki.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teacheronteacheron_kiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacheronteacheron_kiFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Teacheronteacheron_ki.
     * @param {teacheronteacheron_kiCreateArgs} args - Arguments to create a Teacheronteacheron_ki.
     * @example
     * // Create one Teacheronteacheron_ki
     * const Teacheronteacheron_ki = await prisma.teacheronteacheron_ki.create({
     *   data: {
     *     // ... data to create a Teacheronteacheron_ki
     *   }
     * })
     *
     **/
    create<T extends teacheronteacheron_kiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teacheronteacheron_kiCreateArgs<ExtArgs>>,
    ): Prisma__teacheronteacheron_kiClient<
      $Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Teacheronteacheron_kis.
     *     @param {teacheronteacheron_kiCreateManyArgs} args - Arguments to create many Teacheronteacheron_kis.
     *     @example
     *     // Create many Teacheronteacheron_kis
     *     const teacheronteacheron_ki = await prisma.teacheronteacheron_ki.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teacheronteacheron_kiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacheronteacheron_kiCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Teacheronteacheron_ki.
     * @param {teacheronteacheron_kiDeleteArgs} args - Arguments to delete one Teacheronteacheron_ki.
     * @example
     * // Delete one Teacheronteacheron_ki
     * const Teacheronteacheron_ki = await prisma.teacheronteacheron_ki.delete({
     *   where: {
     *     // ... filter to delete one Teacheronteacheron_ki
     *   }
     * })
     *
     **/
    delete<T extends teacheronteacheron_kiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teacheronteacheron_kiDeleteArgs<ExtArgs>>,
    ): Prisma__teacheronteacheron_kiClient<
      $Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Teacheronteacheron_ki.
     * @param {teacheronteacheron_kiUpdateArgs} args - Arguments to update one Teacheronteacheron_ki.
     * @example
     * // Update one Teacheronteacheron_ki
     * const teacheronteacheron_ki = await prisma.teacheronteacheron_ki.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teacheronteacheron_kiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teacheronteacheron_kiUpdateArgs<ExtArgs>>,
    ): Prisma__teacheronteacheron_kiClient<
      $Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Teacheronteacheron_kis.
     * @param {teacheronteacheron_kiDeleteManyArgs} args - Arguments to filter Teacheronteacheron_kis to delete.
     * @example
     * // Delete a few Teacheronteacheron_kis
     * const { count } = await prisma.teacheronteacheron_ki.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teacheronteacheron_kiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacheronteacheron_kiDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teacheronteacheron_kis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacheronteacheron_kiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teacheronteacheron_kis
     * const teacheronteacheron_ki = await prisma.teacheronteacheron_ki.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teacheronteacheron_kiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teacheronteacheron_kiUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Teacheronteacheron_ki.
     * @param {teacheronteacheron_kiUpsertArgs} args - Arguments to update or create a Teacheronteacheron_ki.
     * @example
     * // Update or create a Teacheronteacheron_ki
     * const teacheronteacheron_ki = await prisma.teacheronteacheron_ki.upsert({
     *   create: {
     *     // ... data to create a Teacheronteacheron_ki
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacheronteacheron_ki we want to update
     *   }
     * })
     **/
    upsert<T extends teacheronteacheron_kiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teacheronteacheron_kiUpsertArgs<ExtArgs>>,
    ): Prisma__teacheronteacheron_kiClient<
      $Result.GetResult<Prisma.$teacheronteacheron_kiPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Teacheronteacheron_kis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacheronteacheron_kiCountArgs} args - Arguments to filter Teacheronteacheron_kis to count.
     * @example
     * // Count the number of Teacheronteacheron_kis
     * const count = await prisma.teacheronteacheron_ki.count({
     *   where: {
     *     // ... the filter for the Teacheronteacheron_kis we want to count
     *   }
     * })
     **/
    count<T extends teacheronteacheron_kiCountArgs>(
      args?: Subset<T, teacheronteacheron_kiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Teacheronteacheron_kiCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Teacheronteacheron_ki.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacheronteacheron_kiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Teacheronteacheron_kiAggregateArgs>(
      args: Subset<T, Teacheronteacheron_kiAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeacheronteacheron_kiAggregateType<T>>;

    /**
     * Group by Teacheronteacheron_ki.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacheronteacheron_kiGroupByArgs} args - Group by arguments.
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
      T extends teacheronteacheron_kiGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacheronteacheron_kiGroupByArgs['orderBy'] }
        : { orderBy?: teacheronteacheron_kiGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teacheronteacheron_kiGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeacheronteacheron_kiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the teacheronteacheron_ki model
     */
    readonly fields: teacheronteacheron_kiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacheronteacheron_ki.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacheronteacheron_kiClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the teacheronteacheron_ki model
   */
  interface teacheronteacheron_kiFieldRefs {
    readonly id: FieldRef<'teacheronteacheron_ki', 'String'>;
    readonly created_at: FieldRef<'teacheronteacheron_ki', 'DateTime'>;
    readonly updated_at: FieldRef<'teacheronteacheron_ki', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * teacheronteacheron_ki findUnique
   */
  export type teacheronteacheron_kiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the teacheronteacheron_ki
       */
      select?: teacheronteacheron_kiSelect<ExtArgs> | null;
      /**
       * Filter, which teacheronteacheron_ki to fetch.
       */
      where: teacheronteacheron_kiWhereUniqueInput;
    };

  /**
   * teacheronteacheron_ki findUniqueOrThrow
   */
  export type teacheronteacheron_kiFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
    /**
     * Filter, which teacheronteacheron_ki to fetch.
     */
    where: teacheronteacheron_kiWhereUniqueInput;
  };

  /**
   * teacheronteacheron_ki findFirst
   */
  export type teacheronteacheron_kiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
    /**
     * Filter, which teacheronteacheron_ki to fetch.
     */
    where?: teacheronteacheron_kiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teacheronteacheron_kis to fetch.
     */
    orderBy?: teacheronteacheron_kiOrderByWithRelationInput | teacheronteacheron_kiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teacheronteacheron_kis.
     */
    cursor?: teacheronteacheron_kiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teacheronteacheron_kis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teacheronteacheron_kis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teacheronteacheron_kis.
     */
    distinct?: Teacheronteacheron_kiScalarFieldEnum | Teacheronteacheron_kiScalarFieldEnum[];
  };

  /**
   * teacheronteacheron_ki findFirstOrThrow
   */
  export type teacheronteacheron_kiFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
    /**
     * Filter, which teacheronteacheron_ki to fetch.
     */
    where?: teacheronteacheron_kiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teacheronteacheron_kis to fetch.
     */
    orderBy?: teacheronteacheron_kiOrderByWithRelationInput | teacheronteacheron_kiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teacheronteacheron_kis.
     */
    cursor?: teacheronteacheron_kiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teacheronteacheron_kis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teacheronteacheron_kis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teacheronteacheron_kis.
     */
    distinct?: Teacheronteacheron_kiScalarFieldEnum | Teacheronteacheron_kiScalarFieldEnum[];
  };

  /**
   * teacheronteacheron_ki findMany
   */
  export type teacheronteacheron_kiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
    /**
     * Filter, which teacheronteacheron_kis to fetch.
     */
    where?: teacheronteacheron_kiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teacheronteacheron_kis to fetch.
     */
    orderBy?: teacheronteacheron_kiOrderByWithRelationInput | teacheronteacheron_kiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teacheronteacheron_kis.
     */
    cursor?: teacheronteacheron_kiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teacheronteacheron_kis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teacheronteacheron_kis.
     */
    skip?: number;
    distinct?: Teacheronteacheron_kiScalarFieldEnum | Teacheronteacheron_kiScalarFieldEnum[];
  };

  /**
   * teacheronteacheron_ki create
   */
  export type teacheronteacheron_kiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
    /**
     * The data needed to create a teacheronteacheron_ki.
     */
    data?: XOR<teacheronteacheron_kiCreateInput, teacheronteacheron_kiUncheckedCreateInput>;
  };

  /**
   * teacheronteacheron_ki createMany
   */
  export type teacheronteacheron_kiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * The data used to create many teacheronteacheron_kis.
       */
      data: teacheronteacheron_kiCreateManyInput | teacheronteacheron_kiCreateManyInput[];
      skipDuplicates?: boolean;
    };

  /**
   * teacheronteacheron_ki update
   */
  export type teacheronteacheron_kiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
    /**
     * The data needed to update a teacheronteacheron_ki.
     */
    data: XOR<teacheronteacheron_kiUpdateInput, teacheronteacheron_kiUncheckedUpdateInput>;
    /**
     * Choose, which teacheronteacheron_ki to update.
     */
    where: teacheronteacheron_kiWhereUniqueInput;
  };

  /**
   * teacheronteacheron_ki updateMany
   */
  export type teacheronteacheron_kiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * The data used to update teacheronteacheron_kis.
       */
      data: XOR<teacheronteacheron_kiUpdateManyMutationInput, teacheronteacheron_kiUncheckedUpdateManyInput>;
      /**
       * Filter which teacheronteacheron_kis to update
       */
      where?: teacheronteacheron_kiWhereInput;
    };

  /**
   * teacheronteacheron_ki upsert
   */
  export type teacheronteacheron_kiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
    /**
     * The filter to search for the teacheronteacheron_ki to update in case it exists.
     */
    where: teacheronteacheron_kiWhereUniqueInput;
    /**
     * In case the teacheronteacheron_ki found by the `where` argument doesn't exist, create a new teacheronteacheron_ki with this data.
     */
    create: XOR<teacheronteacheron_kiCreateInput, teacheronteacheron_kiUncheckedCreateInput>;
    /**
     * In case the teacheronteacheron_ki was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacheronteacheron_kiUpdateInput, teacheronteacheron_kiUncheckedUpdateInput>;
  };

  /**
   * teacheronteacheron_ki delete
   */
  export type teacheronteacheron_kiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
    /**
     * Filter which teacheronteacheron_ki to delete.
     */
    where: teacheronteacheron_kiWhereUniqueInput;
  };

  /**
   * teacheronteacheron_ki deleteMany
   */
  export type teacheronteacheron_kiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Filter which teacheronteacheron_kis to delete
       */
      where?: teacheronteacheron_kiWhereInput;
    };

  /**
   * teacheronteacheron_ki without action
   */
  export type teacheronteacheron_kiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacheronteacheron_ki
     */
    select?: teacheronteacheron_kiSelect<ExtArgs> | null;
  };

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    description: number;
    image: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: teamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    description: string | null;
    image: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      image?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | team$userArgs<ExtArgs>;
      _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type teamSelectScalar = {
    id?: boolean;
    description?: boolean;
    image?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | team$userArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        image: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<
    Prisma.$teamPayload,
    S
  >;

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teamFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team']; meta: { name: 'team' } };
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     **/
    create<T extends teamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamCreateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teams.
     *     @param {teamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     **/
    delete<T extends teamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamDeleteArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     **/
    upsert<T extends teamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpsertArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
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
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team model
     */
    readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends team$userArgs<ExtArgs> = {}>(
      args?: Subset<T, team$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<'team', 'String'>;
    readonly description: FieldRef<'team', 'String'>;
    readonly image: FieldRef<'team', 'String'>;
    readonly name: FieldRef<'team', 'String'>;
    readonly created_at: FieldRef<'team', 'DateTime'>;
    readonly updated_at: FieldRef<'team', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>;
  };

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>;
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput;
  };

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput;
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>;
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
  };

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput;
  };

  /**
   * team.user
   */
  export type team$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    team_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      team_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      team?: boolean | user$teamArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    team_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | user$teamArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      team: Prisma.$teamPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        team_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends user$teamArgs<ExtArgs> = {}>(
      args?: Subset<T, user$teamArgs<ExtArgs>>,
    ): Prisma__teamClient<
      $Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly team_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.team
   */
  export type user$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    where?: teamWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    employee_status: 'employee_status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const New_tableScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type New_tableScalarFieldEnum = (typeof New_tableScalarFieldEnum)[keyof typeof New_tableScalarFieldEnum];

  export const ScheduleScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];

  export const Teacheronteacheron_kiScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Teacheronteacheron_kiScalarFieldEnum =
    (typeof Teacheronteacheron_kiScalarFieldEnum)[keyof typeof Teacheronteacheron_kiScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    description: 'description';
    image: 'image';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    team_id: 'team_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    employee_status?: StringNullableFilter<'employee'> | string | null;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    employee_status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      employee_status?: StringNullableFilter<'employee'> | string | null;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    employee_status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    employee_status?: StringNullableWithAggregatesFilter<'employee'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type new_tableWhereInput = {
    AND?: new_tableWhereInput | new_tableWhereInput[];
    OR?: new_tableWhereInput[];
    NOT?: new_tableWhereInput | new_tableWhereInput[];
    id?: UuidFilter<'new_table'> | string;
    created_at?: DateTimeFilter<'new_table'> | Date | string;
    updated_at?: DateTimeFilter<'new_table'> | Date | string;
  };

  export type new_tableOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type new_tableWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: new_tableWhereInput | new_tableWhereInput[];
      OR?: new_tableWhereInput[];
      NOT?: new_tableWhereInput | new_tableWhereInput[];
      created_at?: DateTimeFilter<'new_table'> | Date | string;
      updated_at?: DateTimeFilter<'new_table'> | Date | string;
    },
    'id'
  >;

  export type new_tableOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: new_tableCountOrderByAggregateInput;
    _max?: new_tableMaxOrderByAggregateInput;
    _min?: new_tableMinOrderByAggregateInput;
  };

  export type new_tableScalarWhereWithAggregatesInput = {
    AND?: new_tableScalarWhereWithAggregatesInput | new_tableScalarWhereWithAggregatesInput[];
    OR?: new_tableScalarWhereWithAggregatesInput[];
    NOT?: new_tableScalarWhereWithAggregatesInput | new_tableScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'new_table'> | string;
    created_at?: DateTimeWithAggregatesFilter<'new_table'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'new_table'> | Date | string;
  };

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[];
    OR?: scheduleWhereInput[];
    NOT?: scheduleWhereInput | scheduleWhereInput[];
    id?: UuidFilter<'schedule'> | string;
    created_at?: DateTimeFilter<'schedule'> | Date | string;
    updated_at?: DateTimeFilter<'schedule'> | Date | string;
  };

  export type scheduleOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: scheduleWhereInput | scheduleWhereInput[];
      OR?: scheduleWhereInput[];
      NOT?: scheduleWhereInput | scheduleWhereInput[];
      created_at?: DateTimeFilter<'schedule'> | Date | string;
      updated_at?: DateTimeFilter<'schedule'> | Date | string;
    },
    'id'
  >;

  export type scheduleOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: scheduleCountOrderByAggregateInput;
    _max?: scheduleMaxOrderByAggregateInput;
    _min?: scheduleMinOrderByAggregateInput;
  };

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    OR?: scheduleScalarWhereWithAggregatesInput[];
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'schedule'> | string;
    created_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
  };

  export type teacheronteacheron_kiWhereInput = {
    AND?: teacheronteacheron_kiWhereInput | teacheronteacheron_kiWhereInput[];
    OR?: teacheronteacheron_kiWhereInput[];
    NOT?: teacheronteacheron_kiWhereInput | teacheronteacheron_kiWhereInput[];
    id?: UuidFilter<'teacheronteacheron_ki'> | string;
    created_at?: DateTimeFilter<'teacheronteacheron_ki'> | Date | string;
    updated_at?: DateTimeFilter<'teacheronteacheron_ki'> | Date | string;
  };

  export type teacheronteacheron_kiOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacheronteacheron_kiWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teacheronteacheron_kiWhereInput | teacheronteacheron_kiWhereInput[];
      OR?: teacheronteacheron_kiWhereInput[];
      NOT?: teacheronteacheron_kiWhereInput | teacheronteacheron_kiWhereInput[];
      created_at?: DateTimeFilter<'teacheronteacheron_ki'> | Date | string;
      updated_at?: DateTimeFilter<'teacheronteacheron_ki'> | Date | string;
    },
    'id'
  >;

  export type teacheronteacheron_kiOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teacheronteacheron_kiCountOrderByAggregateInput;
    _max?: teacheronteacheron_kiMaxOrderByAggregateInput;
    _min?: teacheronteacheron_kiMinOrderByAggregateInput;
  };

  export type teacheronteacheron_kiScalarWhereWithAggregatesInput = {
    AND?: teacheronteacheron_kiScalarWhereWithAggregatesInput | teacheronteacheron_kiScalarWhereWithAggregatesInput[];
    OR?: teacheronteacheron_kiScalarWhereWithAggregatesInput[];
    NOT?: teacheronteacheron_kiScalarWhereWithAggregatesInput | teacheronteacheron_kiScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'teacheronteacheron_ki'> | string;
    created_at?: DateTimeWithAggregatesFilter<'teacheronteacheron_ki'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'teacheronteacheron_ki'> | Date | string;
  };

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[];
    OR?: teamWhereInput[];
    NOT?: teamWhereInput | teamWhereInput[];
    id?: UuidFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    image?: StringNullableFilter<'team'> | string | null;
    name?: StringFilter<'team'> | string;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type teamOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type teamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teamWhereInput | teamWhereInput[];
      OR?: teamWhereInput[];
      NOT?: teamWhereInput | teamWhereInput[];
      description?: StringNullableFilter<'team'> | string | null;
      image?: StringNullableFilter<'team'> | string | null;
      name?: StringFilter<'team'> | string;
      created_at?: DateTimeFilter<'team'> | Date | string;
      updated_at?: DateTimeFilter<'team'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teamCountOrderByAggregateInput;
    _max?: teamMaxOrderByAggregateInput;
    _min?: teamMinOrderByAggregateInput;
  };

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    OR?: teamScalarWhereWithAggregatesInput[];
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team'> | string;
    description?: StringNullableWithAggregatesFilter<'team'> | string | null;
    image?: StringNullableWithAggregatesFilter<'team'> | string | null;
    name?: StringWithAggregatesFilter<'team'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    team_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    team?: XOR<TeamNullableRelationFilter, teamWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    team?: teamOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      team_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      team?: XOR<TeamNullableRelationFilter, teamWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    team_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type employeeCreateInput = {
    id?: string;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyInput = {
    id?: string;
    employee_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employee_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type new_tableCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type new_tableUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type new_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type new_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type new_tableCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type new_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type new_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacheronteacheron_kiCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacheronteacheron_kiUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacheronteacheron_kiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacheronteacheron_kiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacheronteacheron_kiCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacheronteacheron_kiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacheronteacheron_kiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutTeamInput;
  };

  export type teamUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type teamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type teamCreateManyInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team?: teamCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    employee_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    employee_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    employee_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type new_tableCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type new_tableMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type new_tableMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacheronteacheron_kiCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacheronteacheron_kiMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacheronteacheron_kiMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type TeamNullableRelationFilter = {
    is?: teamWhereInput | null;
    isNot?: teamWhereInput | null;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    upsert?: userUpsertWithWhereUniqueWithoutTeamInput | userUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutTeamInput | userUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: userUpdateManyWithWhereWithoutTeamInput | userUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    upsert?: userUpsertWithWhereUniqueWithoutTeamInput | userUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutTeamInput | userUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: userUpdateManyWithWhereWithoutTeamInput | userUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type teamCreateNestedOneWithoutUserInput = {
    create?: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    connectOrCreate?: teamCreateOrConnectWithoutUserInput;
    connect?: teamWhereUniqueInput;
  };

  export type teamUpdateOneWithoutUserNestedInput = {
    create?: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    connectOrCreate?: teamCreateOrConnectWithoutUserInput;
    upsert?: teamUpsertWithoutUserInput;
    disconnect?: teamWhereInput | boolean;
    delete?: teamWhereInput | boolean;
    connect?: teamWhereUniqueInput;
    update?: XOR<
      XOR<teamUpdateToOneWithWhereWithoutUserInput, teamUpdateWithoutUserInput>,
      teamUncheckedUpdateWithoutUserInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutTeamInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
  };

  export type userCreateManyTeamInputEnvelope = {
    data: userCreateManyTeamInput | userCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutTeamInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
  };

  export type userUpdateWithWhereUniqueWithoutTeamInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
  };

  export type userUpdateManyWithWhereWithoutTeamInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutTeamInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    team_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type teamCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamCreateOrConnectWithoutUserInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
  };

  export type teamUpsertWithoutUserInput = {
    update: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    where?: teamWhereInput;
  };

  export type teamUpdateToOneWithWhereWithoutUserInput = {
    where?: teamWhereInput;
    data: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
  };

  export type teamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use TeamCountOutputTypeDefaultArgs instead
   */
  export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TeamCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use new_tableDefaultArgs instead
   */
  export type new_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    new_tableDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use scheduleDefaultArgs instead
   */
  export type scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    scheduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teacheronteacheron_kiDefaultArgs instead
   */
  export type teacheronteacheron_kiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    teacheronteacheron_kiDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teamDefaultArgs instead
   */
  export type teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
