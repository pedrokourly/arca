
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model DocumentoUsuario
 * 
 */
export type DocumentoUsuario = $Result.DefaultSelection<Prisma.$DocumentoUsuarioPayload>
/**
 * Model RelatorioAlta
 * 
 */
export type RelatorioAlta = $Result.DefaultSelection<Prisma.$RelatorioAltaPayload>
/**
 * Model LogAuditoria
 * 
 */
export type LogAuditoria = $Result.DefaultSelection<Prisma.$LogAuditoriaPayload>
/**
 * Model Atendimento
 * 
 */
export type Atendimento = $Result.DefaultSelection<Prisma.$AtendimentoPayload>
/**
 * Model ListaEspera
 * 
 */
export type ListaEspera = $Result.DefaultSelection<Prisma.$ListaEsperaPayload>
/**
 * Model Genero
 * 
 */
export type Genero = $Result.DefaultSelection<Prisma.$GeneroPayload>
/**
 * Model CorPele
 * 
 */
export type CorPele = $Result.DefaultSelection<Prisma.$CorPelePayload>
/**
 * Model Escolaridade
 * 
 */
export type Escolaridade = $Result.DefaultSelection<Prisma.$EscolaridadePayload>
/**
 * Model StatusAtendimento
 * 
 */
export type StatusAtendimento = $Result.DefaultSelection<Prisma.$StatusAtendimentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusRelatorioEnum: {
  PENDENTE: 'PENDENTE',
  EMITIDO: 'EMITIDO',
  CANCELADO: 'CANCELADO'
};

export type StatusRelatorioEnum = (typeof StatusRelatorioEnum)[keyof typeof StatusRelatorioEnum]


export const TipoAcaoEnum: {
  CREATION: 'CREATION',
  VIEW: 'VIEW',
  UPDATE: 'UPDATE',
  DELETION: 'DELETION'
};

export type TipoAcaoEnum = (typeof TipoAcaoEnum)[keyof typeof TipoAcaoEnum]

}

export type StatusRelatorioEnum = $Enums.StatusRelatorioEnum

export const StatusRelatorioEnum: typeof $Enums.StatusRelatorioEnum

export type TipoAcaoEnum = $Enums.TipoAcaoEnum

export const TipoAcaoEnum: typeof $Enums.TipoAcaoEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentoUsuario`: Exposes CRUD operations for the **DocumentoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentoUsuarios
    * const documentoUsuarios = await prisma.documentoUsuario.findMany()
    * ```
    */
  get documentoUsuario(): Prisma.DocumentoUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relatorioAlta`: Exposes CRUD operations for the **RelatorioAlta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelatorioAltas
    * const relatorioAltas = await prisma.relatorioAlta.findMany()
    * ```
    */
  get relatorioAlta(): Prisma.RelatorioAltaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logAuditoria`: Exposes CRUD operations for the **LogAuditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAuditorias
    * const logAuditorias = await prisma.logAuditoria.findMany()
    * ```
    */
  get logAuditoria(): Prisma.LogAuditoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atendimento`: Exposes CRUD operations for the **Atendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atendimentos
    * const atendimentos = await prisma.atendimento.findMany()
    * ```
    */
  get atendimento(): Prisma.AtendimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaEspera`: Exposes CRUD operations for the **ListaEspera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaEsperas
    * const listaEsperas = await prisma.listaEspera.findMany()
    * ```
    */
  get listaEspera(): Prisma.ListaEsperaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **Genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.GeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.corPele`: Exposes CRUD operations for the **CorPele** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CorPeles
    * const corPeles = await prisma.corPele.findMany()
    * ```
    */
  get corPele(): Prisma.CorPeleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escolaridade`: Exposes CRUD operations for the **Escolaridade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Escolaridades
    * const escolaridades = await prisma.escolaridade.findMany()
    * ```
    */
  get escolaridade(): Prisma.EscolaridadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusAtendimento`: Exposes CRUD operations for the **StatusAtendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusAtendimentos
    * const statusAtendimentos = await prisma.statusAtendimento.findMany()
    * ```
    */
  get statusAtendimento(): Prisma.StatusAtendimentoDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Usuario: 'Usuario',
    Role: 'Role',
    Paciente: 'Paciente',
    DocumentoUsuario: 'DocumentoUsuario',
    RelatorioAlta: 'RelatorioAlta',
    LogAuditoria: 'LogAuditoria',
    Atendimento: 'Atendimento',
    ListaEspera: 'ListaEspera',
    Genero: 'Genero',
    CorPele: 'CorPele',
    Escolaridade: 'Escolaridade',
    StatusAtendimento: 'StatusAtendimento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "role" | "paciente" | "documentoUsuario" | "relatorioAlta" | "logAuditoria" | "atendimento" | "listaEspera" | "genero" | "corPele" | "escolaridade" | "statusAtendimento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      DocumentoUsuario: {
        payload: Prisma.$DocumentoUsuarioPayload<ExtArgs>
        fields: Prisma.DocumentoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.DocumentoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>
          }
          findMany: {
            args: Prisma.DocumentoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>[]
          }
          create: {
            args: Prisma.DocumentoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>
          }
          createMany: {
            args: Prisma.DocumentoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>[]
          }
          delete: {
            args: Prisma.DocumentoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>
          }
          update: {
            args: Prisma.DocumentoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.DocumentoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.DocumentoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.DocumentoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentoUsuario>
          }
          groupBy: {
            args: Prisma.DocumentoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoUsuarioCountAggregateOutputType> | number
          }
        }
      }
      RelatorioAlta: {
        payload: Prisma.$RelatorioAltaPayload<ExtArgs>
        fields: Prisma.RelatorioAltaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatorioAltaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatorioAltaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>
          }
          findFirst: {
            args: Prisma.RelatorioAltaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatorioAltaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>
          }
          findMany: {
            args: Prisma.RelatorioAltaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>[]
          }
          create: {
            args: Prisma.RelatorioAltaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>
          }
          createMany: {
            args: Prisma.RelatorioAltaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelatorioAltaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>[]
          }
          delete: {
            args: Prisma.RelatorioAltaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>
          }
          update: {
            args: Prisma.RelatorioAltaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>
          }
          deleteMany: {
            args: Prisma.RelatorioAltaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatorioAltaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelatorioAltaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>[]
          }
          upsert: {
            args: Prisma.RelatorioAltaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioAltaPayload>
          }
          aggregate: {
            args: Prisma.RelatorioAltaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatorioAlta>
          }
          groupBy: {
            args: Prisma.RelatorioAltaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatorioAltaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatorioAltaCountArgs<ExtArgs>
            result: $Utils.Optional<RelatorioAltaCountAggregateOutputType> | number
          }
        }
      }
      LogAuditoria: {
        payload: Prisma.$LogAuditoriaPayload<ExtArgs>
        fields: Prisma.LogAuditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAuditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAuditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          findFirst: {
            args: Prisma.LogAuditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAuditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          findMany: {
            args: Prisma.LogAuditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>[]
          }
          create: {
            args: Prisma.LogAuditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          createMany: {
            args: Prisma.LogAuditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogAuditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>[]
          }
          delete: {
            args: Prisma.LogAuditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          update: {
            args: Prisma.LogAuditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          deleteMany: {
            args: Prisma.LogAuditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogAuditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogAuditoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>[]
          }
          upsert: {
            args: Prisma.LogAuditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          aggregate: {
            args: Prisma.LogAuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogAuditoria>
          }
          groupBy: {
            args: Prisma.LogAuditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogAuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAuditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<LogAuditoriaCountAggregateOutputType> | number
          }
        }
      }
      Atendimento: {
        payload: Prisma.$AtendimentoPayload<ExtArgs>
        fields: Prisma.AtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findFirst: {
            args: Prisma.AtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findMany: {
            args: Prisma.AtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          create: {
            args: Prisma.AtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          createMany: {
            args: Prisma.AtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          delete: {
            args: Prisma.AtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          update: {
            args: Prisma.AtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.AtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.AtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          aggregate: {
            args: Prisma.AtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtendimento>
          }
          groupBy: {
            args: Prisma.AtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoCountAggregateOutputType> | number
          }
        }
      }
      ListaEspera: {
        payload: Prisma.$ListaEsperaPayload<ExtArgs>
        fields: Prisma.ListaEsperaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaEsperaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaEsperaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          findFirst: {
            args: Prisma.ListaEsperaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaEsperaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          findMany: {
            args: Prisma.ListaEsperaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>[]
          }
          create: {
            args: Prisma.ListaEsperaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          createMany: {
            args: Prisma.ListaEsperaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListaEsperaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>[]
          }
          delete: {
            args: Prisma.ListaEsperaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          update: {
            args: Prisma.ListaEsperaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          deleteMany: {
            args: Prisma.ListaEsperaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaEsperaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListaEsperaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>[]
          }
          upsert: {
            args: Prisma.ListaEsperaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaEsperaPayload>
          }
          aggregate: {
            args: Prisma.ListaEsperaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaEspera>
          }
          groupBy: {
            args: Prisma.ListaEsperaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaEsperaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaEsperaCountArgs<ExtArgs>
            result: $Utils.Optional<ListaEsperaCountAggregateOutputType> | number
          }
        }
      }
      Genero: {
        payload: Prisma.$GeneroPayload<ExtArgs>
        fields: Prisma.GeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findFirst: {
            args: Prisma.GeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findMany: {
            args: Prisma.GeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          create: {
            args: Prisma.GeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          createMany: {
            args: Prisma.GeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          delete: {
            args: Prisma.GeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          update: {
            args: Prisma.GeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          upsert: {
            args: Prisma.GeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.GeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      CorPele: {
        payload: Prisma.$CorPelePayload<ExtArgs>
        fields: Prisma.CorPeleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CorPeleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CorPeleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>
          }
          findFirst: {
            args: Prisma.CorPeleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CorPeleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>
          }
          findMany: {
            args: Prisma.CorPeleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>[]
          }
          create: {
            args: Prisma.CorPeleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>
          }
          createMany: {
            args: Prisma.CorPeleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CorPeleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>[]
          }
          delete: {
            args: Prisma.CorPeleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>
          }
          update: {
            args: Prisma.CorPeleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>
          }
          deleteMany: {
            args: Prisma.CorPeleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CorPeleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CorPeleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>[]
          }
          upsert: {
            args: Prisma.CorPeleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorPelePayload>
          }
          aggregate: {
            args: Prisma.CorPeleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorPele>
          }
          groupBy: {
            args: Prisma.CorPeleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorPeleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CorPeleCountArgs<ExtArgs>
            result: $Utils.Optional<CorPeleCountAggregateOutputType> | number
          }
        }
      }
      Escolaridade: {
        payload: Prisma.$EscolaridadePayload<ExtArgs>
        fields: Prisma.EscolaridadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscolaridadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscolaridadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>
          }
          findFirst: {
            args: Prisma.EscolaridadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscolaridadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>
          }
          findMany: {
            args: Prisma.EscolaridadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>[]
          }
          create: {
            args: Prisma.EscolaridadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>
          }
          createMany: {
            args: Prisma.EscolaridadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscolaridadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>[]
          }
          delete: {
            args: Prisma.EscolaridadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>
          }
          update: {
            args: Prisma.EscolaridadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>
          }
          deleteMany: {
            args: Prisma.EscolaridadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscolaridadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscolaridadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>[]
          }
          upsert: {
            args: Prisma.EscolaridadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscolaridadePayload>
          }
          aggregate: {
            args: Prisma.EscolaridadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscolaridade>
          }
          groupBy: {
            args: Prisma.EscolaridadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscolaridadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscolaridadeCountArgs<ExtArgs>
            result: $Utils.Optional<EscolaridadeCountAggregateOutputType> | number
          }
        }
      }
      StatusAtendimento: {
        payload: Prisma.$StatusAtendimentoPayload<ExtArgs>
        fields: Prisma.StatusAtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusAtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusAtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>
          }
          findFirst: {
            args: Prisma.StatusAtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusAtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>
          }
          findMany: {
            args: Prisma.StatusAtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>[]
          }
          create: {
            args: Prisma.StatusAtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>
          }
          createMany: {
            args: Prisma.StatusAtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusAtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>[]
          }
          delete: {
            args: Prisma.StatusAtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>
          }
          update: {
            args: Prisma.StatusAtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.StatusAtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusAtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusAtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.StatusAtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusAtendimentoPayload>
          }
          aggregate: {
            args: Prisma.StatusAtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusAtendimento>
          }
          groupBy: {
            args: Prisma.StatusAtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusAtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusAtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<StatusAtendimentoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    role?: RoleOmit
    paciente?: PacienteOmit
    documentoUsuario?: DocumentoUsuarioOmit
    relatorioAlta?: RelatorioAltaOmit
    logAuditoria?: LogAuditoriaOmit
    atendimento?: AtendimentoOmit
    listaEspera?: ListaEsperaOmit
    genero?: GeneroOmit
    corPele?: CorPeleOmit
    escolaridade?: EscolaridadeOmit
    statusAtendimento?: StatusAtendimentoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    documentosUsuario: number
    logsExecutados: number
    atendimentoComoEstagiario: number
    atendimentoComoSupervisor: number
    relatorioComoEstagiario: number
    relatorioComoSupervisor: number
    pacientesComoEstagiario: number
    pacientesComoSupervisor: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentosUsuario?: boolean | UsuarioCountOutputTypeCountDocumentosUsuarioArgs
    logsExecutados?: boolean | UsuarioCountOutputTypeCountLogsExecutadosArgs
    atendimentoComoEstagiario?: boolean | UsuarioCountOutputTypeCountAtendimentoComoEstagiarioArgs
    atendimentoComoSupervisor?: boolean | UsuarioCountOutputTypeCountAtendimentoComoSupervisorArgs
    relatorioComoEstagiario?: boolean | UsuarioCountOutputTypeCountRelatorioComoEstagiarioArgs
    relatorioComoSupervisor?: boolean | UsuarioCountOutputTypeCountRelatorioComoSupervisorArgs
    pacientesComoEstagiario?: boolean | UsuarioCountOutputTypeCountPacientesComoEstagiarioArgs
    pacientesComoSupervisor?: boolean | UsuarioCountOutputTypeCountPacientesComoSupervisorArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDocumentosUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoUsuarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogsExecutadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAuditoriaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtendimentoComoEstagiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAtendimentoComoSupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRelatorioComoEstagiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioAltaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRelatorioComoSupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioAltaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPacientesComoEstagiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPacientesComoSupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    usuarios: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RoleCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    relatoriosAlta: number
    logsAuditoria: number
    atendimentos: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatoriosAlta?: boolean | PacienteCountOutputTypeCountRelatoriosAltaArgs
    logsAuditoria?: boolean | PacienteCountOutputTypeCountLogsAuditoriaArgs
    atendimentos?: boolean | PacienteCountOutputTypeCountAtendimentosArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountRelatoriosAltaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioAltaWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountLogsAuditoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAuditoriaWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountAtendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    pacientes: number
    listaEspera: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | GeneroCountOutputTypeCountPacientesArgs
    listaEspera?: boolean | GeneroCountOutputTypeCountListaEsperaArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountListaEsperaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaEsperaWhereInput
  }


  /**
   * Count Type CorPeleCountOutputType
   */

  export type CorPeleCountOutputType = {
    pacientes: number
    listaEspera: number
  }

  export type CorPeleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | CorPeleCountOutputTypeCountPacientesArgs
    listaEspera?: boolean | CorPeleCountOutputTypeCountListaEsperaArgs
  }

  // Custom InputTypes
  /**
   * CorPeleCountOutputType without action
   */
  export type CorPeleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPeleCountOutputType
     */
    select?: CorPeleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CorPeleCountOutputType without action
   */
  export type CorPeleCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * CorPeleCountOutputType without action
   */
  export type CorPeleCountOutputTypeCountListaEsperaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaEsperaWhereInput
  }


  /**
   * Count Type EscolaridadeCountOutputType
   */

  export type EscolaridadeCountOutputType = {
    pacientes: number
    listaEspera: number
  }

  export type EscolaridadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | EscolaridadeCountOutputTypeCountPacientesArgs
    listaEspera?: boolean | EscolaridadeCountOutputTypeCountListaEsperaArgs
  }

  // Custom InputTypes
  /**
   * EscolaridadeCountOutputType without action
   */
  export type EscolaridadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscolaridadeCountOutputType
     */
    select?: EscolaridadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EscolaridadeCountOutputType without action
   */
  export type EscolaridadeCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * EscolaridadeCountOutputType without action
   */
  export type EscolaridadeCountOutputTypeCountListaEsperaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaEsperaWhereInput
  }


  /**
   * Count Type StatusAtendimentoCountOutputType
   */

  export type StatusAtendimentoCountOutputType = {
    atendimentos: number
  }

  export type StatusAtendimentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | StatusAtendimentoCountOutputTypeCountAtendimentosArgs
  }

  // Custom InputTypes
  /**
   * StatusAtendimentoCountOutputType without action
   */
  export type StatusAtendimentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimentoCountOutputType
     */
    select?: StatusAtendimentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusAtendimentoCountOutputType without action
   */
  export type StatusAtendimentoCountOutputTypeCountAtendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_User: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    roleId: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_User: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    roleId: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_User: number
    nome: number
    email: number
    senhaHash: number
    roleId: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id_User?: true
    nome?: true
    email?: true
    senhaHash?: true
    roleId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_User?: true
    nome?: true
    email?: true
    senhaHash?: true
    roleId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_User?: true
    nome?: true
    email?: true
    senhaHash?: true
    roleId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_User: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_User?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    documentosUsuario?: boolean | Usuario$documentosUsuarioArgs<ExtArgs>
    logsExecutados?: boolean | Usuario$logsExecutadosArgs<ExtArgs>
    atendimentoComoEstagiario?: boolean | Usuario$atendimentoComoEstagiarioArgs<ExtArgs>
    atendimentoComoSupervisor?: boolean | Usuario$atendimentoComoSupervisorArgs<ExtArgs>
    relatorioComoEstagiario?: boolean | Usuario$relatorioComoEstagiarioArgs<ExtArgs>
    relatorioComoSupervisor?: boolean | Usuario$relatorioComoSupervisorArgs<ExtArgs>
    pacientesComoEstagiario?: boolean | Usuario$pacientesComoEstagiarioArgs<ExtArgs>
    pacientesComoSupervisor?: boolean | Usuario$pacientesComoSupervisorArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_User?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_User?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_User?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    roleId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_User" | "nome" | "email" | "senhaHash" | "roleId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    documentosUsuario?: boolean | Usuario$documentosUsuarioArgs<ExtArgs>
    logsExecutados?: boolean | Usuario$logsExecutadosArgs<ExtArgs>
    atendimentoComoEstagiario?: boolean | Usuario$atendimentoComoEstagiarioArgs<ExtArgs>
    atendimentoComoSupervisor?: boolean | Usuario$atendimentoComoSupervisorArgs<ExtArgs>
    relatorioComoEstagiario?: boolean | Usuario$relatorioComoEstagiarioArgs<ExtArgs>
    relatorioComoSupervisor?: boolean | Usuario$relatorioComoSupervisorArgs<ExtArgs>
    pacientesComoEstagiario?: boolean | Usuario$pacientesComoEstagiarioArgs<ExtArgs>
    pacientesComoSupervisor?: boolean | Usuario$pacientesComoSupervisorArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      documentosUsuario: Prisma.$DocumentoUsuarioPayload<ExtArgs>[]
      logsExecutados: Prisma.$LogAuditoriaPayload<ExtArgs>[]
      atendimentoComoEstagiario: Prisma.$AtendimentoPayload<ExtArgs>[]
      atendimentoComoSupervisor: Prisma.$AtendimentoPayload<ExtArgs>[]
      relatorioComoEstagiario: Prisma.$RelatorioAltaPayload<ExtArgs>[]
      relatorioComoSupervisor: Prisma.$RelatorioAltaPayload<ExtArgs>[]
      pacientesComoEstagiario: Prisma.$PacientePayload<ExtArgs>[]
      pacientesComoSupervisor: Prisma.$PacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_User: string
      nome: string
      email: string
      senhaHash: string
      roleId: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_User`
     * const usuarioWithId_UserOnly = await prisma.usuario.findMany({ select: { id_User: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_User`
     * const usuarioWithId_UserOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_User: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_User`
     * const usuarioWithId_UserOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_User: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documentosUsuario<T extends Usuario$documentosUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$documentosUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logsExecutados<T extends Usuario$logsExecutadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$logsExecutadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atendimentoComoEstagiario<T extends Usuario$atendimentoComoEstagiarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$atendimentoComoEstagiarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atendimentoComoSupervisor<T extends Usuario$atendimentoComoSupervisorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$atendimentoComoSupervisorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatorioComoEstagiario<T extends Usuario$relatorioComoEstagiarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$relatorioComoEstagiarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatorioComoSupervisor<T extends Usuario$relatorioComoSupervisorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$relatorioComoSupervisorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientesComoEstagiario<T extends Usuario$pacientesComoEstagiarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pacientesComoEstagiarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientesComoSupervisor<T extends Usuario$pacientesComoSupervisorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pacientesComoSupervisorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_User: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senhaHash: FieldRef<"Usuario", 'String'>
    readonly roleId: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.documentosUsuario
   */
  export type Usuario$documentosUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    where?: DocumentoUsuarioWhereInput
    orderBy?: DocumentoUsuarioOrderByWithRelationInput | DocumentoUsuarioOrderByWithRelationInput[]
    cursor?: DocumentoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoUsuarioScalarFieldEnum | DocumentoUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario.logsExecutados
   */
  export type Usuario$logsExecutadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    where?: LogAuditoriaWhereInput
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    cursor?: LogAuditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * Usuario.atendimentoComoEstagiario
   */
  export type Usuario$atendimentoComoEstagiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Usuario.atendimentoComoSupervisor
   */
  export type Usuario$atendimentoComoSupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Usuario.relatorioComoEstagiario
   */
  export type Usuario$relatorioComoEstagiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    where?: RelatorioAltaWhereInput
    orderBy?: RelatorioAltaOrderByWithRelationInput | RelatorioAltaOrderByWithRelationInput[]
    cursor?: RelatorioAltaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioAltaScalarFieldEnum | RelatorioAltaScalarFieldEnum[]
  }

  /**
   * Usuario.relatorioComoSupervisor
   */
  export type Usuario$relatorioComoSupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    where?: RelatorioAltaWhereInput
    orderBy?: RelatorioAltaOrderByWithRelationInput | RelatorioAltaOrderByWithRelationInput[]
    cursor?: RelatorioAltaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioAltaScalarFieldEnum | RelatorioAltaScalarFieldEnum[]
  }

  /**
   * Usuario.pacientesComoEstagiario
   */
  export type Usuario$pacientesComoEstagiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Usuario.pacientesComoSupervisor
   */
  export type Usuario$pacientesComoSupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id_Role: string | null
    role: string | null
    descricao: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id_Role: string | null
    role: string | null
    descricao: string | null
  }

  export type RoleCountAggregateOutputType = {
    id_Role: number
    role: number
    descricao: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id_Role?: true
    role?: true
    descricao?: true
  }

  export type RoleMaxAggregateInputType = {
    id_Role?: true
    role?: true
    descricao?: true
  }

  export type RoleCountAggregateInputType = {
    id_Role?: true
    role?: true
    descricao?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id_Role: string
    role: string
    descricao: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Role?: boolean
    role?: boolean
    descricao?: boolean
    usuarios?: boolean | Role$usuariosArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Role?: boolean
    role?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Role?: boolean
    role?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id_Role?: boolean
    role?: boolean
    descricao?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Role" | "role" | "descricao", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Role$usuariosArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Role: string
      role: string
      descricao: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id_Role`
     * const roleWithId_RoleOnly = await prisma.role.findMany({ select: { id_Role: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id_Role`
     * const roleWithId_RoleOnly = await prisma.role.createManyAndReturn({
     *   select: { id_Role: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id_Role`
     * const roleWithId_RoleOnly = await prisma.role.updateManyAndReturn({
     *   select: { id_Role: true },
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Role$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Role$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id_Role: FieldRef<"Role", 'String'>
    readonly role: FieldRef<"Role", 'String'>
    readonly descricao: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.usuarios
   */
  export type Role$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id_Genero: number | null
    id_CorPele: number | null
    id_Escolaridade: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id_Genero: number | null
    id_CorPele: number | null
    id_Escolaridade: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id_Paciente: string | null
    nomeRegistro: string | null
    nomeSocial: string | null
    dataNascimento: Date | null
    id_Genero: number | null
    id_CorPele: number | null
    id_Escolaridade: number | null
    telefonePessoal: string | null
    contatoEmergencia: string | null
    enderecoRua: string | null
    enderecoNumero: string | null
    enderecoBairro: string | null
    enderecoCidade: string | null
    enderecoEstado: string | null
    enderecoCEP: string | null
    dataInicioTratamento: Date | null
    id_Estagiario_Responsavel: string | null
    id_Supervisor_Responsavel: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    id_Paciente: string | null
    nomeRegistro: string | null
    nomeSocial: string | null
    dataNascimento: Date | null
    id_Genero: number | null
    id_CorPele: number | null
    id_Escolaridade: number | null
    telefonePessoal: string | null
    contatoEmergencia: string | null
    enderecoRua: string | null
    enderecoNumero: string | null
    enderecoBairro: string | null
    enderecoCidade: string | null
    enderecoEstado: string | null
    enderecoCEP: string | null
    dataInicioTratamento: Date | null
    id_Estagiario_Responsavel: string | null
    id_Supervisor_Responsavel: string | null
  }

  export type PacienteCountAggregateOutputType = {
    id_Paciente: number
    nomeRegistro: number
    nomeSocial: number
    dataNascimento: number
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: number
    contatoEmergencia: number
    enderecoRua: number
    enderecoNumero: number
    enderecoBairro: number
    enderecoCidade: number
    enderecoEstado: number
    enderecoCEP: number
    dataInicioTratamento: number
    id_Estagiario_Responsavel: number
    id_Supervisor_Responsavel: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
  }

  export type PacienteSumAggregateInputType = {
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
  }

  export type PacienteMinAggregateInputType = {
    id_Paciente?: true
    nomeRegistro?: true
    nomeSocial?: true
    dataNascimento?: true
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
    telefonePessoal?: true
    contatoEmergencia?: true
    enderecoRua?: true
    enderecoNumero?: true
    enderecoBairro?: true
    enderecoCidade?: true
    enderecoEstado?: true
    enderecoCEP?: true
    dataInicioTratamento?: true
    id_Estagiario_Responsavel?: true
    id_Supervisor_Responsavel?: true
  }

  export type PacienteMaxAggregateInputType = {
    id_Paciente?: true
    nomeRegistro?: true
    nomeSocial?: true
    dataNascimento?: true
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
    telefonePessoal?: true
    contatoEmergencia?: true
    enderecoRua?: true
    enderecoNumero?: true
    enderecoBairro?: true
    enderecoCidade?: true
    enderecoEstado?: true
    enderecoCEP?: true
    dataInicioTratamento?: true
    id_Estagiario_Responsavel?: true
    id_Supervisor_Responsavel?: true
  }

  export type PacienteCountAggregateInputType = {
    id_Paciente?: true
    nomeRegistro?: true
    nomeSocial?: true
    dataNascimento?: true
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
    telefonePessoal?: true
    contatoEmergencia?: true
    enderecoRua?: true
    enderecoNumero?: true
    enderecoBairro?: true
    enderecoCidade?: true
    enderecoEstado?: true
    enderecoCEP?: true
    dataInicioTratamento?: true
    id_Estagiario_Responsavel?: true
    id_Supervisor_Responsavel?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id_Paciente: string
    nomeRegistro: string
    nomeSocial: string | null
    dataNascimento: Date
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Paciente?: boolean
    nomeRegistro?: boolean
    nomeSocial?: boolean
    dataNascimento?: boolean
    id_Genero?: boolean
    id_CorPele?: boolean
    id_Escolaridade?: boolean
    telefonePessoal?: boolean
    contatoEmergencia?: boolean
    enderecoRua?: boolean
    enderecoNumero?: boolean
    enderecoBairro?: boolean
    enderecoCidade?: boolean
    enderecoEstado?: boolean
    enderecoCEP?: boolean
    dataInicioTratamento?: boolean
    id_Estagiario_Responsavel?: boolean
    id_Supervisor_Responsavel?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
    estagiarioResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    relatoriosAlta?: boolean | Paciente$relatoriosAltaArgs<ExtArgs>
    logsAuditoria?: boolean | Paciente$logsAuditoriaArgs<ExtArgs>
    atendimentos?: boolean | Paciente$atendimentosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Paciente?: boolean
    nomeRegistro?: boolean
    nomeSocial?: boolean
    dataNascimento?: boolean
    id_Genero?: boolean
    id_CorPele?: boolean
    id_Escolaridade?: boolean
    telefonePessoal?: boolean
    contatoEmergencia?: boolean
    enderecoRua?: boolean
    enderecoNumero?: boolean
    enderecoBairro?: boolean
    enderecoCidade?: boolean
    enderecoEstado?: boolean
    enderecoCEP?: boolean
    dataInicioTratamento?: boolean
    id_Estagiario_Responsavel?: boolean
    id_Supervisor_Responsavel?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
    estagiarioResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Paciente?: boolean
    nomeRegistro?: boolean
    nomeSocial?: boolean
    dataNascimento?: boolean
    id_Genero?: boolean
    id_CorPele?: boolean
    id_Escolaridade?: boolean
    telefonePessoal?: boolean
    contatoEmergencia?: boolean
    enderecoRua?: boolean
    enderecoNumero?: boolean
    enderecoBairro?: boolean
    enderecoCidade?: boolean
    enderecoEstado?: boolean
    enderecoCEP?: boolean
    dataInicioTratamento?: boolean
    id_Estagiario_Responsavel?: boolean
    id_Supervisor_Responsavel?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
    estagiarioResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id_Paciente?: boolean
    nomeRegistro?: boolean
    nomeSocial?: boolean
    dataNascimento?: boolean
    id_Genero?: boolean
    id_CorPele?: boolean
    id_Escolaridade?: boolean
    telefonePessoal?: boolean
    contatoEmergencia?: boolean
    enderecoRua?: boolean
    enderecoNumero?: boolean
    enderecoBairro?: boolean
    enderecoCidade?: boolean
    enderecoEstado?: boolean
    enderecoCEP?: boolean
    dataInicioTratamento?: boolean
    id_Estagiario_Responsavel?: boolean
    id_Supervisor_Responsavel?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Paciente" | "nomeRegistro" | "nomeSocial" | "dataNascimento" | "id_Genero" | "id_CorPele" | "id_Escolaridade" | "telefonePessoal" | "contatoEmergencia" | "enderecoRua" | "enderecoNumero" | "enderecoBairro" | "enderecoCidade" | "enderecoEstado" | "enderecoCEP" | "dataInicioTratamento" | "id_Estagiario_Responsavel" | "id_Supervisor_Responsavel", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
    estagiarioResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    relatoriosAlta?: boolean | Paciente$relatoriosAltaArgs<ExtArgs>
    logsAuditoria?: boolean | Paciente$logsAuditoriaArgs<ExtArgs>
    atendimentos?: boolean | Paciente$atendimentosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
    estagiarioResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
    estagiarioResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorResponsavel?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      genero: Prisma.$GeneroPayload<ExtArgs>
      corPele: Prisma.$CorPelePayload<ExtArgs>
      escolaridade: Prisma.$EscolaridadePayload<ExtArgs>
      estagiarioResponsavel: Prisma.$UsuarioPayload<ExtArgs>
      supervisorResponsavel: Prisma.$UsuarioPayload<ExtArgs>
      relatoriosAlta: Prisma.$RelatorioAltaPayload<ExtArgs>[]
      logsAuditoria: Prisma.$LogAuditoriaPayload<ExtArgs>[]
      atendimentos: Prisma.$AtendimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Paciente: string
      nomeRegistro: string
      nomeSocial: string | null
      dataNascimento: Date
      id_Genero: number
      id_CorPele: number
      id_Escolaridade: number
      telefonePessoal: string
      contatoEmergencia: string
      enderecoRua: string
      enderecoNumero: string
      enderecoBairro: string
      enderecoCidade: string
      enderecoEstado: string
      enderecoCEP: string
      dataInicioTratamento: Date
      id_Estagiario_Responsavel: string
      id_Supervisor_Responsavel: string
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id_Paciente`
     * const pacienteWithId_PacienteOnly = await prisma.paciente.findMany({ select: { id_Paciente: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id_Paciente`
     * const pacienteWithId_PacienteOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id_Paciente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id_Paciente`
     * const pacienteWithId_PacienteOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { id_Paciente: true },
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
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genero<T extends GeneroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneroDefaultArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    corPele<T extends CorPeleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CorPeleDefaultArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    escolaridade<T extends EscolaridadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscolaridadeDefaultArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estagiarioResponsavel<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisorResponsavel<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatoriosAlta<T extends Paciente$relatoriosAltaArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$relatoriosAltaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logsAuditoria<T extends Paciente$logsAuditoriaArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$logsAuditoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atendimentos<T extends Paciente$atendimentosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$atendimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id_Paciente: FieldRef<"Paciente", 'String'>
    readonly nomeRegistro: FieldRef<"Paciente", 'String'>
    readonly nomeSocial: FieldRef<"Paciente", 'String'>
    readonly dataNascimento: FieldRef<"Paciente", 'DateTime'>
    readonly id_Genero: FieldRef<"Paciente", 'Int'>
    readonly id_CorPele: FieldRef<"Paciente", 'Int'>
    readonly id_Escolaridade: FieldRef<"Paciente", 'Int'>
    readonly telefonePessoal: FieldRef<"Paciente", 'String'>
    readonly contatoEmergencia: FieldRef<"Paciente", 'String'>
    readonly enderecoRua: FieldRef<"Paciente", 'String'>
    readonly enderecoNumero: FieldRef<"Paciente", 'String'>
    readonly enderecoBairro: FieldRef<"Paciente", 'String'>
    readonly enderecoCidade: FieldRef<"Paciente", 'String'>
    readonly enderecoEstado: FieldRef<"Paciente", 'String'>
    readonly enderecoCEP: FieldRef<"Paciente", 'String'>
    readonly dataInicioTratamento: FieldRef<"Paciente", 'DateTime'>
    readonly id_Estagiario_Responsavel: FieldRef<"Paciente", 'String'>
    readonly id_Supervisor_Responsavel: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.relatoriosAlta
   */
  export type Paciente$relatoriosAltaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    where?: RelatorioAltaWhereInput
    orderBy?: RelatorioAltaOrderByWithRelationInput | RelatorioAltaOrderByWithRelationInput[]
    cursor?: RelatorioAltaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelatorioAltaScalarFieldEnum | RelatorioAltaScalarFieldEnum[]
  }

  /**
   * Paciente.logsAuditoria
   */
  export type Paciente$logsAuditoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    where?: LogAuditoriaWhereInput
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    cursor?: LogAuditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * Paciente.atendimentos
   */
  export type Paciente$atendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model DocumentoUsuario
   */

  export type AggregateDocumentoUsuario = {
    _count: DocumentoUsuarioCountAggregateOutputType | null
    _min: DocumentoUsuarioMinAggregateOutputType | null
    _max: DocumentoUsuarioMaxAggregateOutputType | null
  }

  export type DocumentoUsuarioMinAggregateOutputType = {
    id_Documento: string | null
    id_User: string | null
    nomeArquivo: string | null
    caminhoArquivo: string | null
    dataUpload: Date | null
  }

  export type DocumentoUsuarioMaxAggregateOutputType = {
    id_Documento: string | null
    id_User: string | null
    nomeArquivo: string | null
    caminhoArquivo: string | null
    dataUpload: Date | null
  }

  export type DocumentoUsuarioCountAggregateOutputType = {
    id_Documento: number
    id_User: number
    nomeArquivo: number
    caminhoArquivo: number
    dataUpload: number
    _all: number
  }


  export type DocumentoUsuarioMinAggregateInputType = {
    id_Documento?: true
    id_User?: true
    nomeArquivo?: true
    caminhoArquivo?: true
    dataUpload?: true
  }

  export type DocumentoUsuarioMaxAggregateInputType = {
    id_Documento?: true
    id_User?: true
    nomeArquivo?: true
    caminhoArquivo?: true
    dataUpload?: true
  }

  export type DocumentoUsuarioCountAggregateInputType = {
    id_Documento?: true
    id_User?: true
    nomeArquivo?: true
    caminhoArquivo?: true
    dataUpload?: true
    _all?: true
  }

  export type DocumentoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentoUsuario to aggregate.
     */
    where?: DocumentoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoUsuarios to fetch.
     */
    orderBy?: DocumentoUsuarioOrderByWithRelationInput | DocumentoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentoUsuarios
    **/
    _count?: true | DocumentoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoUsuarioMaxAggregateInputType
  }

  export type GetDocumentoUsuarioAggregateType<T extends DocumentoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentoUsuario[P]>
      : GetScalarType<T[P], AggregateDocumentoUsuario[P]>
  }




  export type DocumentoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoUsuarioWhereInput
    orderBy?: DocumentoUsuarioOrderByWithAggregationInput | DocumentoUsuarioOrderByWithAggregationInput[]
    by: DocumentoUsuarioScalarFieldEnum[] | DocumentoUsuarioScalarFieldEnum
    having?: DocumentoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoUsuarioCountAggregateInputType | true
    _min?: DocumentoUsuarioMinAggregateInputType
    _max?: DocumentoUsuarioMaxAggregateInputType
  }

  export type DocumentoUsuarioGroupByOutputType = {
    id_Documento: string
    id_User: string
    nomeArquivo: string
    caminhoArquivo: string
    dataUpload: Date
    _count: DocumentoUsuarioCountAggregateOutputType | null
    _min: DocumentoUsuarioMinAggregateOutputType | null
    _max: DocumentoUsuarioMaxAggregateOutputType | null
  }

  type GetDocumentoUsuarioGroupByPayload<T extends DocumentoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Documento?: boolean
    id_User?: boolean
    nomeArquivo?: boolean
    caminhoArquivo?: boolean
    dataUpload?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoUsuario"]>

  export type DocumentoUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Documento?: boolean
    id_User?: boolean
    nomeArquivo?: boolean
    caminhoArquivo?: boolean
    dataUpload?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoUsuario"]>

  export type DocumentoUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Documento?: boolean
    id_User?: boolean
    nomeArquivo?: boolean
    caminhoArquivo?: boolean
    dataUpload?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoUsuario"]>

  export type DocumentoUsuarioSelectScalar = {
    id_Documento?: boolean
    id_User?: boolean
    nomeArquivo?: boolean
    caminhoArquivo?: boolean
    dataUpload?: boolean
  }

  export type DocumentoUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Documento" | "id_User" | "nomeArquivo" | "caminhoArquivo" | "dataUpload", ExtArgs["result"]["documentoUsuario"]>
  export type DocumentoUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type DocumentoUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type DocumentoUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $DocumentoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentoUsuario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Documento: string
      id_User: string
      nomeArquivo: string
      caminhoArquivo: string
      dataUpload: Date
    }, ExtArgs["result"]["documentoUsuario"]>
    composites: {}
  }

  type DocumentoUsuarioGetPayload<S extends boolean | null | undefined | DocumentoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$DocumentoUsuarioPayload, S>

  type DocumentoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoUsuarioCountAggregateInputType | true
    }

  export interface DocumentoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentoUsuario'], meta: { name: 'DocumentoUsuario' } }
    /**
     * Find zero or one DocumentoUsuario that matches the filter.
     * @param {DocumentoUsuarioFindUniqueArgs} args - Arguments to find a DocumentoUsuario
     * @example
     * // Get one DocumentoUsuario
     * const documentoUsuario = await prisma.documentoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoUsuarioFindUniqueArgs>(args: SelectSubset<T, DocumentoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__DocumentoUsuarioClient<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentoUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a DocumentoUsuario
     * @example
     * // Get one DocumentoUsuario
     * const documentoUsuario = await prisma.documentoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoUsuarioClient<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUsuarioFindFirstArgs} args - Arguments to find a DocumentoUsuario
     * @example
     * // Get one DocumentoUsuario
     * const documentoUsuario = await prisma.documentoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoUsuarioFindFirstArgs>(args?: SelectSubset<T, DocumentoUsuarioFindFirstArgs<ExtArgs>>): Prisma__DocumentoUsuarioClient<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUsuarioFindFirstOrThrowArgs} args - Arguments to find a DocumentoUsuario
     * @example
     * // Get one DocumentoUsuario
     * const documentoUsuario = await prisma.documentoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoUsuarioClient<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentoUsuarios
     * const documentoUsuarios = await prisma.documentoUsuario.findMany()
     * 
     * // Get first 10 DocumentoUsuarios
     * const documentoUsuarios = await prisma.documentoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id_Documento`
     * const documentoUsuarioWithId_DocumentoOnly = await prisma.documentoUsuario.findMany({ select: { id_Documento: true } })
     * 
     */
    findMany<T extends DocumentoUsuarioFindManyArgs>(args?: SelectSubset<T, DocumentoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentoUsuario.
     * @param {DocumentoUsuarioCreateArgs} args - Arguments to create a DocumentoUsuario.
     * @example
     * // Create one DocumentoUsuario
     * const DocumentoUsuario = await prisma.documentoUsuario.create({
     *   data: {
     *     // ... data to create a DocumentoUsuario
     *   }
     * })
     * 
     */
    create<T extends DocumentoUsuarioCreateArgs>(args: SelectSubset<T, DocumentoUsuarioCreateArgs<ExtArgs>>): Prisma__DocumentoUsuarioClient<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentoUsuarios.
     * @param {DocumentoUsuarioCreateManyArgs} args - Arguments to create many DocumentoUsuarios.
     * @example
     * // Create many DocumentoUsuarios
     * const documentoUsuario = await prisma.documentoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoUsuarioCreateManyArgs>(args?: SelectSubset<T, DocumentoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentoUsuarios and returns the data saved in the database.
     * @param {DocumentoUsuarioCreateManyAndReturnArgs} args - Arguments to create many DocumentoUsuarios.
     * @example
     * // Create many DocumentoUsuarios
     * const documentoUsuario = await prisma.documentoUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentoUsuarios and only return the `id_Documento`
     * const documentoUsuarioWithId_DocumentoOnly = await prisma.documentoUsuario.createManyAndReturn({
     *   select: { id_Documento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentoUsuario.
     * @param {DocumentoUsuarioDeleteArgs} args - Arguments to delete one DocumentoUsuario.
     * @example
     * // Delete one DocumentoUsuario
     * const DocumentoUsuario = await prisma.documentoUsuario.delete({
     *   where: {
     *     // ... filter to delete one DocumentoUsuario
     *   }
     * })
     * 
     */
    delete<T extends DocumentoUsuarioDeleteArgs>(args: SelectSubset<T, DocumentoUsuarioDeleteArgs<ExtArgs>>): Prisma__DocumentoUsuarioClient<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentoUsuario.
     * @param {DocumentoUsuarioUpdateArgs} args - Arguments to update one DocumentoUsuario.
     * @example
     * // Update one DocumentoUsuario
     * const documentoUsuario = await prisma.documentoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoUsuarioUpdateArgs>(args: SelectSubset<T, DocumentoUsuarioUpdateArgs<ExtArgs>>): Prisma__DocumentoUsuarioClient<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentoUsuarios.
     * @param {DocumentoUsuarioDeleteManyArgs} args - Arguments to filter DocumentoUsuarios to delete.
     * @example
     * // Delete a few DocumentoUsuarios
     * const { count } = await prisma.documentoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoUsuarioDeleteManyArgs>(args?: SelectSubset<T, DocumentoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentoUsuarios
     * const documentoUsuario = await prisma.documentoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoUsuarioUpdateManyArgs>(args: SelectSubset<T, DocumentoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentoUsuarios and returns the data updated in the database.
     * @param {DocumentoUsuarioUpdateManyAndReturnArgs} args - Arguments to update many DocumentoUsuarios.
     * @example
     * // Update many DocumentoUsuarios
     * const documentoUsuario = await prisma.documentoUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentoUsuarios and only return the `id_Documento`
     * const documentoUsuarioWithId_DocumentoOnly = await prisma.documentoUsuario.updateManyAndReturn({
     *   select: { id_Documento: true },
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
    updateManyAndReturn<T extends DocumentoUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentoUsuario.
     * @param {DocumentoUsuarioUpsertArgs} args - Arguments to update or create a DocumentoUsuario.
     * @example
     * // Update or create a DocumentoUsuario
     * const documentoUsuario = await prisma.documentoUsuario.upsert({
     *   create: {
     *     // ... data to create a DocumentoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoUsuarioUpsertArgs>(args: SelectSubset<T, DocumentoUsuarioUpsertArgs<ExtArgs>>): Prisma__DocumentoUsuarioClient<$Result.GetResult<Prisma.$DocumentoUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUsuarioCountArgs} args - Arguments to filter DocumentoUsuarios to count.
     * @example
     * // Count the number of DocumentoUsuarios
     * const count = await prisma.documentoUsuario.count({
     *   where: {
     *     // ... the filter for the DocumentoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends DocumentoUsuarioCountArgs>(
      args?: Subset<T, DocumentoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentoUsuarioAggregateArgs>(args: Subset<T, DocumentoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetDocumentoUsuarioAggregateType<T>>

    /**
     * Group by DocumentoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUsuarioGroupByArgs} args - Group by arguments.
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
      T extends DocumentoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentoUsuario model
   */
  readonly fields: DocumentoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentoUsuario model
   */
  interface DocumentoUsuarioFieldRefs {
    readonly id_Documento: FieldRef<"DocumentoUsuario", 'String'>
    readonly id_User: FieldRef<"DocumentoUsuario", 'String'>
    readonly nomeArquivo: FieldRef<"DocumentoUsuario", 'String'>
    readonly caminhoArquivo: FieldRef<"DocumentoUsuario", 'String'>
    readonly dataUpload: FieldRef<"DocumentoUsuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentoUsuario findUnique
   */
  export type DocumentoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoUsuario to fetch.
     */
    where: DocumentoUsuarioWhereUniqueInput
  }

  /**
   * DocumentoUsuario findUniqueOrThrow
   */
  export type DocumentoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoUsuario to fetch.
     */
    where: DocumentoUsuarioWhereUniqueInput
  }

  /**
   * DocumentoUsuario findFirst
   */
  export type DocumentoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoUsuario to fetch.
     */
    where?: DocumentoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoUsuarios to fetch.
     */
    orderBy?: DocumentoUsuarioOrderByWithRelationInput | DocumentoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentoUsuarios.
     */
    cursor?: DocumentoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoUsuarios.
     */
    distinct?: DocumentoUsuarioScalarFieldEnum | DocumentoUsuarioScalarFieldEnum[]
  }

  /**
   * DocumentoUsuario findFirstOrThrow
   */
  export type DocumentoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoUsuario to fetch.
     */
    where?: DocumentoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoUsuarios to fetch.
     */
    orderBy?: DocumentoUsuarioOrderByWithRelationInput | DocumentoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentoUsuarios.
     */
    cursor?: DocumentoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoUsuarios.
     */
    distinct?: DocumentoUsuarioScalarFieldEnum | DocumentoUsuarioScalarFieldEnum[]
  }

  /**
   * DocumentoUsuario findMany
   */
  export type DocumentoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoUsuarios to fetch.
     */
    where?: DocumentoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoUsuarios to fetch.
     */
    orderBy?: DocumentoUsuarioOrderByWithRelationInput | DocumentoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentoUsuarios.
     */
    cursor?: DocumentoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoUsuarios.
     */
    skip?: number
    distinct?: DocumentoUsuarioScalarFieldEnum | DocumentoUsuarioScalarFieldEnum[]
  }

  /**
   * DocumentoUsuario create
   */
  export type DocumentoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentoUsuario.
     */
    data: XOR<DocumentoUsuarioCreateInput, DocumentoUsuarioUncheckedCreateInput>
  }

  /**
   * DocumentoUsuario createMany
   */
  export type DocumentoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentoUsuarios.
     */
    data: DocumentoUsuarioCreateManyInput | DocumentoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentoUsuario createManyAndReturn
   */
  export type DocumentoUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentoUsuarios.
     */
    data: DocumentoUsuarioCreateManyInput | DocumentoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentoUsuario update
   */
  export type DocumentoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentoUsuario.
     */
    data: XOR<DocumentoUsuarioUpdateInput, DocumentoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which DocumentoUsuario to update.
     */
    where: DocumentoUsuarioWhereUniqueInput
  }

  /**
   * DocumentoUsuario updateMany
   */
  export type DocumentoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentoUsuarios.
     */
    data: XOR<DocumentoUsuarioUpdateManyMutationInput, DocumentoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which DocumentoUsuarios to update
     */
    where?: DocumentoUsuarioWhereInput
    /**
     * Limit how many DocumentoUsuarios to update.
     */
    limit?: number
  }

  /**
   * DocumentoUsuario updateManyAndReturn
   */
  export type DocumentoUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update DocumentoUsuarios.
     */
    data: XOR<DocumentoUsuarioUpdateManyMutationInput, DocumentoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which DocumentoUsuarios to update
     */
    where?: DocumentoUsuarioWhereInput
    /**
     * Limit how many DocumentoUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentoUsuario upsert
   */
  export type DocumentoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentoUsuario to update in case it exists.
     */
    where: DocumentoUsuarioWhereUniqueInput
    /**
     * In case the DocumentoUsuario found by the `where` argument doesn't exist, create a new DocumentoUsuario with this data.
     */
    create: XOR<DocumentoUsuarioCreateInput, DocumentoUsuarioUncheckedCreateInput>
    /**
     * In case the DocumentoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoUsuarioUpdateInput, DocumentoUsuarioUncheckedUpdateInput>
  }

  /**
   * DocumentoUsuario delete
   */
  export type DocumentoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
    /**
     * Filter which DocumentoUsuario to delete.
     */
    where: DocumentoUsuarioWhereUniqueInput
  }

  /**
   * DocumentoUsuario deleteMany
   */
  export type DocumentoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentoUsuarios to delete
     */
    where?: DocumentoUsuarioWhereInput
    /**
     * Limit how many DocumentoUsuarios to delete.
     */
    limit?: number
  }

  /**
   * DocumentoUsuario without action
   */
  export type DocumentoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoUsuario
     */
    select?: DocumentoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoUsuario
     */
    omit?: DocumentoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model RelatorioAlta
   */

  export type AggregateRelatorioAlta = {
    _count: RelatorioAltaCountAggregateOutputType | null
    _min: RelatorioAltaMinAggregateOutputType | null
    _max: RelatorioAltaMaxAggregateOutputType | null
  }

  export type RelatorioAltaMinAggregateOutputType = {
    id_Documento: string | null
    id_Paciente: string | null
    id_Estagiario: string | null
    id_Supervisor: string | null
    conteudo: string | null
    dataEmissao: Date | null
    status: $Enums.StatusRelatorioEnum | null
  }

  export type RelatorioAltaMaxAggregateOutputType = {
    id_Documento: string | null
    id_Paciente: string | null
    id_Estagiario: string | null
    id_Supervisor: string | null
    conteudo: string | null
    dataEmissao: Date | null
    status: $Enums.StatusRelatorioEnum | null
  }

  export type RelatorioAltaCountAggregateOutputType = {
    id_Documento: number
    id_Paciente: number
    id_Estagiario: number
    id_Supervisor: number
    conteudo: number
    dataEmissao: number
    status: number
    _all: number
  }


  export type RelatorioAltaMinAggregateInputType = {
    id_Documento?: true
    id_Paciente?: true
    id_Estagiario?: true
    id_Supervisor?: true
    conteudo?: true
    dataEmissao?: true
    status?: true
  }

  export type RelatorioAltaMaxAggregateInputType = {
    id_Documento?: true
    id_Paciente?: true
    id_Estagiario?: true
    id_Supervisor?: true
    conteudo?: true
    dataEmissao?: true
    status?: true
  }

  export type RelatorioAltaCountAggregateInputType = {
    id_Documento?: true
    id_Paciente?: true
    id_Estagiario?: true
    id_Supervisor?: true
    conteudo?: true
    dataEmissao?: true
    status?: true
    _all?: true
  }

  export type RelatorioAltaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatorioAlta to aggregate.
     */
    where?: RelatorioAltaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioAltas to fetch.
     */
    orderBy?: RelatorioAltaOrderByWithRelationInput | RelatorioAltaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatorioAltaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioAltas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioAltas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelatorioAltas
    **/
    _count?: true | RelatorioAltaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatorioAltaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatorioAltaMaxAggregateInputType
  }

  export type GetRelatorioAltaAggregateType<T extends RelatorioAltaAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatorioAlta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatorioAlta[P]>
      : GetScalarType<T[P], AggregateRelatorioAlta[P]>
  }




  export type RelatorioAltaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioAltaWhereInput
    orderBy?: RelatorioAltaOrderByWithAggregationInput | RelatorioAltaOrderByWithAggregationInput[]
    by: RelatorioAltaScalarFieldEnum[] | RelatorioAltaScalarFieldEnum
    having?: RelatorioAltaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatorioAltaCountAggregateInputType | true
    _min?: RelatorioAltaMinAggregateInputType
    _max?: RelatorioAltaMaxAggregateInputType
  }

  export type RelatorioAltaGroupByOutputType = {
    id_Documento: string
    id_Paciente: string
    id_Estagiario: string
    id_Supervisor: string
    conteudo: string
    dataEmissao: Date
    status: $Enums.StatusRelatorioEnum
    _count: RelatorioAltaCountAggregateOutputType | null
    _min: RelatorioAltaMinAggregateOutputType | null
    _max: RelatorioAltaMaxAggregateOutputType | null
  }

  type GetRelatorioAltaGroupByPayload<T extends RelatorioAltaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatorioAltaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatorioAltaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatorioAltaGroupByOutputType[P]>
            : GetScalarType<T[P], RelatorioAltaGroupByOutputType[P]>
        }
      >
    >


  export type RelatorioAltaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Documento?: boolean
    id_Paciente?: boolean
    id_Estagiario?: boolean
    id_Supervisor?: boolean
    conteudo?: boolean
    dataEmissao?: boolean
    status?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiario?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioAlta"]>

  export type RelatorioAltaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Documento?: boolean
    id_Paciente?: boolean
    id_Estagiario?: boolean
    id_Supervisor?: boolean
    conteudo?: boolean
    dataEmissao?: boolean
    status?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiario?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioAlta"]>

  export type RelatorioAltaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Documento?: boolean
    id_Paciente?: boolean
    id_Estagiario?: boolean
    id_Supervisor?: boolean
    conteudo?: boolean
    dataEmissao?: boolean
    status?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiario?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relatorioAlta"]>

  export type RelatorioAltaSelectScalar = {
    id_Documento?: boolean
    id_Paciente?: boolean
    id_Estagiario?: boolean
    id_Supervisor?: boolean
    conteudo?: boolean
    dataEmissao?: boolean
    status?: boolean
  }

  export type RelatorioAltaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Documento" | "id_Paciente" | "id_Estagiario" | "id_Supervisor" | "conteudo" | "dataEmissao" | "status", ExtArgs["result"]["relatorioAlta"]>
  export type RelatorioAltaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiario?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RelatorioAltaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiario?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RelatorioAltaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiario?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RelatorioAltaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelatorioAlta"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      estagiario: Prisma.$UsuarioPayload<ExtArgs>
      supervisor: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Documento: string
      id_Paciente: string
      id_Estagiario: string
      id_Supervisor: string
      conteudo: string
      dataEmissao: Date
      status: $Enums.StatusRelatorioEnum
    }, ExtArgs["result"]["relatorioAlta"]>
    composites: {}
  }

  type RelatorioAltaGetPayload<S extends boolean | null | undefined | RelatorioAltaDefaultArgs> = $Result.GetResult<Prisma.$RelatorioAltaPayload, S>

  type RelatorioAltaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelatorioAltaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelatorioAltaCountAggregateInputType | true
    }

  export interface RelatorioAltaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelatorioAlta'], meta: { name: 'RelatorioAlta' } }
    /**
     * Find zero or one RelatorioAlta that matches the filter.
     * @param {RelatorioAltaFindUniqueArgs} args - Arguments to find a RelatorioAlta
     * @example
     * // Get one RelatorioAlta
     * const relatorioAlta = await prisma.relatorioAlta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatorioAltaFindUniqueArgs>(args: SelectSubset<T, RelatorioAltaFindUniqueArgs<ExtArgs>>): Prisma__RelatorioAltaClient<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RelatorioAlta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelatorioAltaFindUniqueOrThrowArgs} args - Arguments to find a RelatorioAlta
     * @example
     * // Get one RelatorioAlta
     * const relatorioAlta = await prisma.relatorioAlta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatorioAltaFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatorioAltaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatorioAltaClient<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatorioAlta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAltaFindFirstArgs} args - Arguments to find a RelatorioAlta
     * @example
     * // Get one RelatorioAlta
     * const relatorioAlta = await prisma.relatorioAlta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatorioAltaFindFirstArgs>(args?: SelectSubset<T, RelatorioAltaFindFirstArgs<ExtArgs>>): Prisma__RelatorioAltaClient<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RelatorioAlta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAltaFindFirstOrThrowArgs} args - Arguments to find a RelatorioAlta
     * @example
     * // Get one RelatorioAlta
     * const relatorioAlta = await prisma.relatorioAlta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatorioAltaFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatorioAltaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatorioAltaClient<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RelatorioAltas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAltaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelatorioAltas
     * const relatorioAltas = await prisma.relatorioAlta.findMany()
     * 
     * // Get first 10 RelatorioAltas
     * const relatorioAltas = await prisma.relatorioAlta.findMany({ take: 10 })
     * 
     * // Only select the `id_Documento`
     * const relatorioAltaWithId_DocumentoOnly = await prisma.relatorioAlta.findMany({ select: { id_Documento: true } })
     * 
     */
    findMany<T extends RelatorioAltaFindManyArgs>(args?: SelectSubset<T, RelatorioAltaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RelatorioAlta.
     * @param {RelatorioAltaCreateArgs} args - Arguments to create a RelatorioAlta.
     * @example
     * // Create one RelatorioAlta
     * const RelatorioAlta = await prisma.relatorioAlta.create({
     *   data: {
     *     // ... data to create a RelatorioAlta
     *   }
     * })
     * 
     */
    create<T extends RelatorioAltaCreateArgs>(args: SelectSubset<T, RelatorioAltaCreateArgs<ExtArgs>>): Prisma__RelatorioAltaClient<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RelatorioAltas.
     * @param {RelatorioAltaCreateManyArgs} args - Arguments to create many RelatorioAltas.
     * @example
     * // Create many RelatorioAltas
     * const relatorioAlta = await prisma.relatorioAlta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatorioAltaCreateManyArgs>(args?: SelectSubset<T, RelatorioAltaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelatorioAltas and returns the data saved in the database.
     * @param {RelatorioAltaCreateManyAndReturnArgs} args - Arguments to create many RelatorioAltas.
     * @example
     * // Create many RelatorioAltas
     * const relatorioAlta = await prisma.relatorioAlta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelatorioAltas and only return the `id_Documento`
     * const relatorioAltaWithId_DocumentoOnly = await prisma.relatorioAlta.createManyAndReturn({
     *   select: { id_Documento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelatorioAltaCreateManyAndReturnArgs>(args?: SelectSubset<T, RelatorioAltaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RelatorioAlta.
     * @param {RelatorioAltaDeleteArgs} args - Arguments to delete one RelatorioAlta.
     * @example
     * // Delete one RelatorioAlta
     * const RelatorioAlta = await prisma.relatorioAlta.delete({
     *   where: {
     *     // ... filter to delete one RelatorioAlta
     *   }
     * })
     * 
     */
    delete<T extends RelatorioAltaDeleteArgs>(args: SelectSubset<T, RelatorioAltaDeleteArgs<ExtArgs>>): Prisma__RelatorioAltaClient<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RelatorioAlta.
     * @param {RelatorioAltaUpdateArgs} args - Arguments to update one RelatorioAlta.
     * @example
     * // Update one RelatorioAlta
     * const relatorioAlta = await prisma.relatorioAlta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatorioAltaUpdateArgs>(args: SelectSubset<T, RelatorioAltaUpdateArgs<ExtArgs>>): Prisma__RelatorioAltaClient<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RelatorioAltas.
     * @param {RelatorioAltaDeleteManyArgs} args - Arguments to filter RelatorioAltas to delete.
     * @example
     * // Delete a few RelatorioAltas
     * const { count } = await prisma.relatorioAlta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatorioAltaDeleteManyArgs>(args?: SelectSubset<T, RelatorioAltaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatorioAltas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAltaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelatorioAltas
     * const relatorioAlta = await prisma.relatorioAlta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatorioAltaUpdateManyArgs>(args: SelectSubset<T, RelatorioAltaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatorioAltas and returns the data updated in the database.
     * @param {RelatorioAltaUpdateManyAndReturnArgs} args - Arguments to update many RelatorioAltas.
     * @example
     * // Update many RelatorioAltas
     * const relatorioAlta = await prisma.relatorioAlta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RelatorioAltas and only return the `id_Documento`
     * const relatorioAltaWithId_DocumentoOnly = await prisma.relatorioAlta.updateManyAndReturn({
     *   select: { id_Documento: true },
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
    updateManyAndReturn<T extends RelatorioAltaUpdateManyAndReturnArgs>(args: SelectSubset<T, RelatorioAltaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RelatorioAlta.
     * @param {RelatorioAltaUpsertArgs} args - Arguments to update or create a RelatorioAlta.
     * @example
     * // Update or create a RelatorioAlta
     * const relatorioAlta = await prisma.relatorioAlta.upsert({
     *   create: {
     *     // ... data to create a RelatorioAlta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelatorioAlta we want to update
     *   }
     * })
     */
    upsert<T extends RelatorioAltaUpsertArgs>(args: SelectSubset<T, RelatorioAltaUpsertArgs<ExtArgs>>): Prisma__RelatorioAltaClient<$Result.GetResult<Prisma.$RelatorioAltaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RelatorioAltas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAltaCountArgs} args - Arguments to filter RelatorioAltas to count.
     * @example
     * // Count the number of RelatorioAltas
     * const count = await prisma.relatorioAlta.count({
     *   where: {
     *     // ... the filter for the RelatorioAltas we want to count
     *   }
     * })
    **/
    count<T extends RelatorioAltaCountArgs>(
      args?: Subset<T, RelatorioAltaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatorioAltaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelatorioAlta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAltaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelatorioAltaAggregateArgs>(args: Subset<T, RelatorioAltaAggregateArgs>): Prisma.PrismaPromise<GetRelatorioAltaAggregateType<T>>

    /**
     * Group by RelatorioAlta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioAltaGroupByArgs} args - Group by arguments.
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
      T extends RelatorioAltaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatorioAltaGroupByArgs['orderBy'] }
        : { orderBy?: RelatorioAltaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelatorioAltaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatorioAltaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelatorioAlta model
   */
  readonly fields: RelatorioAltaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelatorioAlta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatorioAltaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estagiario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RelatorioAlta model
   */
  interface RelatorioAltaFieldRefs {
    readonly id_Documento: FieldRef<"RelatorioAlta", 'String'>
    readonly id_Paciente: FieldRef<"RelatorioAlta", 'String'>
    readonly id_Estagiario: FieldRef<"RelatorioAlta", 'String'>
    readonly id_Supervisor: FieldRef<"RelatorioAlta", 'String'>
    readonly conteudo: FieldRef<"RelatorioAlta", 'String'>
    readonly dataEmissao: FieldRef<"RelatorioAlta", 'DateTime'>
    readonly status: FieldRef<"RelatorioAlta", 'StatusRelatorioEnum'>
  }
    

  // Custom InputTypes
  /**
   * RelatorioAlta findUnique
   */
  export type RelatorioAltaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioAlta to fetch.
     */
    where: RelatorioAltaWhereUniqueInput
  }

  /**
   * RelatorioAlta findUniqueOrThrow
   */
  export type RelatorioAltaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioAlta to fetch.
     */
    where: RelatorioAltaWhereUniqueInput
  }

  /**
   * RelatorioAlta findFirst
   */
  export type RelatorioAltaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioAlta to fetch.
     */
    where?: RelatorioAltaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioAltas to fetch.
     */
    orderBy?: RelatorioAltaOrderByWithRelationInput | RelatorioAltaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatorioAltas.
     */
    cursor?: RelatorioAltaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioAltas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioAltas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatorioAltas.
     */
    distinct?: RelatorioAltaScalarFieldEnum | RelatorioAltaScalarFieldEnum[]
  }

  /**
   * RelatorioAlta findFirstOrThrow
   */
  export type RelatorioAltaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioAlta to fetch.
     */
    where?: RelatorioAltaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioAltas to fetch.
     */
    orderBy?: RelatorioAltaOrderByWithRelationInput | RelatorioAltaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatorioAltas.
     */
    cursor?: RelatorioAltaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioAltas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioAltas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatorioAltas.
     */
    distinct?: RelatorioAltaScalarFieldEnum | RelatorioAltaScalarFieldEnum[]
  }

  /**
   * RelatorioAlta findMany
   */
  export type RelatorioAltaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * Filter, which RelatorioAltas to fetch.
     */
    where?: RelatorioAltaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioAltas to fetch.
     */
    orderBy?: RelatorioAltaOrderByWithRelationInput | RelatorioAltaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelatorioAltas.
     */
    cursor?: RelatorioAltaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioAltas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioAltas.
     */
    skip?: number
    distinct?: RelatorioAltaScalarFieldEnum | RelatorioAltaScalarFieldEnum[]
  }

  /**
   * RelatorioAlta create
   */
  export type RelatorioAltaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * The data needed to create a RelatorioAlta.
     */
    data: XOR<RelatorioAltaCreateInput, RelatorioAltaUncheckedCreateInput>
  }

  /**
   * RelatorioAlta createMany
   */
  export type RelatorioAltaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelatorioAltas.
     */
    data: RelatorioAltaCreateManyInput | RelatorioAltaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelatorioAlta createManyAndReturn
   */
  export type RelatorioAltaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * The data used to create many RelatorioAltas.
     */
    data: RelatorioAltaCreateManyInput | RelatorioAltaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatorioAlta update
   */
  export type RelatorioAltaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * The data needed to update a RelatorioAlta.
     */
    data: XOR<RelatorioAltaUpdateInput, RelatorioAltaUncheckedUpdateInput>
    /**
     * Choose, which RelatorioAlta to update.
     */
    where: RelatorioAltaWhereUniqueInput
  }

  /**
   * RelatorioAlta updateMany
   */
  export type RelatorioAltaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelatorioAltas.
     */
    data: XOR<RelatorioAltaUpdateManyMutationInput, RelatorioAltaUncheckedUpdateManyInput>
    /**
     * Filter which RelatorioAltas to update
     */
    where?: RelatorioAltaWhereInput
    /**
     * Limit how many RelatorioAltas to update.
     */
    limit?: number
  }

  /**
   * RelatorioAlta updateManyAndReturn
   */
  export type RelatorioAltaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * The data used to update RelatorioAltas.
     */
    data: XOR<RelatorioAltaUpdateManyMutationInput, RelatorioAltaUncheckedUpdateManyInput>
    /**
     * Filter which RelatorioAltas to update
     */
    where?: RelatorioAltaWhereInput
    /**
     * Limit how many RelatorioAltas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RelatorioAlta upsert
   */
  export type RelatorioAltaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * The filter to search for the RelatorioAlta to update in case it exists.
     */
    where: RelatorioAltaWhereUniqueInput
    /**
     * In case the RelatorioAlta found by the `where` argument doesn't exist, create a new RelatorioAlta with this data.
     */
    create: XOR<RelatorioAltaCreateInput, RelatorioAltaUncheckedCreateInput>
    /**
     * In case the RelatorioAlta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatorioAltaUpdateInput, RelatorioAltaUncheckedUpdateInput>
  }

  /**
   * RelatorioAlta delete
   */
  export type RelatorioAltaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
    /**
     * Filter which RelatorioAlta to delete.
     */
    where: RelatorioAltaWhereUniqueInput
  }

  /**
   * RelatorioAlta deleteMany
   */
  export type RelatorioAltaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatorioAltas to delete
     */
    where?: RelatorioAltaWhereInput
    /**
     * Limit how many RelatorioAltas to delete.
     */
    limit?: number
  }

  /**
   * RelatorioAlta without action
   */
  export type RelatorioAltaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioAlta
     */
    select?: RelatorioAltaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RelatorioAlta
     */
    omit?: RelatorioAltaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelatorioAltaInclude<ExtArgs> | null
  }


  /**
   * Model LogAuditoria
   */

  export type AggregateLogAuditoria = {
    _count: LogAuditoriaCountAggregateOutputType | null
    _min: LogAuditoriaMinAggregateOutputType | null
    _max: LogAuditoriaMaxAggregateOutputType | null
  }

  export type LogAuditoriaMinAggregateOutputType = {
    id_Log: string | null
    id_Usuario_Executor: string | null
    id_Paciente: string | null
    tipoAcao: $Enums.TipoAcaoEnum | null
    acessoEm: Date | null
    detalhes: string | null
  }

  export type LogAuditoriaMaxAggregateOutputType = {
    id_Log: string | null
    id_Usuario_Executor: string | null
    id_Paciente: string | null
    tipoAcao: $Enums.TipoAcaoEnum | null
    acessoEm: Date | null
    detalhes: string | null
  }

  export type LogAuditoriaCountAggregateOutputType = {
    id_Log: number
    id_Usuario_Executor: number
    id_Paciente: number
    tipoAcao: number
    acessoEm: number
    detalhes: number
    _all: number
  }


  export type LogAuditoriaMinAggregateInputType = {
    id_Log?: true
    id_Usuario_Executor?: true
    id_Paciente?: true
    tipoAcao?: true
    acessoEm?: true
    detalhes?: true
  }

  export type LogAuditoriaMaxAggregateInputType = {
    id_Log?: true
    id_Usuario_Executor?: true
    id_Paciente?: true
    tipoAcao?: true
    acessoEm?: true
    detalhes?: true
  }

  export type LogAuditoriaCountAggregateInputType = {
    id_Log?: true
    id_Usuario_Executor?: true
    id_Paciente?: true
    tipoAcao?: true
    acessoEm?: true
    detalhes?: true
    _all?: true
  }

  export type LogAuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAuditoria to aggregate.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAuditorias
    **/
    _count?: true | LogAuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAuditoriaMaxAggregateInputType
  }

  export type GetLogAuditoriaAggregateType<T extends LogAuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAuditoria[P]>
      : GetScalarType<T[P], AggregateLogAuditoria[P]>
  }




  export type LogAuditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAuditoriaWhereInput
    orderBy?: LogAuditoriaOrderByWithAggregationInput | LogAuditoriaOrderByWithAggregationInput[]
    by: LogAuditoriaScalarFieldEnum[] | LogAuditoriaScalarFieldEnum
    having?: LogAuditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAuditoriaCountAggregateInputType | true
    _min?: LogAuditoriaMinAggregateInputType
    _max?: LogAuditoriaMaxAggregateInputType
  }

  export type LogAuditoriaGroupByOutputType = {
    id_Log: string
    id_Usuario_Executor: string
    id_Paciente: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm: Date
    detalhes: string
    _count: LogAuditoriaCountAggregateOutputType | null
    _min: LogAuditoriaMinAggregateOutputType | null
    _max: LogAuditoriaMaxAggregateOutputType | null
  }

  type GetLogAuditoriaGroupByPayload<T extends LogAuditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], LogAuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type LogAuditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Log?: boolean
    id_Usuario_Executor?: boolean
    id_Paciente?: boolean
    tipoAcao?: boolean
    acessoEm?: boolean
    detalhes?: boolean
    usuarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAuditoria"]>

  export type LogAuditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Log?: boolean
    id_Usuario_Executor?: boolean
    id_Paciente?: boolean
    tipoAcao?: boolean
    acessoEm?: boolean
    detalhes?: boolean
    usuarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAuditoria"]>

  export type LogAuditoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Log?: boolean
    id_Usuario_Executor?: boolean
    id_Paciente?: boolean
    tipoAcao?: boolean
    acessoEm?: boolean
    detalhes?: boolean
    usuarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAuditoria"]>

  export type LogAuditoriaSelectScalar = {
    id_Log?: boolean
    id_Usuario_Executor?: boolean
    id_Paciente?: boolean
    tipoAcao?: boolean
    acessoEm?: boolean
    detalhes?: boolean
  }

  export type LogAuditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Log" | "id_Usuario_Executor" | "id_Paciente" | "tipoAcao" | "acessoEm" | "detalhes", ExtArgs["result"]["logAuditoria"]>
  export type LogAuditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type LogAuditoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type LogAuditoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $LogAuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAuditoria"
    objects: {
      usuarioExecutor: Prisma.$UsuarioPayload<ExtArgs>
      paciente: Prisma.$PacientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Log: string
      id_Usuario_Executor: string
      id_Paciente: string
      tipoAcao: $Enums.TipoAcaoEnum
      acessoEm: Date
      detalhes: string
    }, ExtArgs["result"]["logAuditoria"]>
    composites: {}
  }

  type LogAuditoriaGetPayload<S extends boolean | null | undefined | LogAuditoriaDefaultArgs> = $Result.GetResult<Prisma.$LogAuditoriaPayload, S>

  type LogAuditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogAuditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogAuditoriaCountAggregateInputType | true
    }

  export interface LogAuditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAuditoria'], meta: { name: 'LogAuditoria' } }
    /**
     * Find zero or one LogAuditoria that matches the filter.
     * @param {LogAuditoriaFindUniqueArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAuditoriaFindUniqueArgs>(args: SelectSubset<T, LogAuditoriaFindUniqueArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogAuditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogAuditoriaFindUniqueOrThrowArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAuditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, LogAuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAuditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindFirstArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAuditoriaFindFirstArgs>(args?: SelectSubset<T, LogAuditoriaFindFirstArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAuditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindFirstOrThrowArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAuditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, LogAuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogAuditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAuditorias
     * const logAuditorias = await prisma.logAuditoria.findMany()
     * 
     * // Get first 10 LogAuditorias
     * const logAuditorias = await prisma.logAuditoria.findMany({ take: 10 })
     * 
     * // Only select the `id_Log`
     * const logAuditoriaWithId_LogOnly = await prisma.logAuditoria.findMany({ select: { id_Log: true } })
     * 
     */
    findMany<T extends LogAuditoriaFindManyArgs>(args?: SelectSubset<T, LogAuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogAuditoria.
     * @param {LogAuditoriaCreateArgs} args - Arguments to create a LogAuditoria.
     * @example
     * // Create one LogAuditoria
     * const LogAuditoria = await prisma.logAuditoria.create({
     *   data: {
     *     // ... data to create a LogAuditoria
     *   }
     * })
     * 
     */
    create<T extends LogAuditoriaCreateArgs>(args: SelectSubset<T, LogAuditoriaCreateArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogAuditorias.
     * @param {LogAuditoriaCreateManyArgs} args - Arguments to create many LogAuditorias.
     * @example
     * // Create many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogAuditoriaCreateManyArgs>(args?: SelectSubset<T, LogAuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogAuditorias and returns the data saved in the database.
     * @param {LogAuditoriaCreateManyAndReturnArgs} args - Arguments to create many LogAuditorias.
     * @example
     * // Create many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogAuditorias and only return the `id_Log`
     * const logAuditoriaWithId_LogOnly = await prisma.logAuditoria.createManyAndReturn({
     *   select: { id_Log: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogAuditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, LogAuditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogAuditoria.
     * @param {LogAuditoriaDeleteArgs} args - Arguments to delete one LogAuditoria.
     * @example
     * // Delete one LogAuditoria
     * const LogAuditoria = await prisma.logAuditoria.delete({
     *   where: {
     *     // ... filter to delete one LogAuditoria
     *   }
     * })
     * 
     */
    delete<T extends LogAuditoriaDeleteArgs>(args: SelectSubset<T, LogAuditoriaDeleteArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogAuditoria.
     * @param {LogAuditoriaUpdateArgs} args - Arguments to update one LogAuditoria.
     * @example
     * // Update one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogAuditoriaUpdateArgs>(args: SelectSubset<T, LogAuditoriaUpdateArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogAuditorias.
     * @param {LogAuditoriaDeleteManyArgs} args - Arguments to filter LogAuditorias to delete.
     * @example
     * // Delete a few LogAuditorias
     * const { count } = await prisma.logAuditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogAuditoriaDeleteManyArgs>(args?: SelectSubset<T, LogAuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAuditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogAuditoriaUpdateManyArgs>(args: SelectSubset<T, LogAuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAuditorias and returns the data updated in the database.
     * @param {LogAuditoriaUpdateManyAndReturnArgs} args - Arguments to update many LogAuditorias.
     * @example
     * // Update many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogAuditorias and only return the `id_Log`
     * const logAuditoriaWithId_LogOnly = await prisma.logAuditoria.updateManyAndReturn({
     *   select: { id_Log: true },
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
    updateManyAndReturn<T extends LogAuditoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, LogAuditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogAuditoria.
     * @param {LogAuditoriaUpsertArgs} args - Arguments to update or create a LogAuditoria.
     * @example
     * // Update or create a LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.upsert({
     *   create: {
     *     // ... data to create a LogAuditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAuditoria we want to update
     *   }
     * })
     */
    upsert<T extends LogAuditoriaUpsertArgs>(args: SelectSubset<T, LogAuditoriaUpsertArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogAuditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaCountArgs} args - Arguments to filter LogAuditorias to count.
     * @example
     * // Count the number of LogAuditorias
     * const count = await prisma.logAuditoria.count({
     *   where: {
     *     // ... the filter for the LogAuditorias we want to count
     *   }
     * })
    **/
    count<T extends LogAuditoriaCountArgs>(
      args?: Subset<T, LogAuditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAuditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAuditoriaAggregateArgs>(args: Subset<T, LogAuditoriaAggregateArgs>): Prisma.PrismaPromise<GetLogAuditoriaAggregateType<T>>

    /**
     * Group by LogAuditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaGroupByArgs} args - Group by arguments.
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
      T extends LogAuditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAuditoriaGroupByArgs['orderBy'] }
        : { orderBy?: LogAuditoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogAuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAuditoria model
   */
  readonly fields: LogAuditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAuditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAuditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarioExecutor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LogAuditoria model
   */
  interface LogAuditoriaFieldRefs {
    readonly id_Log: FieldRef<"LogAuditoria", 'String'>
    readonly id_Usuario_Executor: FieldRef<"LogAuditoria", 'String'>
    readonly id_Paciente: FieldRef<"LogAuditoria", 'String'>
    readonly tipoAcao: FieldRef<"LogAuditoria", 'TipoAcaoEnum'>
    readonly acessoEm: FieldRef<"LogAuditoria", 'DateTime'>
    readonly detalhes: FieldRef<"LogAuditoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LogAuditoria findUnique
   */
  export type LogAuditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria findUniqueOrThrow
   */
  export type LogAuditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria findFirst
   */
  export type LogAuditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAuditorias.
     */
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria findFirstOrThrow
   */
  export type LogAuditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAuditorias.
     */
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria findMany
   */
  export type LogAuditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditorias to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria create
   */
  export type LogAuditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a LogAuditoria.
     */
    data: XOR<LogAuditoriaCreateInput, LogAuditoriaUncheckedCreateInput>
  }

  /**
   * LogAuditoria createMany
   */
  export type LogAuditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAuditorias.
     */
    data: LogAuditoriaCreateManyInput | LogAuditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogAuditoria createManyAndReturn
   */
  export type LogAuditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * The data used to create many LogAuditorias.
     */
    data: LogAuditoriaCreateManyInput | LogAuditoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAuditoria update
   */
  export type LogAuditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a LogAuditoria.
     */
    data: XOR<LogAuditoriaUpdateInput, LogAuditoriaUncheckedUpdateInput>
    /**
     * Choose, which LogAuditoria to update.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria updateMany
   */
  export type LogAuditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAuditorias.
     */
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which LogAuditorias to update
     */
    where?: LogAuditoriaWhereInput
    /**
     * Limit how many LogAuditorias to update.
     */
    limit?: number
  }

  /**
   * LogAuditoria updateManyAndReturn
   */
  export type LogAuditoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * The data used to update LogAuditorias.
     */
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which LogAuditorias to update
     */
    where?: LogAuditoriaWhereInput
    /**
     * Limit how many LogAuditorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAuditoria upsert
   */
  export type LogAuditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the LogAuditoria to update in case it exists.
     */
    where: LogAuditoriaWhereUniqueInput
    /**
     * In case the LogAuditoria found by the `where` argument doesn't exist, create a new LogAuditoria with this data.
     */
    create: XOR<LogAuditoriaCreateInput, LogAuditoriaUncheckedCreateInput>
    /**
     * In case the LogAuditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAuditoriaUpdateInput, LogAuditoriaUncheckedUpdateInput>
  }

  /**
   * LogAuditoria delete
   */
  export type LogAuditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter which LogAuditoria to delete.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria deleteMany
   */
  export type LogAuditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAuditorias to delete
     */
    where?: LogAuditoriaWhereInput
    /**
     * Limit how many LogAuditorias to delete.
     */
    limit?: number
  }

  /**
   * LogAuditoria without action
   */
  export type LogAuditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
  }


  /**
   * Model Atendimento
   */

  export type AggregateAtendimento = {
    _count: AtendimentoCountAggregateOutputType | null
    _avg: AtendimentoAvgAggregateOutputType | null
    _sum: AtendimentoSumAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  export type AtendimentoAvgAggregateOutputType = {
    id_Status: number | null
  }

  export type AtendimentoSumAggregateOutputType = {
    id_Status: number | null
  }

  export type AtendimentoMinAggregateOutputType = {
    id_Atendimento: string | null
    dataHoraInicio: Date | null
    dataHoraFim: Date | null
    id_Paciente: string | null
    id_Estagiario_Executor: string | null
    id_Supervisor_Executor: string | null
    id_Status: number | null
    observacoes: string | null
  }

  export type AtendimentoMaxAggregateOutputType = {
    id_Atendimento: string | null
    dataHoraInicio: Date | null
    dataHoraFim: Date | null
    id_Paciente: string | null
    id_Estagiario_Executor: string | null
    id_Supervisor_Executor: string | null
    id_Status: number | null
    observacoes: string | null
  }

  export type AtendimentoCountAggregateOutputType = {
    id_Atendimento: number
    dataHoraInicio: number
    dataHoraFim: number
    id_Paciente: number
    id_Estagiario_Executor: number
    id_Supervisor_Executor: number
    id_Status: number
    observacoes: number
    _all: number
  }


  export type AtendimentoAvgAggregateInputType = {
    id_Status?: true
  }

  export type AtendimentoSumAggregateInputType = {
    id_Status?: true
  }

  export type AtendimentoMinAggregateInputType = {
    id_Atendimento?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    id_Paciente?: true
    id_Estagiario_Executor?: true
    id_Supervisor_Executor?: true
    id_Status?: true
    observacoes?: true
  }

  export type AtendimentoMaxAggregateInputType = {
    id_Atendimento?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    id_Paciente?: true
    id_Estagiario_Executor?: true
    id_Supervisor_Executor?: true
    id_Status?: true
    observacoes?: true
  }

  export type AtendimentoCountAggregateInputType = {
    id_Atendimento?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    id_Paciente?: true
    id_Estagiario_Executor?: true
    id_Supervisor_Executor?: true
    id_Status?: true
    observacoes?: true
    _all?: true
  }

  export type AtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimento to aggregate.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atendimentos
    **/
    _count?: true | AtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtendimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtendimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtendimentoMaxAggregateInputType
  }

  export type GetAtendimentoAggregateType<T extends AtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtendimento[P]>
      : GetScalarType<T[P], AggregateAtendimento[P]>
  }




  export type AtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithAggregationInput | AtendimentoOrderByWithAggregationInput[]
    by: AtendimentoScalarFieldEnum[] | AtendimentoScalarFieldEnum
    having?: AtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtendimentoCountAggregateInputType | true
    _avg?: AtendimentoAvgAggregateInputType
    _sum?: AtendimentoSumAggregateInputType
    _min?: AtendimentoMinAggregateInputType
    _max?: AtendimentoMaxAggregateInputType
  }

  export type AtendimentoGroupByOutputType = {
    id_Atendimento: string
    dataHoraInicio: Date
    dataHoraFim: Date
    id_Paciente: string
    id_Estagiario_Executor: string
    id_Supervisor_Executor: string
    id_Status: number
    observacoes: string
    _count: AtendimentoCountAggregateOutputType | null
    _avg: AtendimentoAvgAggregateOutputType | null
    _sum: AtendimentoSumAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  type GetAtendimentoGroupByPayload<T extends AtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type AtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Atendimento?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    id_Paciente?: boolean
    id_Estagiario_Executor?: boolean
    id_Supervisor_Executor?: boolean
    id_Status?: boolean
    observacoes?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    status?: boolean | StatusAtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Atendimento?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    id_Paciente?: boolean
    id_Estagiario_Executor?: boolean
    id_Supervisor_Executor?: boolean
    id_Status?: boolean
    observacoes?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    status?: boolean | StatusAtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Atendimento?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    id_Paciente?: boolean
    id_Estagiario_Executor?: boolean
    id_Supervisor_Executor?: boolean
    id_Status?: boolean
    observacoes?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    status?: boolean | StatusAtendimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectScalar = {
    id_Atendimento?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    id_Paciente?: boolean
    id_Estagiario_Executor?: boolean
    id_Supervisor_Executor?: boolean
    id_Status?: boolean
    observacoes?: boolean
  }

  export type AtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Atendimento" | "dataHoraInicio" | "dataHoraFim" | "id_Paciente" | "id_Estagiario_Executor" | "id_Supervisor_Executor" | "id_Status" | "observacoes", ExtArgs["result"]["atendimento"]>
  export type AtendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    status?: boolean | StatusAtendimentoDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    status?: boolean | StatusAtendimentoDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    estagiarioExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    supervisorExecutor?: boolean | UsuarioDefaultArgs<ExtArgs>
    status?: boolean | StatusAtendimentoDefaultArgs<ExtArgs>
  }

  export type $AtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atendimento"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      estagiarioExecutor: Prisma.$UsuarioPayload<ExtArgs>
      supervisorExecutor: Prisma.$UsuarioPayload<ExtArgs>
      status: Prisma.$StatusAtendimentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Atendimento: string
      dataHoraInicio: Date
      dataHoraFim: Date
      id_Paciente: string
      id_Estagiario_Executor: string
      id_Supervisor_Executor: string
      id_Status: number
      observacoes: string
    }, ExtArgs["result"]["atendimento"]>
    composites: {}
  }

  type AtendimentoGetPayload<S extends boolean | null | undefined | AtendimentoDefaultArgs> = $Result.GetResult<Prisma.$AtendimentoPayload, S>

  type AtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtendimentoCountAggregateInputType | true
    }

  export interface AtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atendimento'], meta: { name: 'Atendimento' } }
    /**
     * Find zero or one Atendimento that matches the filter.
     * @param {AtendimentoFindUniqueArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtendimentoFindUniqueArgs>(args: SelectSubset<T, AtendimentoFindUniqueArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtendimentoFindUniqueOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtendimentoFindFirstArgs>(args?: SelectSubset<T, AtendimentoFindFirstArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atendimentos
     * const atendimentos = await prisma.atendimento.findMany()
     * 
     * // Get first 10 Atendimentos
     * const atendimentos = await prisma.atendimento.findMany({ take: 10 })
     * 
     * // Only select the `id_Atendimento`
     * const atendimentoWithId_AtendimentoOnly = await prisma.atendimento.findMany({ select: { id_Atendimento: true } })
     * 
     */
    findMany<T extends AtendimentoFindManyArgs>(args?: SelectSubset<T, AtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atendimento.
     * @param {AtendimentoCreateArgs} args - Arguments to create a Atendimento.
     * @example
     * // Create one Atendimento
     * const Atendimento = await prisma.atendimento.create({
     *   data: {
     *     // ... data to create a Atendimento
     *   }
     * })
     * 
     */
    create<T extends AtendimentoCreateArgs>(args: SelectSubset<T, AtendimentoCreateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atendimentos.
     * @param {AtendimentoCreateManyArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtendimentoCreateManyArgs>(args?: SelectSubset<T, AtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atendimentos and returns the data saved in the database.
     * @param {AtendimentoCreateManyAndReturnArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atendimentos and only return the `id_Atendimento`
     * const atendimentoWithId_AtendimentoOnly = await prisma.atendimento.createManyAndReturn({
     *   select: { id_Atendimento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atendimento.
     * @param {AtendimentoDeleteArgs} args - Arguments to delete one Atendimento.
     * @example
     * // Delete one Atendimento
     * const Atendimento = await prisma.atendimento.delete({
     *   where: {
     *     // ... filter to delete one Atendimento
     *   }
     * })
     * 
     */
    delete<T extends AtendimentoDeleteArgs>(args: SelectSubset<T, AtendimentoDeleteArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atendimento.
     * @param {AtendimentoUpdateArgs} args - Arguments to update one Atendimento.
     * @example
     * // Update one Atendimento
     * const atendimento = await prisma.atendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtendimentoUpdateArgs>(args: SelectSubset<T, AtendimentoUpdateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atendimentos.
     * @param {AtendimentoDeleteManyArgs} args - Arguments to filter Atendimentos to delete.
     * @example
     * // Delete a few Atendimentos
     * const { count } = await prisma.atendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtendimentoDeleteManyArgs>(args?: SelectSubset<T, AtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtendimentoUpdateManyArgs>(args: SelectSubset<T, AtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos and returns the data updated in the database.
     * @param {AtendimentoUpdateManyAndReturnArgs} args - Arguments to update many Atendimentos.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atendimentos and only return the `id_Atendimento`
     * const atendimentoWithId_AtendimentoOnly = await prisma.atendimento.updateManyAndReturn({
     *   select: { id_Atendimento: true },
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
    updateManyAndReturn<T extends AtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atendimento.
     * @param {AtendimentoUpsertArgs} args - Arguments to update or create a Atendimento.
     * @example
     * // Update or create a Atendimento
     * const atendimento = await prisma.atendimento.upsert({
     *   create: {
     *     // ... data to create a Atendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atendimento we want to update
     *   }
     * })
     */
    upsert<T extends AtendimentoUpsertArgs>(args: SelectSubset<T, AtendimentoUpsertArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoCountArgs} args - Arguments to filter Atendimentos to count.
     * @example
     * // Count the number of Atendimentos
     * const count = await prisma.atendimento.count({
     *   where: {
     *     // ... the filter for the Atendimentos we want to count
     *   }
     * })
    **/
    count<T extends AtendimentoCountArgs>(
      args?: Subset<T, AtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtendimentoAggregateArgs>(args: Subset<T, AtendimentoAggregateArgs>): Prisma.PrismaPromise<GetAtendimentoAggregateType<T>>

    /**
     * Group by Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoGroupByArgs} args - Group by arguments.
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
      T extends AtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: AtendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atendimento model
   */
  readonly fields: AtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estagiarioExecutor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supervisorExecutor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends StatusAtendimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusAtendimentoDefaultArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atendimento model
   */
  interface AtendimentoFieldRefs {
    readonly id_Atendimento: FieldRef<"Atendimento", 'String'>
    readonly dataHoraInicio: FieldRef<"Atendimento", 'DateTime'>
    readonly dataHoraFim: FieldRef<"Atendimento", 'DateTime'>
    readonly id_Paciente: FieldRef<"Atendimento", 'String'>
    readonly id_Estagiario_Executor: FieldRef<"Atendimento", 'String'>
    readonly id_Supervisor_Executor: FieldRef<"Atendimento", 'String'>
    readonly id_Status: FieldRef<"Atendimento", 'Int'>
    readonly observacoes: FieldRef<"Atendimento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Atendimento findUnique
   */
  export type AtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findUniqueOrThrow
   */
  export type AtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findFirst
   */
  export type AtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findFirstOrThrow
   */
  export type AtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findMany
   */
  export type AtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimentos to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento create
   */
  export type AtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Atendimento.
     */
    data: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
  }

  /**
   * Atendimento createMany
   */
  export type AtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atendimento createManyAndReturn
   */
  export type AtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento update
   */
  export type AtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Atendimento.
     */
    data: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
    /**
     * Choose, which Atendimento to update.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento updateMany
   */
  export type AtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
  }

  /**
   * Atendimento updateManyAndReturn
   */
  export type AtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento upsert
   */
  export type AtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Atendimento to update in case it exists.
     */
    where: AtendimentoWhereUniqueInput
    /**
     * In case the Atendimento found by the `where` argument doesn't exist, create a new Atendimento with this data.
     */
    create: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
    /**
     * In case the Atendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
  }

  /**
   * Atendimento delete
   */
  export type AtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter which Atendimento to delete.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento deleteMany
   */
  export type AtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimentos to delete
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to delete.
     */
    limit?: number
  }

  /**
   * Atendimento without action
   */
  export type AtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
  }


  /**
   * Model ListaEspera
   */

  export type AggregateListaEspera = {
    _count: ListaEsperaCountAggregateOutputType | null
    _avg: ListaEsperaAvgAggregateOutputType | null
    _sum: ListaEsperaSumAggregateOutputType | null
    _min: ListaEsperaMinAggregateOutputType | null
    _max: ListaEsperaMaxAggregateOutputType | null
  }

  export type ListaEsperaAvgAggregateOutputType = {
    id_Genero: number | null
    id_CorPele: number | null
    id_Escolaridade: number | null
  }

  export type ListaEsperaSumAggregateOutputType = {
    id_Genero: number | null
    id_CorPele: number | null
    id_Escolaridade: number | null
  }

  export type ListaEsperaMinAggregateOutputType = {
    id_Lista: string | null
    nomeRegistro: string | null
    nomeSocial: string | null
    dataNascimento: Date | null
    telefonePessoal: string | null
    contatoEmergencia: string | null
    enderecoRua: string | null
    enderecoNumero: string | null
    enderecoBairro: string | null
    enderecoCidade: string | null
    enderecoEstado: string | null
    enderecoCEP: string | null
    createdAt: Date | null
    id_Genero: number | null
    id_CorPele: number | null
    id_Escolaridade: number | null
  }

  export type ListaEsperaMaxAggregateOutputType = {
    id_Lista: string | null
    nomeRegistro: string | null
    nomeSocial: string | null
    dataNascimento: Date | null
    telefonePessoal: string | null
    contatoEmergencia: string | null
    enderecoRua: string | null
    enderecoNumero: string | null
    enderecoBairro: string | null
    enderecoCidade: string | null
    enderecoEstado: string | null
    enderecoCEP: string | null
    createdAt: Date | null
    id_Genero: number | null
    id_CorPele: number | null
    id_Escolaridade: number | null
  }

  export type ListaEsperaCountAggregateOutputType = {
    id_Lista: number
    nomeRegistro: number
    nomeSocial: number
    dataNascimento: number
    telefonePessoal: number
    contatoEmergencia: number
    enderecoRua: number
    enderecoNumero: number
    enderecoBairro: number
    enderecoCidade: number
    enderecoEstado: number
    enderecoCEP: number
    createdAt: number
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    _all: number
  }


  export type ListaEsperaAvgAggregateInputType = {
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
  }

  export type ListaEsperaSumAggregateInputType = {
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
  }

  export type ListaEsperaMinAggregateInputType = {
    id_Lista?: true
    nomeRegistro?: true
    nomeSocial?: true
    dataNascimento?: true
    telefonePessoal?: true
    contatoEmergencia?: true
    enderecoRua?: true
    enderecoNumero?: true
    enderecoBairro?: true
    enderecoCidade?: true
    enderecoEstado?: true
    enderecoCEP?: true
    createdAt?: true
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
  }

  export type ListaEsperaMaxAggregateInputType = {
    id_Lista?: true
    nomeRegistro?: true
    nomeSocial?: true
    dataNascimento?: true
    telefonePessoal?: true
    contatoEmergencia?: true
    enderecoRua?: true
    enderecoNumero?: true
    enderecoBairro?: true
    enderecoCidade?: true
    enderecoEstado?: true
    enderecoCEP?: true
    createdAt?: true
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
  }

  export type ListaEsperaCountAggregateInputType = {
    id_Lista?: true
    nomeRegistro?: true
    nomeSocial?: true
    dataNascimento?: true
    telefonePessoal?: true
    contatoEmergencia?: true
    enderecoRua?: true
    enderecoNumero?: true
    enderecoBairro?: true
    enderecoCidade?: true
    enderecoEstado?: true
    enderecoCEP?: true
    createdAt?: true
    id_Genero?: true
    id_CorPele?: true
    id_Escolaridade?: true
    _all?: true
  }

  export type ListaEsperaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaEspera to aggregate.
     */
    where?: ListaEsperaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaEsperas to fetch.
     */
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaEsperaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaEsperas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaEsperas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaEsperas
    **/
    _count?: true | ListaEsperaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaEsperaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaEsperaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaEsperaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaEsperaMaxAggregateInputType
  }

  export type GetListaEsperaAggregateType<T extends ListaEsperaAggregateArgs> = {
        [P in keyof T & keyof AggregateListaEspera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaEspera[P]>
      : GetScalarType<T[P], AggregateListaEspera[P]>
  }




  export type ListaEsperaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaEsperaWhereInput
    orderBy?: ListaEsperaOrderByWithAggregationInput | ListaEsperaOrderByWithAggregationInput[]
    by: ListaEsperaScalarFieldEnum[] | ListaEsperaScalarFieldEnum
    having?: ListaEsperaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaEsperaCountAggregateInputType | true
    _avg?: ListaEsperaAvgAggregateInputType
    _sum?: ListaEsperaSumAggregateInputType
    _min?: ListaEsperaMinAggregateInputType
    _max?: ListaEsperaMaxAggregateInputType
  }

  export type ListaEsperaGroupByOutputType = {
    id_Lista: string
    nomeRegistro: string
    nomeSocial: string | null
    dataNascimento: Date
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt: Date
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    _count: ListaEsperaCountAggregateOutputType | null
    _avg: ListaEsperaAvgAggregateOutputType | null
    _sum: ListaEsperaSumAggregateOutputType | null
    _min: ListaEsperaMinAggregateOutputType | null
    _max: ListaEsperaMaxAggregateOutputType | null
  }

  type GetListaEsperaGroupByPayload<T extends ListaEsperaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaEsperaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaEsperaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaEsperaGroupByOutputType[P]>
            : GetScalarType<T[P], ListaEsperaGroupByOutputType[P]>
        }
      >
    >


  export type ListaEsperaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Lista?: boolean
    nomeRegistro?: boolean
    nomeSocial?: boolean
    dataNascimento?: boolean
    telefonePessoal?: boolean
    contatoEmergencia?: boolean
    enderecoRua?: boolean
    enderecoNumero?: boolean
    enderecoBairro?: boolean
    enderecoCidade?: boolean
    enderecoEstado?: boolean
    enderecoCEP?: boolean
    createdAt?: boolean
    id_Genero?: boolean
    id_CorPele?: boolean
    id_Escolaridade?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaEspera"]>

  export type ListaEsperaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Lista?: boolean
    nomeRegistro?: boolean
    nomeSocial?: boolean
    dataNascimento?: boolean
    telefonePessoal?: boolean
    contatoEmergencia?: boolean
    enderecoRua?: boolean
    enderecoNumero?: boolean
    enderecoBairro?: boolean
    enderecoCidade?: boolean
    enderecoEstado?: boolean
    enderecoCEP?: boolean
    createdAt?: boolean
    id_Genero?: boolean
    id_CorPele?: boolean
    id_Escolaridade?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaEspera"]>

  export type ListaEsperaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Lista?: boolean
    nomeRegistro?: boolean
    nomeSocial?: boolean
    dataNascimento?: boolean
    telefonePessoal?: boolean
    contatoEmergencia?: boolean
    enderecoRua?: boolean
    enderecoNumero?: boolean
    enderecoBairro?: boolean
    enderecoCidade?: boolean
    enderecoEstado?: boolean
    enderecoCEP?: boolean
    createdAt?: boolean
    id_Genero?: boolean
    id_CorPele?: boolean
    id_Escolaridade?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaEspera"]>

  export type ListaEsperaSelectScalar = {
    id_Lista?: boolean
    nomeRegistro?: boolean
    nomeSocial?: boolean
    dataNascimento?: boolean
    telefonePessoal?: boolean
    contatoEmergencia?: boolean
    enderecoRua?: boolean
    enderecoNumero?: boolean
    enderecoBairro?: boolean
    enderecoCidade?: boolean
    enderecoEstado?: boolean
    enderecoCEP?: boolean
    createdAt?: boolean
    id_Genero?: boolean
    id_CorPele?: boolean
    id_Escolaridade?: boolean
  }

  export type ListaEsperaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Lista" | "nomeRegistro" | "nomeSocial" | "dataNascimento" | "telefonePessoal" | "contatoEmergencia" | "enderecoRua" | "enderecoNumero" | "enderecoBairro" | "enderecoCidade" | "enderecoEstado" | "enderecoCEP" | "createdAt" | "id_Genero" | "id_CorPele" | "id_Escolaridade", ExtArgs["result"]["listaEspera"]>
  export type ListaEsperaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
  }
  export type ListaEsperaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
  }
  export type ListaEsperaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    corPele?: boolean | CorPeleDefaultArgs<ExtArgs>
    escolaridade?: boolean | EscolaridadeDefaultArgs<ExtArgs>
  }

  export type $ListaEsperaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaEspera"
    objects: {
      genero: Prisma.$GeneroPayload<ExtArgs>
      corPele: Prisma.$CorPelePayload<ExtArgs>
      escolaridade: Prisma.$EscolaridadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Lista: string
      nomeRegistro: string
      nomeSocial: string | null
      dataNascimento: Date
      telefonePessoal: string
      contatoEmergencia: string
      enderecoRua: string
      enderecoNumero: string
      enderecoBairro: string
      enderecoCidade: string
      enderecoEstado: string
      enderecoCEP: string
      createdAt: Date
      id_Genero: number
      id_CorPele: number
      id_Escolaridade: number
    }, ExtArgs["result"]["listaEspera"]>
    composites: {}
  }

  type ListaEsperaGetPayload<S extends boolean | null | undefined | ListaEsperaDefaultArgs> = $Result.GetResult<Prisma.$ListaEsperaPayload, S>

  type ListaEsperaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaEsperaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaEsperaCountAggregateInputType | true
    }

  export interface ListaEsperaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaEspera'], meta: { name: 'ListaEspera' } }
    /**
     * Find zero or one ListaEspera that matches the filter.
     * @param {ListaEsperaFindUniqueArgs} args - Arguments to find a ListaEspera
     * @example
     * // Get one ListaEspera
     * const listaEspera = await prisma.listaEspera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaEsperaFindUniqueArgs>(args: SelectSubset<T, ListaEsperaFindUniqueArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaEspera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaEsperaFindUniqueOrThrowArgs} args - Arguments to find a ListaEspera
     * @example
     * // Get one ListaEspera
     * const listaEspera = await prisma.listaEspera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaEsperaFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaEsperaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaEspera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaFindFirstArgs} args - Arguments to find a ListaEspera
     * @example
     * // Get one ListaEspera
     * const listaEspera = await prisma.listaEspera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaEsperaFindFirstArgs>(args?: SelectSubset<T, ListaEsperaFindFirstArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaEspera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaFindFirstOrThrowArgs} args - Arguments to find a ListaEspera
     * @example
     * // Get one ListaEspera
     * const listaEspera = await prisma.listaEspera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaEsperaFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaEsperaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaEsperas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaEsperas
     * const listaEsperas = await prisma.listaEspera.findMany()
     * 
     * // Get first 10 ListaEsperas
     * const listaEsperas = await prisma.listaEspera.findMany({ take: 10 })
     * 
     * // Only select the `id_Lista`
     * const listaEsperaWithId_ListaOnly = await prisma.listaEspera.findMany({ select: { id_Lista: true } })
     * 
     */
    findMany<T extends ListaEsperaFindManyArgs>(args?: SelectSubset<T, ListaEsperaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaEspera.
     * @param {ListaEsperaCreateArgs} args - Arguments to create a ListaEspera.
     * @example
     * // Create one ListaEspera
     * const ListaEspera = await prisma.listaEspera.create({
     *   data: {
     *     // ... data to create a ListaEspera
     *   }
     * })
     * 
     */
    create<T extends ListaEsperaCreateArgs>(args: SelectSubset<T, ListaEsperaCreateArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaEsperas.
     * @param {ListaEsperaCreateManyArgs} args - Arguments to create many ListaEsperas.
     * @example
     * // Create many ListaEsperas
     * const listaEspera = await prisma.listaEspera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaEsperaCreateManyArgs>(args?: SelectSubset<T, ListaEsperaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListaEsperas and returns the data saved in the database.
     * @param {ListaEsperaCreateManyAndReturnArgs} args - Arguments to create many ListaEsperas.
     * @example
     * // Create many ListaEsperas
     * const listaEspera = await prisma.listaEspera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListaEsperas and only return the `id_Lista`
     * const listaEsperaWithId_ListaOnly = await prisma.listaEspera.createManyAndReturn({
     *   select: { id_Lista: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListaEsperaCreateManyAndReturnArgs>(args?: SelectSubset<T, ListaEsperaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListaEspera.
     * @param {ListaEsperaDeleteArgs} args - Arguments to delete one ListaEspera.
     * @example
     * // Delete one ListaEspera
     * const ListaEspera = await prisma.listaEspera.delete({
     *   where: {
     *     // ... filter to delete one ListaEspera
     *   }
     * })
     * 
     */
    delete<T extends ListaEsperaDeleteArgs>(args: SelectSubset<T, ListaEsperaDeleteArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaEspera.
     * @param {ListaEsperaUpdateArgs} args - Arguments to update one ListaEspera.
     * @example
     * // Update one ListaEspera
     * const listaEspera = await prisma.listaEspera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaEsperaUpdateArgs>(args: SelectSubset<T, ListaEsperaUpdateArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaEsperas.
     * @param {ListaEsperaDeleteManyArgs} args - Arguments to filter ListaEsperas to delete.
     * @example
     * // Delete a few ListaEsperas
     * const { count } = await prisma.listaEspera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaEsperaDeleteManyArgs>(args?: SelectSubset<T, ListaEsperaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaEsperas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaEsperas
     * const listaEspera = await prisma.listaEspera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaEsperaUpdateManyArgs>(args: SelectSubset<T, ListaEsperaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaEsperas and returns the data updated in the database.
     * @param {ListaEsperaUpdateManyAndReturnArgs} args - Arguments to update many ListaEsperas.
     * @example
     * // Update many ListaEsperas
     * const listaEspera = await prisma.listaEspera.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListaEsperas and only return the `id_Lista`
     * const listaEsperaWithId_ListaOnly = await prisma.listaEspera.updateManyAndReturn({
     *   select: { id_Lista: true },
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
    updateManyAndReturn<T extends ListaEsperaUpdateManyAndReturnArgs>(args: SelectSubset<T, ListaEsperaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListaEspera.
     * @param {ListaEsperaUpsertArgs} args - Arguments to update or create a ListaEspera.
     * @example
     * // Update or create a ListaEspera
     * const listaEspera = await prisma.listaEspera.upsert({
     *   create: {
     *     // ... data to create a ListaEspera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaEspera we want to update
     *   }
     * })
     */
    upsert<T extends ListaEsperaUpsertArgs>(args: SelectSubset<T, ListaEsperaUpsertArgs<ExtArgs>>): Prisma__ListaEsperaClient<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaEsperas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaCountArgs} args - Arguments to filter ListaEsperas to count.
     * @example
     * // Count the number of ListaEsperas
     * const count = await prisma.listaEspera.count({
     *   where: {
     *     // ... the filter for the ListaEsperas we want to count
     *   }
     * })
    **/
    count<T extends ListaEsperaCountArgs>(
      args?: Subset<T, ListaEsperaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaEsperaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaEspera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListaEsperaAggregateArgs>(args: Subset<T, ListaEsperaAggregateArgs>): Prisma.PrismaPromise<GetListaEsperaAggregateType<T>>

    /**
     * Group by ListaEspera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaEsperaGroupByArgs} args - Group by arguments.
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
      T extends ListaEsperaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaEsperaGroupByArgs['orderBy'] }
        : { orderBy?: ListaEsperaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListaEsperaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaEsperaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaEspera model
   */
  readonly fields: ListaEsperaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaEspera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaEsperaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genero<T extends GeneroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneroDefaultArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    corPele<T extends CorPeleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CorPeleDefaultArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    escolaridade<T extends EscolaridadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EscolaridadeDefaultArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListaEspera model
   */
  interface ListaEsperaFieldRefs {
    readonly id_Lista: FieldRef<"ListaEspera", 'String'>
    readonly nomeRegistro: FieldRef<"ListaEspera", 'String'>
    readonly nomeSocial: FieldRef<"ListaEspera", 'String'>
    readonly dataNascimento: FieldRef<"ListaEspera", 'DateTime'>
    readonly telefonePessoal: FieldRef<"ListaEspera", 'String'>
    readonly contatoEmergencia: FieldRef<"ListaEspera", 'String'>
    readonly enderecoRua: FieldRef<"ListaEspera", 'String'>
    readonly enderecoNumero: FieldRef<"ListaEspera", 'String'>
    readonly enderecoBairro: FieldRef<"ListaEspera", 'String'>
    readonly enderecoCidade: FieldRef<"ListaEspera", 'String'>
    readonly enderecoEstado: FieldRef<"ListaEspera", 'String'>
    readonly enderecoCEP: FieldRef<"ListaEspera", 'String'>
    readonly createdAt: FieldRef<"ListaEspera", 'DateTime'>
    readonly id_Genero: FieldRef<"ListaEspera", 'Int'>
    readonly id_CorPele: FieldRef<"ListaEspera", 'Int'>
    readonly id_Escolaridade: FieldRef<"ListaEspera", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListaEspera findUnique
   */
  export type ListaEsperaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEspera to fetch.
     */
    where: ListaEsperaWhereUniqueInput
  }

  /**
   * ListaEspera findUniqueOrThrow
   */
  export type ListaEsperaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEspera to fetch.
     */
    where: ListaEsperaWhereUniqueInput
  }

  /**
   * ListaEspera findFirst
   */
  export type ListaEsperaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEspera to fetch.
     */
    where?: ListaEsperaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaEsperas to fetch.
     */
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaEsperas.
     */
    cursor?: ListaEsperaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaEsperas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaEsperas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaEsperas.
     */
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * ListaEspera findFirstOrThrow
   */
  export type ListaEsperaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEspera to fetch.
     */
    where?: ListaEsperaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaEsperas to fetch.
     */
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaEsperas.
     */
    cursor?: ListaEsperaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaEsperas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaEsperas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaEsperas.
     */
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * ListaEspera findMany
   */
  export type ListaEsperaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter, which ListaEsperas to fetch.
     */
    where?: ListaEsperaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaEsperas to fetch.
     */
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaEsperas.
     */
    cursor?: ListaEsperaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaEsperas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaEsperas.
     */
    skip?: number
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * ListaEspera create
   */
  export type ListaEsperaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaEspera.
     */
    data: XOR<ListaEsperaCreateInput, ListaEsperaUncheckedCreateInput>
  }

  /**
   * ListaEspera createMany
   */
  export type ListaEsperaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaEsperas.
     */
    data: ListaEsperaCreateManyInput | ListaEsperaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaEspera createManyAndReturn
   */
  export type ListaEsperaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * The data used to create many ListaEsperas.
     */
    data: ListaEsperaCreateManyInput | ListaEsperaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaEspera update
   */
  export type ListaEsperaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaEspera.
     */
    data: XOR<ListaEsperaUpdateInput, ListaEsperaUncheckedUpdateInput>
    /**
     * Choose, which ListaEspera to update.
     */
    where: ListaEsperaWhereUniqueInput
  }

  /**
   * ListaEspera updateMany
   */
  export type ListaEsperaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaEsperas.
     */
    data: XOR<ListaEsperaUpdateManyMutationInput, ListaEsperaUncheckedUpdateManyInput>
    /**
     * Filter which ListaEsperas to update
     */
    where?: ListaEsperaWhereInput
    /**
     * Limit how many ListaEsperas to update.
     */
    limit?: number
  }

  /**
   * ListaEspera updateManyAndReturn
   */
  export type ListaEsperaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * The data used to update ListaEsperas.
     */
    data: XOR<ListaEsperaUpdateManyMutationInput, ListaEsperaUncheckedUpdateManyInput>
    /**
     * Filter which ListaEsperas to update
     */
    where?: ListaEsperaWhereInput
    /**
     * Limit how many ListaEsperas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaEspera upsert
   */
  export type ListaEsperaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaEspera to update in case it exists.
     */
    where: ListaEsperaWhereUniqueInput
    /**
     * In case the ListaEspera found by the `where` argument doesn't exist, create a new ListaEspera with this data.
     */
    create: XOR<ListaEsperaCreateInput, ListaEsperaUncheckedCreateInput>
    /**
     * In case the ListaEspera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaEsperaUpdateInput, ListaEsperaUncheckedUpdateInput>
  }

  /**
   * ListaEspera delete
   */
  export type ListaEsperaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    /**
     * Filter which ListaEspera to delete.
     */
    where: ListaEsperaWhereUniqueInput
  }

  /**
   * ListaEspera deleteMany
   */
  export type ListaEsperaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaEsperas to delete
     */
    where?: ListaEsperaWhereInput
    /**
     * Limit how many ListaEsperas to delete.
     */
    limit?: number
  }

  /**
   * ListaEspera without action
   */
  export type ListaEsperaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
  }


  /**
   * Model Genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    id_Genero: number | null
  }

  export type GeneroSumAggregateOutputType = {
    id_Genero: number | null
  }

  export type GeneroMinAggregateOutputType = {
    id_Genero: number | null
    nome: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    id_Genero: number | null
    nome: string | null
  }

  export type GeneroCountAggregateOutputType = {
    id_Genero: number
    nome: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    id_Genero?: true
  }

  export type GeneroSumAggregateInputType = {
    id_Genero?: true
  }

  export type GeneroMinAggregateInputType = {
    id_Genero?: true
    nome?: true
  }

  export type GeneroMaxAggregateInputType = {
    id_Genero?: true
    nome?: true
  }

  export type GeneroCountAggregateInputType = {
    id_Genero?: true
    nome?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genero to aggregate.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type GeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithAggregationInput | GeneroOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: GeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id_Genero: number
    nome: string
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends GeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Genero?: boolean
    nome?: boolean
    pacientes?: boolean | Genero$pacientesArgs<ExtArgs>
    listaEspera?: boolean | Genero$listaEsperaArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Genero?: boolean
    nome?: boolean
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Genero?: boolean
    nome?: boolean
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectScalar = {
    id_Genero?: boolean
    nome?: boolean
  }

  export type GeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Genero" | "nome", ExtArgs["result"]["genero"]>
  export type GeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | Genero$pacientesArgs<ExtArgs>
    listaEspera?: boolean | Genero$listaEsperaArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GeneroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GeneroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
      listaEspera: Prisma.$ListaEsperaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Genero: number
      nome: string
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type GeneroGetPayload<S extends boolean | null | undefined | GeneroDefaultArgs> = $Result.GetResult<Prisma.$GeneroPayload, S>

  type GeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface GeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genero'], meta: { name: 'Genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {GeneroFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFindUniqueArgs>(args: SelectSubset<T, GeneroFindUniqueArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFindFirstArgs>(args?: SelectSubset<T, GeneroFindFirstArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id_Genero`
     * const generoWithId_GeneroOnly = await prisma.genero.findMany({ select: { id_Genero: true } })
     * 
     */
    findMany<T extends GeneroFindManyArgs>(args?: SelectSubset<T, GeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {GeneroCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends GeneroCreateArgs>(args: SelectSubset<T, GeneroCreateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {GeneroCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroCreateManyArgs>(args?: SelectSubset<T, GeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generos and returns the data saved in the database.
     * @param {GeneroCreateManyAndReturnArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generos and only return the `id_Genero`
     * const generoWithId_GeneroOnly = await prisma.genero.createManyAndReturn({
     *   select: { id_Genero: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneroCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genero.
     * @param {GeneroDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends GeneroDeleteArgs>(args: SelectSubset<T, GeneroDeleteArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {GeneroUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroUpdateArgs>(args: SelectSubset<T, GeneroUpdateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {GeneroDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroDeleteManyArgs>(args?: SelectSubset<T, GeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroUpdateManyArgs>(args: SelectSubset<T, GeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos and returns the data updated in the database.
     * @param {GeneroUpdateManyAndReturnArgs} args - Arguments to update many Generos.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generos and only return the `id_Genero`
     * const generoWithId_GeneroOnly = await prisma.genero.updateManyAndReturn({
     *   select: { id_Genero: true },
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
    updateManyAndReturn<T extends GeneroUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genero.
     * @param {GeneroUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends GeneroUpsertArgs>(args: SelectSubset<T, GeneroUpsertArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends GeneroCountArgs>(
      args?: Subset<T, GeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroGroupByArgs} args - Group by arguments.
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
      T extends GeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genero model
   */
  readonly fields: GeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends Genero$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Genero$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listaEspera<T extends Genero$listaEsperaArgs<ExtArgs> = {}>(args?: Subset<T, Genero$listaEsperaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genero model
   */
  interface GeneroFieldRefs {
    readonly id_Genero: FieldRef<"Genero", 'Int'>
    readonly nome: FieldRef<"Genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genero findUnique
   */
  export type GeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findUniqueOrThrow
   */
  export type GeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findFirst
   */
  export type GeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findFirstOrThrow
   */
  export type GeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findMany
   */
  export type GeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Generos to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero create
   */
  export type GeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a Genero.
     */
    data: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
  }

  /**
   * Genero createMany
   */
  export type GeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero createManyAndReturn
   */
  export type GeneroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero update
   */
  export type GeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a Genero.
     */
    data: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
    /**
     * Choose, which Genero to update.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero updateMany
   */
  export type GeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero updateManyAndReturn
   */
  export type GeneroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero upsert
   */
  export type GeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the Genero to update in case it exists.
     */
    where: GeneroWhereUniqueInput
    /**
     * In case the Genero found by the `where` argument doesn't exist, create a new Genero with this data.
     */
    create: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
    /**
     * In case the Genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
  }

  /**
   * Genero delete
   */
  export type GeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter which Genero to delete.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero deleteMany
   */
  export type GeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generos to delete
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to delete.
     */
    limit?: number
  }

  /**
   * Genero.pacientes
   */
  export type Genero$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Genero.listaEspera
   */
  export type Genero$listaEsperaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    where?: ListaEsperaWhereInput
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    cursor?: ListaEsperaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * Genero without action
   */
  export type GeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
  }


  /**
   * Model CorPele
   */

  export type AggregateCorPele = {
    _count: CorPeleCountAggregateOutputType | null
    _avg: CorPeleAvgAggregateOutputType | null
    _sum: CorPeleSumAggregateOutputType | null
    _min: CorPeleMinAggregateOutputType | null
    _max: CorPeleMaxAggregateOutputType | null
  }

  export type CorPeleAvgAggregateOutputType = {
    id_CorPele: number | null
  }

  export type CorPeleSumAggregateOutputType = {
    id_CorPele: number | null
  }

  export type CorPeleMinAggregateOutputType = {
    id_CorPele: number | null
    nome: string | null
  }

  export type CorPeleMaxAggregateOutputType = {
    id_CorPele: number | null
    nome: string | null
  }

  export type CorPeleCountAggregateOutputType = {
    id_CorPele: number
    nome: number
    _all: number
  }


  export type CorPeleAvgAggregateInputType = {
    id_CorPele?: true
  }

  export type CorPeleSumAggregateInputType = {
    id_CorPele?: true
  }

  export type CorPeleMinAggregateInputType = {
    id_CorPele?: true
    nome?: true
  }

  export type CorPeleMaxAggregateInputType = {
    id_CorPele?: true
    nome?: true
  }

  export type CorPeleCountAggregateInputType = {
    id_CorPele?: true
    nome?: true
    _all?: true
  }

  export type CorPeleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CorPele to aggregate.
     */
    where?: CorPeleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorPeles to fetch.
     */
    orderBy?: CorPeleOrderByWithRelationInput | CorPeleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CorPeleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorPeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorPeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CorPeles
    **/
    _count?: true | CorPeleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CorPeleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CorPeleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorPeleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorPeleMaxAggregateInputType
  }

  export type GetCorPeleAggregateType<T extends CorPeleAggregateArgs> = {
        [P in keyof T & keyof AggregateCorPele]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorPele[P]>
      : GetScalarType<T[P], AggregateCorPele[P]>
  }




  export type CorPeleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CorPeleWhereInput
    orderBy?: CorPeleOrderByWithAggregationInput | CorPeleOrderByWithAggregationInput[]
    by: CorPeleScalarFieldEnum[] | CorPeleScalarFieldEnum
    having?: CorPeleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorPeleCountAggregateInputType | true
    _avg?: CorPeleAvgAggregateInputType
    _sum?: CorPeleSumAggregateInputType
    _min?: CorPeleMinAggregateInputType
    _max?: CorPeleMaxAggregateInputType
  }

  export type CorPeleGroupByOutputType = {
    id_CorPele: number
    nome: string
    _count: CorPeleCountAggregateOutputType | null
    _avg: CorPeleAvgAggregateOutputType | null
    _sum: CorPeleSumAggregateOutputType | null
    _min: CorPeleMinAggregateOutputType | null
    _max: CorPeleMaxAggregateOutputType | null
  }

  type GetCorPeleGroupByPayload<T extends CorPeleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorPeleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorPeleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorPeleGroupByOutputType[P]>
            : GetScalarType<T[P], CorPeleGroupByOutputType[P]>
        }
      >
    >


  export type CorPeleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_CorPele?: boolean
    nome?: boolean
    pacientes?: boolean | CorPele$pacientesArgs<ExtArgs>
    listaEspera?: boolean | CorPele$listaEsperaArgs<ExtArgs>
    _count?: boolean | CorPeleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corPele"]>

  export type CorPeleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_CorPele?: boolean
    nome?: boolean
  }, ExtArgs["result"]["corPele"]>

  export type CorPeleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_CorPele?: boolean
    nome?: boolean
  }, ExtArgs["result"]["corPele"]>

  export type CorPeleSelectScalar = {
    id_CorPele?: boolean
    nome?: boolean
  }

  export type CorPeleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_CorPele" | "nome", ExtArgs["result"]["corPele"]>
  export type CorPeleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | CorPele$pacientesArgs<ExtArgs>
    listaEspera?: boolean | CorPele$listaEsperaArgs<ExtArgs>
    _count?: boolean | CorPeleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CorPeleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CorPeleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CorPelePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CorPele"
    objects: {
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
      listaEspera: Prisma.$ListaEsperaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_CorPele: number
      nome: string
    }, ExtArgs["result"]["corPele"]>
    composites: {}
  }

  type CorPeleGetPayload<S extends boolean | null | undefined | CorPeleDefaultArgs> = $Result.GetResult<Prisma.$CorPelePayload, S>

  type CorPeleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CorPeleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorPeleCountAggregateInputType | true
    }

  export interface CorPeleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CorPele'], meta: { name: 'CorPele' } }
    /**
     * Find zero or one CorPele that matches the filter.
     * @param {CorPeleFindUniqueArgs} args - Arguments to find a CorPele
     * @example
     * // Get one CorPele
     * const corPele = await prisma.corPele.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CorPeleFindUniqueArgs>(args: SelectSubset<T, CorPeleFindUniqueArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CorPele that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CorPeleFindUniqueOrThrowArgs} args - Arguments to find a CorPele
     * @example
     * // Get one CorPele
     * const corPele = await prisma.corPele.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CorPeleFindUniqueOrThrowArgs>(args: SelectSubset<T, CorPeleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CorPele that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorPeleFindFirstArgs} args - Arguments to find a CorPele
     * @example
     * // Get one CorPele
     * const corPele = await prisma.corPele.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CorPeleFindFirstArgs>(args?: SelectSubset<T, CorPeleFindFirstArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CorPele that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorPeleFindFirstOrThrowArgs} args - Arguments to find a CorPele
     * @example
     * // Get one CorPele
     * const corPele = await prisma.corPele.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CorPeleFindFirstOrThrowArgs>(args?: SelectSubset<T, CorPeleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CorPeles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorPeleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CorPeles
     * const corPeles = await prisma.corPele.findMany()
     * 
     * // Get first 10 CorPeles
     * const corPeles = await prisma.corPele.findMany({ take: 10 })
     * 
     * // Only select the `id_CorPele`
     * const corPeleWithId_CorPeleOnly = await prisma.corPele.findMany({ select: { id_CorPele: true } })
     * 
     */
    findMany<T extends CorPeleFindManyArgs>(args?: SelectSubset<T, CorPeleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CorPele.
     * @param {CorPeleCreateArgs} args - Arguments to create a CorPele.
     * @example
     * // Create one CorPele
     * const CorPele = await prisma.corPele.create({
     *   data: {
     *     // ... data to create a CorPele
     *   }
     * })
     * 
     */
    create<T extends CorPeleCreateArgs>(args: SelectSubset<T, CorPeleCreateArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CorPeles.
     * @param {CorPeleCreateManyArgs} args - Arguments to create many CorPeles.
     * @example
     * // Create many CorPeles
     * const corPele = await prisma.corPele.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CorPeleCreateManyArgs>(args?: SelectSubset<T, CorPeleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CorPeles and returns the data saved in the database.
     * @param {CorPeleCreateManyAndReturnArgs} args - Arguments to create many CorPeles.
     * @example
     * // Create many CorPeles
     * const corPele = await prisma.corPele.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CorPeles and only return the `id_CorPele`
     * const corPeleWithId_CorPeleOnly = await prisma.corPele.createManyAndReturn({
     *   select: { id_CorPele: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CorPeleCreateManyAndReturnArgs>(args?: SelectSubset<T, CorPeleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CorPele.
     * @param {CorPeleDeleteArgs} args - Arguments to delete one CorPele.
     * @example
     * // Delete one CorPele
     * const CorPele = await prisma.corPele.delete({
     *   where: {
     *     // ... filter to delete one CorPele
     *   }
     * })
     * 
     */
    delete<T extends CorPeleDeleteArgs>(args: SelectSubset<T, CorPeleDeleteArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CorPele.
     * @param {CorPeleUpdateArgs} args - Arguments to update one CorPele.
     * @example
     * // Update one CorPele
     * const corPele = await prisma.corPele.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CorPeleUpdateArgs>(args: SelectSubset<T, CorPeleUpdateArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CorPeles.
     * @param {CorPeleDeleteManyArgs} args - Arguments to filter CorPeles to delete.
     * @example
     * // Delete a few CorPeles
     * const { count } = await prisma.corPele.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CorPeleDeleteManyArgs>(args?: SelectSubset<T, CorPeleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorPeles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorPeleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CorPeles
     * const corPele = await prisma.corPele.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CorPeleUpdateManyArgs>(args: SelectSubset<T, CorPeleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorPeles and returns the data updated in the database.
     * @param {CorPeleUpdateManyAndReturnArgs} args - Arguments to update many CorPeles.
     * @example
     * // Update many CorPeles
     * const corPele = await prisma.corPele.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CorPeles and only return the `id_CorPele`
     * const corPeleWithId_CorPeleOnly = await prisma.corPele.updateManyAndReturn({
     *   select: { id_CorPele: true },
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
    updateManyAndReturn<T extends CorPeleUpdateManyAndReturnArgs>(args: SelectSubset<T, CorPeleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CorPele.
     * @param {CorPeleUpsertArgs} args - Arguments to update or create a CorPele.
     * @example
     * // Update or create a CorPele
     * const corPele = await prisma.corPele.upsert({
     *   create: {
     *     // ... data to create a CorPele
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CorPele we want to update
     *   }
     * })
     */
    upsert<T extends CorPeleUpsertArgs>(args: SelectSubset<T, CorPeleUpsertArgs<ExtArgs>>): Prisma__CorPeleClient<$Result.GetResult<Prisma.$CorPelePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CorPeles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorPeleCountArgs} args - Arguments to filter CorPeles to count.
     * @example
     * // Count the number of CorPeles
     * const count = await prisma.corPele.count({
     *   where: {
     *     // ... the filter for the CorPeles we want to count
     *   }
     * })
    **/
    count<T extends CorPeleCountArgs>(
      args?: Subset<T, CorPeleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorPeleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CorPele.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorPeleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CorPeleAggregateArgs>(args: Subset<T, CorPeleAggregateArgs>): Prisma.PrismaPromise<GetCorPeleAggregateType<T>>

    /**
     * Group by CorPele.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorPeleGroupByArgs} args - Group by arguments.
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
      T extends CorPeleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CorPeleGroupByArgs['orderBy'] }
        : { orderBy?: CorPeleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CorPeleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorPeleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CorPele model
   */
  readonly fields: CorPeleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CorPele.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CorPeleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends CorPele$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, CorPele$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listaEspera<T extends CorPele$listaEsperaArgs<ExtArgs> = {}>(args?: Subset<T, CorPele$listaEsperaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CorPele model
   */
  interface CorPeleFieldRefs {
    readonly id_CorPele: FieldRef<"CorPele", 'Int'>
    readonly nome: FieldRef<"CorPele", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CorPele findUnique
   */
  export type CorPeleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * Filter, which CorPele to fetch.
     */
    where: CorPeleWhereUniqueInput
  }

  /**
   * CorPele findUniqueOrThrow
   */
  export type CorPeleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * Filter, which CorPele to fetch.
     */
    where: CorPeleWhereUniqueInput
  }

  /**
   * CorPele findFirst
   */
  export type CorPeleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * Filter, which CorPele to fetch.
     */
    where?: CorPeleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorPeles to fetch.
     */
    orderBy?: CorPeleOrderByWithRelationInput | CorPeleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CorPeles.
     */
    cursor?: CorPeleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorPeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorPeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CorPeles.
     */
    distinct?: CorPeleScalarFieldEnum | CorPeleScalarFieldEnum[]
  }

  /**
   * CorPele findFirstOrThrow
   */
  export type CorPeleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * Filter, which CorPele to fetch.
     */
    where?: CorPeleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorPeles to fetch.
     */
    orderBy?: CorPeleOrderByWithRelationInput | CorPeleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CorPeles.
     */
    cursor?: CorPeleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorPeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorPeles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CorPeles.
     */
    distinct?: CorPeleScalarFieldEnum | CorPeleScalarFieldEnum[]
  }

  /**
   * CorPele findMany
   */
  export type CorPeleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * Filter, which CorPeles to fetch.
     */
    where?: CorPeleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorPeles to fetch.
     */
    orderBy?: CorPeleOrderByWithRelationInput | CorPeleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CorPeles.
     */
    cursor?: CorPeleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorPeles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorPeles.
     */
    skip?: number
    distinct?: CorPeleScalarFieldEnum | CorPeleScalarFieldEnum[]
  }

  /**
   * CorPele create
   */
  export type CorPeleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * The data needed to create a CorPele.
     */
    data: XOR<CorPeleCreateInput, CorPeleUncheckedCreateInput>
  }

  /**
   * CorPele createMany
   */
  export type CorPeleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CorPeles.
     */
    data: CorPeleCreateManyInput | CorPeleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CorPele createManyAndReturn
   */
  export type CorPeleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * The data used to create many CorPeles.
     */
    data: CorPeleCreateManyInput | CorPeleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CorPele update
   */
  export type CorPeleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * The data needed to update a CorPele.
     */
    data: XOR<CorPeleUpdateInput, CorPeleUncheckedUpdateInput>
    /**
     * Choose, which CorPele to update.
     */
    where: CorPeleWhereUniqueInput
  }

  /**
   * CorPele updateMany
   */
  export type CorPeleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CorPeles.
     */
    data: XOR<CorPeleUpdateManyMutationInput, CorPeleUncheckedUpdateManyInput>
    /**
     * Filter which CorPeles to update
     */
    where?: CorPeleWhereInput
    /**
     * Limit how many CorPeles to update.
     */
    limit?: number
  }

  /**
   * CorPele updateManyAndReturn
   */
  export type CorPeleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * The data used to update CorPeles.
     */
    data: XOR<CorPeleUpdateManyMutationInput, CorPeleUncheckedUpdateManyInput>
    /**
     * Filter which CorPeles to update
     */
    where?: CorPeleWhereInput
    /**
     * Limit how many CorPeles to update.
     */
    limit?: number
  }

  /**
   * CorPele upsert
   */
  export type CorPeleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * The filter to search for the CorPele to update in case it exists.
     */
    where: CorPeleWhereUniqueInput
    /**
     * In case the CorPele found by the `where` argument doesn't exist, create a new CorPele with this data.
     */
    create: XOR<CorPeleCreateInput, CorPeleUncheckedCreateInput>
    /**
     * In case the CorPele was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CorPeleUpdateInput, CorPeleUncheckedUpdateInput>
  }

  /**
   * CorPele delete
   */
  export type CorPeleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
    /**
     * Filter which CorPele to delete.
     */
    where: CorPeleWhereUniqueInput
  }

  /**
   * CorPele deleteMany
   */
  export type CorPeleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CorPeles to delete
     */
    where?: CorPeleWhereInput
    /**
     * Limit how many CorPeles to delete.
     */
    limit?: number
  }

  /**
   * CorPele.pacientes
   */
  export type CorPele$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * CorPele.listaEspera
   */
  export type CorPele$listaEsperaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    where?: ListaEsperaWhereInput
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    cursor?: ListaEsperaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * CorPele without action
   */
  export type CorPeleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorPele
     */
    select?: CorPeleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorPele
     */
    omit?: CorPeleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorPeleInclude<ExtArgs> | null
  }


  /**
   * Model Escolaridade
   */

  export type AggregateEscolaridade = {
    _count: EscolaridadeCountAggregateOutputType | null
    _avg: EscolaridadeAvgAggregateOutputType | null
    _sum: EscolaridadeSumAggregateOutputType | null
    _min: EscolaridadeMinAggregateOutputType | null
    _max: EscolaridadeMaxAggregateOutputType | null
  }

  export type EscolaridadeAvgAggregateOutputType = {
    id_Escolaridade: number | null
  }

  export type EscolaridadeSumAggregateOutputType = {
    id_Escolaridade: number | null
  }

  export type EscolaridadeMinAggregateOutputType = {
    id_Escolaridade: number | null
    nome: string | null
  }

  export type EscolaridadeMaxAggregateOutputType = {
    id_Escolaridade: number | null
    nome: string | null
  }

  export type EscolaridadeCountAggregateOutputType = {
    id_Escolaridade: number
    nome: number
    _all: number
  }


  export type EscolaridadeAvgAggregateInputType = {
    id_Escolaridade?: true
  }

  export type EscolaridadeSumAggregateInputType = {
    id_Escolaridade?: true
  }

  export type EscolaridadeMinAggregateInputType = {
    id_Escolaridade?: true
    nome?: true
  }

  export type EscolaridadeMaxAggregateInputType = {
    id_Escolaridade?: true
    nome?: true
  }

  export type EscolaridadeCountAggregateInputType = {
    id_Escolaridade?: true
    nome?: true
    _all?: true
  }

  export type EscolaridadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escolaridade to aggregate.
     */
    where?: EscolaridadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolaridades to fetch.
     */
    orderBy?: EscolaridadeOrderByWithRelationInput | EscolaridadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscolaridadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolaridades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolaridades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Escolaridades
    **/
    _count?: true | EscolaridadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscolaridadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscolaridadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscolaridadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscolaridadeMaxAggregateInputType
  }

  export type GetEscolaridadeAggregateType<T extends EscolaridadeAggregateArgs> = {
        [P in keyof T & keyof AggregateEscolaridade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscolaridade[P]>
      : GetScalarType<T[P], AggregateEscolaridade[P]>
  }




  export type EscolaridadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscolaridadeWhereInput
    orderBy?: EscolaridadeOrderByWithAggregationInput | EscolaridadeOrderByWithAggregationInput[]
    by: EscolaridadeScalarFieldEnum[] | EscolaridadeScalarFieldEnum
    having?: EscolaridadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscolaridadeCountAggregateInputType | true
    _avg?: EscolaridadeAvgAggregateInputType
    _sum?: EscolaridadeSumAggregateInputType
    _min?: EscolaridadeMinAggregateInputType
    _max?: EscolaridadeMaxAggregateInputType
  }

  export type EscolaridadeGroupByOutputType = {
    id_Escolaridade: number
    nome: string
    _count: EscolaridadeCountAggregateOutputType | null
    _avg: EscolaridadeAvgAggregateOutputType | null
    _sum: EscolaridadeSumAggregateOutputType | null
    _min: EscolaridadeMinAggregateOutputType | null
    _max: EscolaridadeMaxAggregateOutputType | null
  }

  type GetEscolaridadeGroupByPayload<T extends EscolaridadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscolaridadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscolaridadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscolaridadeGroupByOutputType[P]>
            : GetScalarType<T[P], EscolaridadeGroupByOutputType[P]>
        }
      >
    >


  export type EscolaridadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Escolaridade?: boolean
    nome?: boolean
    pacientes?: boolean | Escolaridade$pacientesArgs<ExtArgs>
    listaEspera?: boolean | Escolaridade$listaEsperaArgs<ExtArgs>
    _count?: boolean | EscolaridadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escolaridade"]>

  export type EscolaridadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Escolaridade?: boolean
    nome?: boolean
  }, ExtArgs["result"]["escolaridade"]>

  export type EscolaridadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Escolaridade?: boolean
    nome?: boolean
  }, ExtArgs["result"]["escolaridade"]>

  export type EscolaridadeSelectScalar = {
    id_Escolaridade?: boolean
    nome?: boolean
  }

  export type EscolaridadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Escolaridade" | "nome", ExtArgs["result"]["escolaridade"]>
  export type EscolaridadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | Escolaridade$pacientesArgs<ExtArgs>
    listaEspera?: boolean | Escolaridade$listaEsperaArgs<ExtArgs>
    _count?: boolean | EscolaridadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EscolaridadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EscolaridadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EscolaridadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Escolaridade"
    objects: {
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
      listaEspera: Prisma.$ListaEsperaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Escolaridade: number
      nome: string
    }, ExtArgs["result"]["escolaridade"]>
    composites: {}
  }

  type EscolaridadeGetPayload<S extends boolean | null | undefined | EscolaridadeDefaultArgs> = $Result.GetResult<Prisma.$EscolaridadePayload, S>

  type EscolaridadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscolaridadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscolaridadeCountAggregateInputType | true
    }

  export interface EscolaridadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Escolaridade'], meta: { name: 'Escolaridade' } }
    /**
     * Find zero or one Escolaridade that matches the filter.
     * @param {EscolaridadeFindUniqueArgs} args - Arguments to find a Escolaridade
     * @example
     * // Get one Escolaridade
     * const escolaridade = await prisma.escolaridade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscolaridadeFindUniqueArgs>(args: SelectSubset<T, EscolaridadeFindUniqueArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Escolaridade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscolaridadeFindUniqueOrThrowArgs} args - Arguments to find a Escolaridade
     * @example
     * // Get one Escolaridade
     * const escolaridade = await prisma.escolaridade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscolaridadeFindUniqueOrThrowArgs>(args: SelectSubset<T, EscolaridadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escolaridade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaridadeFindFirstArgs} args - Arguments to find a Escolaridade
     * @example
     * // Get one Escolaridade
     * const escolaridade = await prisma.escolaridade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscolaridadeFindFirstArgs>(args?: SelectSubset<T, EscolaridadeFindFirstArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Escolaridade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaridadeFindFirstOrThrowArgs} args - Arguments to find a Escolaridade
     * @example
     * // Get one Escolaridade
     * const escolaridade = await prisma.escolaridade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscolaridadeFindFirstOrThrowArgs>(args?: SelectSubset<T, EscolaridadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Escolaridades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaridadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Escolaridades
     * const escolaridades = await prisma.escolaridade.findMany()
     * 
     * // Get first 10 Escolaridades
     * const escolaridades = await prisma.escolaridade.findMany({ take: 10 })
     * 
     * // Only select the `id_Escolaridade`
     * const escolaridadeWithId_EscolaridadeOnly = await prisma.escolaridade.findMany({ select: { id_Escolaridade: true } })
     * 
     */
    findMany<T extends EscolaridadeFindManyArgs>(args?: SelectSubset<T, EscolaridadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Escolaridade.
     * @param {EscolaridadeCreateArgs} args - Arguments to create a Escolaridade.
     * @example
     * // Create one Escolaridade
     * const Escolaridade = await prisma.escolaridade.create({
     *   data: {
     *     // ... data to create a Escolaridade
     *   }
     * })
     * 
     */
    create<T extends EscolaridadeCreateArgs>(args: SelectSubset<T, EscolaridadeCreateArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Escolaridades.
     * @param {EscolaridadeCreateManyArgs} args - Arguments to create many Escolaridades.
     * @example
     * // Create many Escolaridades
     * const escolaridade = await prisma.escolaridade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscolaridadeCreateManyArgs>(args?: SelectSubset<T, EscolaridadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Escolaridades and returns the data saved in the database.
     * @param {EscolaridadeCreateManyAndReturnArgs} args - Arguments to create many Escolaridades.
     * @example
     * // Create many Escolaridades
     * const escolaridade = await prisma.escolaridade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Escolaridades and only return the `id_Escolaridade`
     * const escolaridadeWithId_EscolaridadeOnly = await prisma.escolaridade.createManyAndReturn({
     *   select: { id_Escolaridade: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscolaridadeCreateManyAndReturnArgs>(args?: SelectSubset<T, EscolaridadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Escolaridade.
     * @param {EscolaridadeDeleteArgs} args - Arguments to delete one Escolaridade.
     * @example
     * // Delete one Escolaridade
     * const Escolaridade = await prisma.escolaridade.delete({
     *   where: {
     *     // ... filter to delete one Escolaridade
     *   }
     * })
     * 
     */
    delete<T extends EscolaridadeDeleteArgs>(args: SelectSubset<T, EscolaridadeDeleteArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Escolaridade.
     * @param {EscolaridadeUpdateArgs} args - Arguments to update one Escolaridade.
     * @example
     * // Update one Escolaridade
     * const escolaridade = await prisma.escolaridade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscolaridadeUpdateArgs>(args: SelectSubset<T, EscolaridadeUpdateArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Escolaridades.
     * @param {EscolaridadeDeleteManyArgs} args - Arguments to filter Escolaridades to delete.
     * @example
     * // Delete a few Escolaridades
     * const { count } = await prisma.escolaridade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscolaridadeDeleteManyArgs>(args?: SelectSubset<T, EscolaridadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escolaridades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaridadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Escolaridades
     * const escolaridade = await prisma.escolaridade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscolaridadeUpdateManyArgs>(args: SelectSubset<T, EscolaridadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Escolaridades and returns the data updated in the database.
     * @param {EscolaridadeUpdateManyAndReturnArgs} args - Arguments to update many Escolaridades.
     * @example
     * // Update many Escolaridades
     * const escolaridade = await prisma.escolaridade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Escolaridades and only return the `id_Escolaridade`
     * const escolaridadeWithId_EscolaridadeOnly = await prisma.escolaridade.updateManyAndReturn({
     *   select: { id_Escolaridade: true },
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
    updateManyAndReturn<T extends EscolaridadeUpdateManyAndReturnArgs>(args: SelectSubset<T, EscolaridadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Escolaridade.
     * @param {EscolaridadeUpsertArgs} args - Arguments to update or create a Escolaridade.
     * @example
     * // Update or create a Escolaridade
     * const escolaridade = await prisma.escolaridade.upsert({
     *   create: {
     *     // ... data to create a Escolaridade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Escolaridade we want to update
     *   }
     * })
     */
    upsert<T extends EscolaridadeUpsertArgs>(args: SelectSubset<T, EscolaridadeUpsertArgs<ExtArgs>>): Prisma__EscolaridadeClient<$Result.GetResult<Prisma.$EscolaridadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Escolaridades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaridadeCountArgs} args - Arguments to filter Escolaridades to count.
     * @example
     * // Count the number of Escolaridades
     * const count = await prisma.escolaridade.count({
     *   where: {
     *     // ... the filter for the Escolaridades we want to count
     *   }
     * })
    **/
    count<T extends EscolaridadeCountArgs>(
      args?: Subset<T, EscolaridadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscolaridadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Escolaridade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaridadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscolaridadeAggregateArgs>(args: Subset<T, EscolaridadeAggregateArgs>): Prisma.PrismaPromise<GetEscolaridadeAggregateType<T>>

    /**
     * Group by Escolaridade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscolaridadeGroupByArgs} args - Group by arguments.
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
      T extends EscolaridadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscolaridadeGroupByArgs['orderBy'] }
        : { orderBy?: EscolaridadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscolaridadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscolaridadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Escolaridade model
   */
  readonly fields: EscolaridadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Escolaridade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscolaridadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends Escolaridade$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Escolaridade$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listaEspera<T extends Escolaridade$listaEsperaArgs<ExtArgs> = {}>(args?: Subset<T, Escolaridade$listaEsperaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaEsperaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Escolaridade model
   */
  interface EscolaridadeFieldRefs {
    readonly id_Escolaridade: FieldRef<"Escolaridade", 'Int'>
    readonly nome: FieldRef<"Escolaridade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Escolaridade findUnique
   */
  export type EscolaridadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * Filter, which Escolaridade to fetch.
     */
    where: EscolaridadeWhereUniqueInput
  }

  /**
   * Escolaridade findUniqueOrThrow
   */
  export type EscolaridadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * Filter, which Escolaridade to fetch.
     */
    where: EscolaridadeWhereUniqueInput
  }

  /**
   * Escolaridade findFirst
   */
  export type EscolaridadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * Filter, which Escolaridade to fetch.
     */
    where?: EscolaridadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolaridades to fetch.
     */
    orderBy?: EscolaridadeOrderByWithRelationInput | EscolaridadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escolaridades.
     */
    cursor?: EscolaridadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolaridades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolaridades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escolaridades.
     */
    distinct?: EscolaridadeScalarFieldEnum | EscolaridadeScalarFieldEnum[]
  }

  /**
   * Escolaridade findFirstOrThrow
   */
  export type EscolaridadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * Filter, which Escolaridade to fetch.
     */
    where?: EscolaridadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolaridades to fetch.
     */
    orderBy?: EscolaridadeOrderByWithRelationInput | EscolaridadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Escolaridades.
     */
    cursor?: EscolaridadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolaridades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolaridades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Escolaridades.
     */
    distinct?: EscolaridadeScalarFieldEnum | EscolaridadeScalarFieldEnum[]
  }

  /**
   * Escolaridade findMany
   */
  export type EscolaridadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * Filter, which Escolaridades to fetch.
     */
    where?: EscolaridadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Escolaridades to fetch.
     */
    orderBy?: EscolaridadeOrderByWithRelationInput | EscolaridadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Escolaridades.
     */
    cursor?: EscolaridadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Escolaridades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Escolaridades.
     */
    skip?: number
    distinct?: EscolaridadeScalarFieldEnum | EscolaridadeScalarFieldEnum[]
  }

  /**
   * Escolaridade create
   */
  export type EscolaridadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Escolaridade.
     */
    data: XOR<EscolaridadeCreateInput, EscolaridadeUncheckedCreateInput>
  }

  /**
   * Escolaridade createMany
   */
  export type EscolaridadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Escolaridades.
     */
    data: EscolaridadeCreateManyInput | EscolaridadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escolaridade createManyAndReturn
   */
  export type EscolaridadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * The data used to create many Escolaridades.
     */
    data: EscolaridadeCreateManyInput | EscolaridadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Escolaridade update
   */
  export type EscolaridadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Escolaridade.
     */
    data: XOR<EscolaridadeUpdateInput, EscolaridadeUncheckedUpdateInput>
    /**
     * Choose, which Escolaridade to update.
     */
    where: EscolaridadeWhereUniqueInput
  }

  /**
   * Escolaridade updateMany
   */
  export type EscolaridadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Escolaridades.
     */
    data: XOR<EscolaridadeUpdateManyMutationInput, EscolaridadeUncheckedUpdateManyInput>
    /**
     * Filter which Escolaridades to update
     */
    where?: EscolaridadeWhereInput
    /**
     * Limit how many Escolaridades to update.
     */
    limit?: number
  }

  /**
   * Escolaridade updateManyAndReturn
   */
  export type EscolaridadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * The data used to update Escolaridades.
     */
    data: XOR<EscolaridadeUpdateManyMutationInput, EscolaridadeUncheckedUpdateManyInput>
    /**
     * Filter which Escolaridades to update
     */
    where?: EscolaridadeWhereInput
    /**
     * Limit how many Escolaridades to update.
     */
    limit?: number
  }

  /**
   * Escolaridade upsert
   */
  export type EscolaridadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Escolaridade to update in case it exists.
     */
    where: EscolaridadeWhereUniqueInput
    /**
     * In case the Escolaridade found by the `where` argument doesn't exist, create a new Escolaridade with this data.
     */
    create: XOR<EscolaridadeCreateInput, EscolaridadeUncheckedCreateInput>
    /**
     * In case the Escolaridade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscolaridadeUpdateInput, EscolaridadeUncheckedUpdateInput>
  }

  /**
   * Escolaridade delete
   */
  export type EscolaridadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
    /**
     * Filter which Escolaridade to delete.
     */
    where: EscolaridadeWhereUniqueInput
  }

  /**
   * Escolaridade deleteMany
   */
  export type EscolaridadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Escolaridades to delete
     */
    where?: EscolaridadeWhereInput
    /**
     * Limit how many Escolaridades to delete.
     */
    limit?: number
  }

  /**
   * Escolaridade.pacientes
   */
  export type Escolaridade$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Escolaridade.listaEspera
   */
  export type Escolaridade$listaEsperaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaEspera
     */
    select?: ListaEsperaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaEspera
     */
    omit?: ListaEsperaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaEsperaInclude<ExtArgs> | null
    where?: ListaEsperaWhereInput
    orderBy?: ListaEsperaOrderByWithRelationInput | ListaEsperaOrderByWithRelationInput[]
    cursor?: ListaEsperaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaEsperaScalarFieldEnum | ListaEsperaScalarFieldEnum[]
  }

  /**
   * Escolaridade without action
   */
  export type EscolaridadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Escolaridade
     */
    select?: EscolaridadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Escolaridade
     */
    omit?: EscolaridadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscolaridadeInclude<ExtArgs> | null
  }


  /**
   * Model StatusAtendimento
   */

  export type AggregateStatusAtendimento = {
    _count: StatusAtendimentoCountAggregateOutputType | null
    _avg: StatusAtendimentoAvgAggregateOutputType | null
    _sum: StatusAtendimentoSumAggregateOutputType | null
    _min: StatusAtendimentoMinAggregateOutputType | null
    _max: StatusAtendimentoMaxAggregateOutputType | null
  }

  export type StatusAtendimentoAvgAggregateOutputType = {
    id_Status: number | null
  }

  export type StatusAtendimentoSumAggregateOutputType = {
    id_Status: number | null
  }

  export type StatusAtendimentoMinAggregateOutputType = {
    id_Status: number | null
    nome: string | null
  }

  export type StatusAtendimentoMaxAggregateOutputType = {
    id_Status: number | null
    nome: string | null
  }

  export type StatusAtendimentoCountAggregateOutputType = {
    id_Status: number
    nome: number
    _all: number
  }


  export type StatusAtendimentoAvgAggregateInputType = {
    id_Status?: true
  }

  export type StatusAtendimentoSumAggregateInputType = {
    id_Status?: true
  }

  export type StatusAtendimentoMinAggregateInputType = {
    id_Status?: true
    nome?: true
  }

  export type StatusAtendimentoMaxAggregateInputType = {
    id_Status?: true
    nome?: true
  }

  export type StatusAtendimentoCountAggregateInputType = {
    id_Status?: true
    nome?: true
    _all?: true
  }

  export type StatusAtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusAtendimento to aggregate.
     */
    where?: StatusAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusAtendimentos to fetch.
     */
    orderBy?: StatusAtendimentoOrderByWithRelationInput | StatusAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusAtendimentos
    **/
    _count?: true | StatusAtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAtendimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusAtendimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusAtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusAtendimentoMaxAggregateInputType
  }

  export type GetStatusAtendimentoAggregateType<T extends StatusAtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusAtendimento[P]>
      : GetScalarType<T[P], AggregateStatusAtendimento[P]>
  }




  export type StatusAtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusAtendimentoWhereInput
    orderBy?: StatusAtendimentoOrderByWithAggregationInput | StatusAtendimentoOrderByWithAggregationInput[]
    by: StatusAtendimentoScalarFieldEnum[] | StatusAtendimentoScalarFieldEnum
    having?: StatusAtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusAtendimentoCountAggregateInputType | true
    _avg?: StatusAtendimentoAvgAggregateInputType
    _sum?: StatusAtendimentoSumAggregateInputType
    _min?: StatusAtendimentoMinAggregateInputType
    _max?: StatusAtendimentoMaxAggregateInputType
  }

  export type StatusAtendimentoGroupByOutputType = {
    id_Status: number
    nome: string
    _count: StatusAtendimentoCountAggregateOutputType | null
    _avg: StatusAtendimentoAvgAggregateOutputType | null
    _sum: StatusAtendimentoSumAggregateOutputType | null
    _min: StatusAtendimentoMinAggregateOutputType | null
    _max: StatusAtendimentoMaxAggregateOutputType | null
  }

  type GetStatusAtendimentoGroupByPayload<T extends StatusAtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusAtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusAtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusAtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], StatusAtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type StatusAtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Status?: boolean
    nome?: boolean
    atendimentos?: boolean | StatusAtendimento$atendimentosArgs<ExtArgs>
    _count?: boolean | StatusAtendimentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusAtendimento"]>

  export type StatusAtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Status?: boolean
    nome?: boolean
  }, ExtArgs["result"]["statusAtendimento"]>

  export type StatusAtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Status?: boolean
    nome?: boolean
  }, ExtArgs["result"]["statusAtendimento"]>

  export type StatusAtendimentoSelectScalar = {
    id_Status?: boolean
    nome?: boolean
  }

  export type StatusAtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Status" | "nome", ExtArgs["result"]["statusAtendimento"]>
  export type StatusAtendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | StatusAtendimento$atendimentosArgs<ExtArgs>
    _count?: boolean | StatusAtendimentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusAtendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusAtendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusAtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusAtendimento"
    objects: {
      atendimentos: Prisma.$AtendimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Status: number
      nome: string
    }, ExtArgs["result"]["statusAtendimento"]>
    composites: {}
  }

  type StatusAtendimentoGetPayload<S extends boolean | null | undefined | StatusAtendimentoDefaultArgs> = $Result.GetResult<Prisma.$StatusAtendimentoPayload, S>

  type StatusAtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusAtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusAtendimentoCountAggregateInputType | true
    }

  export interface StatusAtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusAtendimento'], meta: { name: 'StatusAtendimento' } }
    /**
     * Find zero or one StatusAtendimento that matches the filter.
     * @param {StatusAtendimentoFindUniqueArgs} args - Arguments to find a StatusAtendimento
     * @example
     * // Get one StatusAtendimento
     * const statusAtendimento = await prisma.statusAtendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusAtendimentoFindUniqueArgs>(args: SelectSubset<T, StatusAtendimentoFindUniqueArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusAtendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusAtendimentoFindUniqueOrThrowArgs} args - Arguments to find a StatusAtendimento
     * @example
     * // Get one StatusAtendimento
     * const statusAtendimento = await prisma.statusAtendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusAtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusAtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusAtendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtendimentoFindFirstArgs} args - Arguments to find a StatusAtendimento
     * @example
     * // Get one StatusAtendimento
     * const statusAtendimento = await prisma.statusAtendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusAtendimentoFindFirstArgs>(args?: SelectSubset<T, StatusAtendimentoFindFirstArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusAtendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtendimentoFindFirstOrThrowArgs} args - Arguments to find a StatusAtendimento
     * @example
     * // Get one StatusAtendimento
     * const statusAtendimento = await prisma.statusAtendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusAtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusAtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusAtendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusAtendimentos
     * const statusAtendimentos = await prisma.statusAtendimento.findMany()
     * 
     * // Get first 10 StatusAtendimentos
     * const statusAtendimentos = await prisma.statusAtendimento.findMany({ take: 10 })
     * 
     * // Only select the `id_Status`
     * const statusAtendimentoWithId_StatusOnly = await prisma.statusAtendimento.findMany({ select: { id_Status: true } })
     * 
     */
    findMany<T extends StatusAtendimentoFindManyArgs>(args?: SelectSubset<T, StatusAtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusAtendimento.
     * @param {StatusAtendimentoCreateArgs} args - Arguments to create a StatusAtendimento.
     * @example
     * // Create one StatusAtendimento
     * const StatusAtendimento = await prisma.statusAtendimento.create({
     *   data: {
     *     // ... data to create a StatusAtendimento
     *   }
     * })
     * 
     */
    create<T extends StatusAtendimentoCreateArgs>(args: SelectSubset<T, StatusAtendimentoCreateArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusAtendimentos.
     * @param {StatusAtendimentoCreateManyArgs} args - Arguments to create many StatusAtendimentos.
     * @example
     * // Create many StatusAtendimentos
     * const statusAtendimento = await prisma.statusAtendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusAtendimentoCreateManyArgs>(args?: SelectSubset<T, StatusAtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusAtendimentos and returns the data saved in the database.
     * @param {StatusAtendimentoCreateManyAndReturnArgs} args - Arguments to create many StatusAtendimentos.
     * @example
     * // Create many StatusAtendimentos
     * const statusAtendimento = await prisma.statusAtendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusAtendimentos and only return the `id_Status`
     * const statusAtendimentoWithId_StatusOnly = await prisma.statusAtendimento.createManyAndReturn({
     *   select: { id_Status: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusAtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusAtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusAtendimento.
     * @param {StatusAtendimentoDeleteArgs} args - Arguments to delete one StatusAtendimento.
     * @example
     * // Delete one StatusAtendimento
     * const StatusAtendimento = await prisma.statusAtendimento.delete({
     *   where: {
     *     // ... filter to delete one StatusAtendimento
     *   }
     * })
     * 
     */
    delete<T extends StatusAtendimentoDeleteArgs>(args: SelectSubset<T, StatusAtendimentoDeleteArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusAtendimento.
     * @param {StatusAtendimentoUpdateArgs} args - Arguments to update one StatusAtendimento.
     * @example
     * // Update one StatusAtendimento
     * const statusAtendimento = await prisma.statusAtendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusAtendimentoUpdateArgs>(args: SelectSubset<T, StatusAtendimentoUpdateArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusAtendimentos.
     * @param {StatusAtendimentoDeleteManyArgs} args - Arguments to filter StatusAtendimentos to delete.
     * @example
     * // Delete a few StatusAtendimentos
     * const { count } = await prisma.statusAtendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusAtendimentoDeleteManyArgs>(args?: SelectSubset<T, StatusAtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusAtendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusAtendimentos
     * const statusAtendimento = await prisma.statusAtendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusAtendimentoUpdateManyArgs>(args: SelectSubset<T, StatusAtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusAtendimentos and returns the data updated in the database.
     * @param {StatusAtendimentoUpdateManyAndReturnArgs} args - Arguments to update many StatusAtendimentos.
     * @example
     * // Update many StatusAtendimentos
     * const statusAtendimento = await prisma.statusAtendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusAtendimentos and only return the `id_Status`
     * const statusAtendimentoWithId_StatusOnly = await prisma.statusAtendimento.updateManyAndReturn({
     *   select: { id_Status: true },
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
    updateManyAndReturn<T extends StatusAtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusAtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusAtendimento.
     * @param {StatusAtendimentoUpsertArgs} args - Arguments to update or create a StatusAtendimento.
     * @example
     * // Update or create a StatusAtendimento
     * const statusAtendimento = await prisma.statusAtendimento.upsert({
     *   create: {
     *     // ... data to create a StatusAtendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusAtendimento we want to update
     *   }
     * })
     */
    upsert<T extends StatusAtendimentoUpsertArgs>(args: SelectSubset<T, StatusAtendimentoUpsertArgs<ExtArgs>>): Prisma__StatusAtendimentoClient<$Result.GetResult<Prisma.$StatusAtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusAtendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtendimentoCountArgs} args - Arguments to filter StatusAtendimentos to count.
     * @example
     * // Count the number of StatusAtendimentos
     * const count = await prisma.statusAtendimento.count({
     *   where: {
     *     // ... the filter for the StatusAtendimentos we want to count
     *   }
     * })
    **/
    count<T extends StatusAtendimentoCountArgs>(
      args?: Subset<T, StatusAtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusAtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusAtendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAtendimentoAggregateArgs>(args: Subset<T, StatusAtendimentoAggregateArgs>): Prisma.PrismaPromise<GetStatusAtendimentoAggregateType<T>>

    /**
     * Group by StatusAtendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAtendimentoGroupByArgs} args - Group by arguments.
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
      T extends StatusAtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusAtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: StatusAtendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusAtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusAtendimento model
   */
  readonly fields: StatusAtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusAtendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusAtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimentos<T extends StatusAtendimento$atendimentosArgs<ExtArgs> = {}>(args?: Subset<T, StatusAtendimento$atendimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StatusAtendimento model
   */
  interface StatusAtendimentoFieldRefs {
    readonly id_Status: FieldRef<"StatusAtendimento", 'Int'>
    readonly nome: FieldRef<"StatusAtendimento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusAtendimento findUnique
   */
  export type StatusAtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtendimento to fetch.
     */
    where: StatusAtendimentoWhereUniqueInput
  }

  /**
   * StatusAtendimento findUniqueOrThrow
   */
  export type StatusAtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtendimento to fetch.
     */
    where: StatusAtendimentoWhereUniqueInput
  }

  /**
   * StatusAtendimento findFirst
   */
  export type StatusAtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtendimento to fetch.
     */
    where?: StatusAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusAtendimentos to fetch.
     */
    orderBy?: StatusAtendimentoOrderByWithRelationInput | StatusAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusAtendimentos.
     */
    cursor?: StatusAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusAtendimentos.
     */
    distinct?: StatusAtendimentoScalarFieldEnum | StatusAtendimentoScalarFieldEnum[]
  }

  /**
   * StatusAtendimento findFirstOrThrow
   */
  export type StatusAtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtendimento to fetch.
     */
    where?: StatusAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusAtendimentos to fetch.
     */
    orderBy?: StatusAtendimentoOrderByWithRelationInput | StatusAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusAtendimentos.
     */
    cursor?: StatusAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusAtendimentos.
     */
    distinct?: StatusAtendimentoScalarFieldEnum | StatusAtendimentoScalarFieldEnum[]
  }

  /**
   * StatusAtendimento findMany
   */
  export type StatusAtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which StatusAtendimentos to fetch.
     */
    where?: StatusAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusAtendimentos to fetch.
     */
    orderBy?: StatusAtendimentoOrderByWithRelationInput | StatusAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusAtendimentos.
     */
    cursor?: StatusAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusAtendimentos.
     */
    skip?: number
    distinct?: StatusAtendimentoScalarFieldEnum | StatusAtendimentoScalarFieldEnum[]
  }

  /**
   * StatusAtendimento create
   */
  export type StatusAtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusAtendimento.
     */
    data: XOR<StatusAtendimentoCreateInput, StatusAtendimentoUncheckedCreateInput>
  }

  /**
   * StatusAtendimento createMany
   */
  export type StatusAtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusAtendimentos.
     */
    data: StatusAtendimentoCreateManyInput | StatusAtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusAtendimento createManyAndReturn
   */
  export type StatusAtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many StatusAtendimentos.
     */
    data: StatusAtendimentoCreateManyInput | StatusAtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusAtendimento update
   */
  export type StatusAtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusAtendimento.
     */
    data: XOR<StatusAtendimentoUpdateInput, StatusAtendimentoUncheckedUpdateInput>
    /**
     * Choose, which StatusAtendimento to update.
     */
    where: StatusAtendimentoWhereUniqueInput
  }

  /**
   * StatusAtendimento updateMany
   */
  export type StatusAtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusAtendimentos.
     */
    data: XOR<StatusAtendimentoUpdateManyMutationInput, StatusAtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which StatusAtendimentos to update
     */
    where?: StatusAtendimentoWhereInput
    /**
     * Limit how many StatusAtendimentos to update.
     */
    limit?: number
  }

  /**
   * StatusAtendimento updateManyAndReturn
   */
  export type StatusAtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update StatusAtendimentos.
     */
    data: XOR<StatusAtendimentoUpdateManyMutationInput, StatusAtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which StatusAtendimentos to update
     */
    where?: StatusAtendimentoWhereInput
    /**
     * Limit how many StatusAtendimentos to update.
     */
    limit?: number
  }

  /**
   * StatusAtendimento upsert
   */
  export type StatusAtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusAtendimento to update in case it exists.
     */
    where: StatusAtendimentoWhereUniqueInput
    /**
     * In case the StatusAtendimento found by the `where` argument doesn't exist, create a new StatusAtendimento with this data.
     */
    create: XOR<StatusAtendimentoCreateInput, StatusAtendimentoUncheckedCreateInput>
    /**
     * In case the StatusAtendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusAtendimentoUpdateInput, StatusAtendimentoUncheckedUpdateInput>
  }

  /**
   * StatusAtendimento delete
   */
  export type StatusAtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
    /**
     * Filter which StatusAtendimento to delete.
     */
    where: StatusAtendimentoWhereUniqueInput
  }

  /**
   * StatusAtendimento deleteMany
   */
  export type StatusAtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusAtendimentos to delete
     */
    where?: StatusAtendimentoWhereInput
    /**
     * Limit how many StatusAtendimentos to delete.
     */
    limit?: number
  }

  /**
   * StatusAtendimento.atendimentos
   */
  export type StatusAtendimento$atendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * StatusAtendimento without action
   */
  export type StatusAtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusAtendimento
     */
    select?: StatusAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusAtendimento
     */
    omit?: StatusAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusAtendimentoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id_User: 'id_User',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash',
    roleId: 'roleId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id_Role: 'id_Role',
    role: 'role',
    descricao: 'descricao'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id_Paciente: 'id_Paciente',
    nomeRegistro: 'nomeRegistro',
    nomeSocial: 'nomeSocial',
    dataNascimento: 'dataNascimento',
    id_Genero: 'id_Genero',
    id_CorPele: 'id_CorPele',
    id_Escolaridade: 'id_Escolaridade',
    telefonePessoal: 'telefonePessoal',
    contatoEmergencia: 'contatoEmergencia',
    enderecoRua: 'enderecoRua',
    enderecoNumero: 'enderecoNumero',
    enderecoBairro: 'enderecoBairro',
    enderecoCidade: 'enderecoCidade',
    enderecoEstado: 'enderecoEstado',
    enderecoCEP: 'enderecoCEP',
    dataInicioTratamento: 'dataInicioTratamento',
    id_Estagiario_Responsavel: 'id_Estagiario_Responsavel',
    id_Supervisor_Responsavel: 'id_Supervisor_Responsavel'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const DocumentoUsuarioScalarFieldEnum: {
    id_Documento: 'id_Documento',
    id_User: 'id_User',
    nomeArquivo: 'nomeArquivo',
    caminhoArquivo: 'caminhoArquivo',
    dataUpload: 'dataUpload'
  };

  export type DocumentoUsuarioScalarFieldEnum = (typeof DocumentoUsuarioScalarFieldEnum)[keyof typeof DocumentoUsuarioScalarFieldEnum]


  export const RelatorioAltaScalarFieldEnum: {
    id_Documento: 'id_Documento',
    id_Paciente: 'id_Paciente',
    id_Estagiario: 'id_Estagiario',
    id_Supervisor: 'id_Supervisor',
    conteudo: 'conteudo',
    dataEmissao: 'dataEmissao',
    status: 'status'
  };

  export type RelatorioAltaScalarFieldEnum = (typeof RelatorioAltaScalarFieldEnum)[keyof typeof RelatorioAltaScalarFieldEnum]


  export const LogAuditoriaScalarFieldEnum: {
    id_Log: 'id_Log',
    id_Usuario_Executor: 'id_Usuario_Executor',
    id_Paciente: 'id_Paciente',
    tipoAcao: 'tipoAcao',
    acessoEm: 'acessoEm',
    detalhes: 'detalhes'
  };

  export type LogAuditoriaScalarFieldEnum = (typeof LogAuditoriaScalarFieldEnum)[keyof typeof LogAuditoriaScalarFieldEnum]


  export const AtendimentoScalarFieldEnum: {
    id_Atendimento: 'id_Atendimento',
    dataHoraInicio: 'dataHoraInicio',
    dataHoraFim: 'dataHoraFim',
    id_Paciente: 'id_Paciente',
    id_Estagiario_Executor: 'id_Estagiario_Executor',
    id_Supervisor_Executor: 'id_Supervisor_Executor',
    id_Status: 'id_Status',
    observacoes: 'observacoes'
  };

  export type AtendimentoScalarFieldEnum = (typeof AtendimentoScalarFieldEnum)[keyof typeof AtendimentoScalarFieldEnum]


  export const ListaEsperaScalarFieldEnum: {
    id_Lista: 'id_Lista',
    nomeRegistro: 'nomeRegistro',
    nomeSocial: 'nomeSocial',
    dataNascimento: 'dataNascimento',
    telefonePessoal: 'telefonePessoal',
    contatoEmergencia: 'contatoEmergencia',
    enderecoRua: 'enderecoRua',
    enderecoNumero: 'enderecoNumero',
    enderecoBairro: 'enderecoBairro',
    enderecoCidade: 'enderecoCidade',
    enderecoEstado: 'enderecoEstado',
    enderecoCEP: 'enderecoCEP',
    createdAt: 'createdAt',
    id_Genero: 'id_Genero',
    id_CorPele: 'id_CorPele',
    id_Escolaridade: 'id_Escolaridade'
  };

  export type ListaEsperaScalarFieldEnum = (typeof ListaEsperaScalarFieldEnum)[keyof typeof ListaEsperaScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    id_Genero: 'id_Genero',
    nome: 'nome'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const CorPeleScalarFieldEnum: {
    id_CorPele: 'id_CorPele',
    nome: 'nome'
  };

  export type CorPeleScalarFieldEnum = (typeof CorPeleScalarFieldEnum)[keyof typeof CorPeleScalarFieldEnum]


  export const EscolaridadeScalarFieldEnum: {
    id_Escolaridade: 'id_Escolaridade',
    nome: 'nome'
  };

  export type EscolaridadeScalarFieldEnum = (typeof EscolaridadeScalarFieldEnum)[keyof typeof EscolaridadeScalarFieldEnum]


  export const StatusAtendimentoScalarFieldEnum: {
    id_Status: 'id_Status',
    nome: 'nome'
  };

  export type StatusAtendimentoScalarFieldEnum = (typeof StatusAtendimentoScalarFieldEnum)[keyof typeof StatusAtendimentoScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusRelatorioEnum'
   */
  export type EnumStatusRelatorioEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRelatorioEnum'>
    


  /**
   * Reference to a field of type 'StatusRelatorioEnum[]'
   */
  export type ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRelatorioEnum[]'>
    


  /**
   * Reference to a field of type 'TipoAcaoEnum'
   */
  export type EnumTipoAcaoEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAcaoEnum'>
    


  /**
   * Reference to a field of type 'TipoAcaoEnum[]'
   */
  export type ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAcaoEnum[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_User?: UuidFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    roleId?: UuidFilter<"Usuario"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    documentosUsuario?: DocumentoUsuarioListRelationFilter
    logsExecutados?: LogAuditoriaListRelationFilter
    atendimentoComoEstagiario?: AtendimentoListRelationFilter
    atendimentoComoSupervisor?: AtendimentoListRelationFilter
    relatorioComoEstagiario?: RelatorioAltaListRelationFilter
    relatorioComoSupervisor?: RelatorioAltaListRelationFilter
    pacientesComoEstagiario?: PacienteListRelationFilter
    pacientesComoSupervisor?: PacienteListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_User?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    documentosUsuario?: DocumentoUsuarioOrderByRelationAggregateInput
    logsExecutados?: LogAuditoriaOrderByRelationAggregateInput
    atendimentoComoEstagiario?: AtendimentoOrderByRelationAggregateInput
    atendimentoComoSupervisor?: AtendimentoOrderByRelationAggregateInput
    relatorioComoEstagiario?: RelatorioAltaOrderByRelationAggregateInput
    relatorioComoSupervisor?: RelatorioAltaOrderByRelationAggregateInput
    pacientesComoEstagiario?: PacienteOrderByRelationAggregateInput
    pacientesComoSupervisor?: PacienteOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_User?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    roleId?: UuidFilter<"Usuario"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    documentosUsuario?: DocumentoUsuarioListRelationFilter
    logsExecutados?: LogAuditoriaListRelationFilter
    atendimentoComoEstagiario?: AtendimentoListRelationFilter
    atendimentoComoSupervisor?: AtendimentoListRelationFilter
    relatorioComoEstagiario?: RelatorioAltaListRelationFilter
    relatorioComoSupervisor?: RelatorioAltaListRelationFilter
    pacientesComoEstagiario?: PacienteListRelationFilter
    pacientesComoSupervisor?: PacienteListRelationFilter
  }, "id_User" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id_User?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    roleId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_User?: UuidWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senhaHash?: StringWithAggregatesFilter<"Usuario"> | string
    roleId?: UuidWithAggregatesFilter<"Usuario"> | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id_Role?: UuidFilter<"Role"> | string
    role?: StringFilter<"Role"> | string
    descricao?: StringFilter<"Role"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id_Role?: SortOrder
    role?: SortOrder
    descricao?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id_Role?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    role?: StringFilter<"Role"> | string
    descricao?: StringFilter<"Role"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id_Role">

  export type RoleOrderByWithAggregationInput = {
    id_Role?: SortOrder
    role?: SortOrder
    descricao?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id_Role?: UuidWithAggregatesFilter<"Role"> | string
    role?: StringWithAggregatesFilter<"Role"> | string
    descricao?: StringWithAggregatesFilter<"Role"> | string
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id_Paciente?: UuidFilter<"Paciente"> | string
    nomeRegistro?: StringFilter<"Paciente"> | string
    nomeSocial?: StringNullableFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    id_Genero?: IntFilter<"Paciente"> | number
    id_CorPele?: IntFilter<"Paciente"> | number
    id_Escolaridade?: IntFilter<"Paciente"> | number
    telefonePessoal?: StringFilter<"Paciente"> | string
    contatoEmergencia?: StringFilter<"Paciente"> | string
    enderecoRua?: StringFilter<"Paciente"> | string
    enderecoNumero?: StringFilter<"Paciente"> | string
    enderecoBairro?: StringFilter<"Paciente"> | string
    enderecoCidade?: StringFilter<"Paciente"> | string
    enderecoEstado?: StringFilter<"Paciente"> | string
    enderecoCEP?: StringFilter<"Paciente"> | string
    dataInicioTratamento?: DateTimeFilter<"Paciente"> | Date | string
    id_Estagiario_Responsavel?: UuidFilter<"Paciente"> | string
    id_Supervisor_Responsavel?: UuidFilter<"Paciente"> | string
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    corPele?: XOR<CorPeleScalarRelationFilter, CorPeleWhereInput>
    escolaridade?: XOR<EscolaridadeScalarRelationFilter, EscolaridadeWhereInput>
    estagiarioResponsavel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    supervisorResponsavel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    relatoriosAlta?: RelatorioAltaListRelationFilter
    logsAuditoria?: LogAuditoriaListRelationFilter
    atendimentos?: AtendimentoListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id_Paciente?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    dataNascimento?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    dataInicioTratamento?: SortOrder
    id_Estagiario_Responsavel?: SortOrder
    id_Supervisor_Responsavel?: SortOrder
    genero?: GeneroOrderByWithRelationInput
    corPele?: CorPeleOrderByWithRelationInput
    escolaridade?: EscolaridadeOrderByWithRelationInput
    estagiarioResponsavel?: UsuarioOrderByWithRelationInput
    supervisorResponsavel?: UsuarioOrderByWithRelationInput
    relatoriosAlta?: RelatorioAltaOrderByRelationAggregateInput
    logsAuditoria?: LogAuditoriaOrderByRelationAggregateInput
    atendimentos?: AtendimentoOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id_Paciente?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nomeRegistro?: StringFilter<"Paciente"> | string
    nomeSocial?: StringNullableFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    id_Genero?: IntFilter<"Paciente"> | number
    id_CorPele?: IntFilter<"Paciente"> | number
    id_Escolaridade?: IntFilter<"Paciente"> | number
    telefonePessoal?: StringFilter<"Paciente"> | string
    contatoEmergencia?: StringFilter<"Paciente"> | string
    enderecoRua?: StringFilter<"Paciente"> | string
    enderecoNumero?: StringFilter<"Paciente"> | string
    enderecoBairro?: StringFilter<"Paciente"> | string
    enderecoCidade?: StringFilter<"Paciente"> | string
    enderecoEstado?: StringFilter<"Paciente"> | string
    enderecoCEP?: StringFilter<"Paciente"> | string
    dataInicioTratamento?: DateTimeFilter<"Paciente"> | Date | string
    id_Estagiario_Responsavel?: UuidFilter<"Paciente"> | string
    id_Supervisor_Responsavel?: UuidFilter<"Paciente"> | string
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    corPele?: XOR<CorPeleScalarRelationFilter, CorPeleWhereInput>
    escolaridade?: XOR<EscolaridadeScalarRelationFilter, EscolaridadeWhereInput>
    estagiarioResponsavel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    supervisorResponsavel?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    relatoriosAlta?: RelatorioAltaListRelationFilter
    logsAuditoria?: LogAuditoriaListRelationFilter
    atendimentos?: AtendimentoListRelationFilter
  }, "id_Paciente">

  export type PacienteOrderByWithAggregationInput = {
    id_Paciente?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    dataNascimento?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    dataInicioTratamento?: SortOrder
    id_Estagiario_Responsavel?: SortOrder
    id_Supervisor_Responsavel?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id_Paciente?: UuidWithAggregatesFilter<"Paciente"> | string
    nomeRegistro?: StringWithAggregatesFilter<"Paciente"> | string
    nomeSocial?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    id_Genero?: IntWithAggregatesFilter<"Paciente"> | number
    id_CorPele?: IntWithAggregatesFilter<"Paciente"> | number
    id_Escolaridade?: IntWithAggregatesFilter<"Paciente"> | number
    telefonePessoal?: StringWithAggregatesFilter<"Paciente"> | string
    contatoEmergencia?: StringWithAggregatesFilter<"Paciente"> | string
    enderecoRua?: StringWithAggregatesFilter<"Paciente"> | string
    enderecoNumero?: StringWithAggregatesFilter<"Paciente"> | string
    enderecoBairro?: StringWithAggregatesFilter<"Paciente"> | string
    enderecoCidade?: StringWithAggregatesFilter<"Paciente"> | string
    enderecoEstado?: StringWithAggregatesFilter<"Paciente"> | string
    enderecoCEP?: StringWithAggregatesFilter<"Paciente"> | string
    dataInicioTratamento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    id_Estagiario_Responsavel?: UuidWithAggregatesFilter<"Paciente"> | string
    id_Supervisor_Responsavel?: UuidWithAggregatesFilter<"Paciente"> | string
  }

  export type DocumentoUsuarioWhereInput = {
    AND?: DocumentoUsuarioWhereInput | DocumentoUsuarioWhereInput[]
    OR?: DocumentoUsuarioWhereInput[]
    NOT?: DocumentoUsuarioWhereInput | DocumentoUsuarioWhereInput[]
    id_Documento?: UuidFilter<"DocumentoUsuario"> | string
    id_User?: UuidFilter<"DocumentoUsuario"> | string
    nomeArquivo?: StringFilter<"DocumentoUsuario"> | string
    caminhoArquivo?: StringFilter<"DocumentoUsuario"> | string
    dataUpload?: DateTimeFilter<"DocumentoUsuario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type DocumentoUsuarioOrderByWithRelationInput = {
    id_Documento?: SortOrder
    id_User?: SortOrder
    nomeArquivo?: SortOrder
    caminhoArquivo?: SortOrder
    dataUpload?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type DocumentoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_Documento?: string
    AND?: DocumentoUsuarioWhereInput | DocumentoUsuarioWhereInput[]
    OR?: DocumentoUsuarioWhereInput[]
    NOT?: DocumentoUsuarioWhereInput | DocumentoUsuarioWhereInput[]
    id_User?: UuidFilter<"DocumentoUsuario"> | string
    nomeArquivo?: StringFilter<"DocumentoUsuario"> | string
    caminhoArquivo?: StringFilter<"DocumentoUsuario"> | string
    dataUpload?: DateTimeFilter<"DocumentoUsuario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_Documento">

  export type DocumentoUsuarioOrderByWithAggregationInput = {
    id_Documento?: SortOrder
    id_User?: SortOrder
    nomeArquivo?: SortOrder
    caminhoArquivo?: SortOrder
    dataUpload?: SortOrder
    _count?: DocumentoUsuarioCountOrderByAggregateInput
    _max?: DocumentoUsuarioMaxOrderByAggregateInput
    _min?: DocumentoUsuarioMinOrderByAggregateInput
  }

  export type DocumentoUsuarioScalarWhereWithAggregatesInput = {
    AND?: DocumentoUsuarioScalarWhereWithAggregatesInput | DocumentoUsuarioScalarWhereWithAggregatesInput[]
    OR?: DocumentoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: DocumentoUsuarioScalarWhereWithAggregatesInput | DocumentoUsuarioScalarWhereWithAggregatesInput[]
    id_Documento?: UuidWithAggregatesFilter<"DocumentoUsuario"> | string
    id_User?: UuidWithAggregatesFilter<"DocumentoUsuario"> | string
    nomeArquivo?: StringWithAggregatesFilter<"DocumentoUsuario"> | string
    caminhoArquivo?: StringWithAggregatesFilter<"DocumentoUsuario"> | string
    dataUpload?: DateTimeWithAggregatesFilter<"DocumentoUsuario"> | Date | string
  }

  export type RelatorioAltaWhereInput = {
    AND?: RelatorioAltaWhereInput | RelatorioAltaWhereInput[]
    OR?: RelatorioAltaWhereInput[]
    NOT?: RelatorioAltaWhereInput | RelatorioAltaWhereInput[]
    id_Documento?: UuidFilter<"RelatorioAlta"> | string
    id_Paciente?: UuidFilter<"RelatorioAlta"> | string
    id_Estagiario?: UuidFilter<"RelatorioAlta"> | string
    id_Supervisor?: UuidFilter<"RelatorioAlta"> | string
    conteudo?: StringFilter<"RelatorioAlta"> | string
    dataEmissao?: DateTimeFilter<"RelatorioAlta"> | Date | string
    status?: EnumStatusRelatorioEnumFilter<"RelatorioAlta"> | $Enums.StatusRelatorioEnum
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    estagiario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    supervisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RelatorioAltaOrderByWithRelationInput = {
    id_Documento?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario?: SortOrder
    id_Supervisor?: SortOrder
    conteudo?: SortOrder
    dataEmissao?: SortOrder
    status?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    estagiario?: UsuarioOrderByWithRelationInput
    supervisor?: UsuarioOrderByWithRelationInput
  }

  export type RelatorioAltaWhereUniqueInput = Prisma.AtLeast<{
    id_Documento?: string
    AND?: RelatorioAltaWhereInput | RelatorioAltaWhereInput[]
    OR?: RelatorioAltaWhereInput[]
    NOT?: RelatorioAltaWhereInput | RelatorioAltaWhereInput[]
    id_Paciente?: UuidFilter<"RelatorioAlta"> | string
    id_Estagiario?: UuidFilter<"RelatorioAlta"> | string
    id_Supervisor?: UuidFilter<"RelatorioAlta"> | string
    conteudo?: StringFilter<"RelatorioAlta"> | string
    dataEmissao?: DateTimeFilter<"RelatorioAlta"> | Date | string
    status?: EnumStatusRelatorioEnumFilter<"RelatorioAlta"> | $Enums.StatusRelatorioEnum
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    estagiario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    supervisor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_Documento">

  export type RelatorioAltaOrderByWithAggregationInput = {
    id_Documento?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario?: SortOrder
    id_Supervisor?: SortOrder
    conteudo?: SortOrder
    dataEmissao?: SortOrder
    status?: SortOrder
    _count?: RelatorioAltaCountOrderByAggregateInput
    _max?: RelatorioAltaMaxOrderByAggregateInput
    _min?: RelatorioAltaMinOrderByAggregateInput
  }

  export type RelatorioAltaScalarWhereWithAggregatesInput = {
    AND?: RelatorioAltaScalarWhereWithAggregatesInput | RelatorioAltaScalarWhereWithAggregatesInput[]
    OR?: RelatorioAltaScalarWhereWithAggregatesInput[]
    NOT?: RelatorioAltaScalarWhereWithAggregatesInput | RelatorioAltaScalarWhereWithAggregatesInput[]
    id_Documento?: UuidWithAggregatesFilter<"RelatorioAlta"> | string
    id_Paciente?: UuidWithAggregatesFilter<"RelatorioAlta"> | string
    id_Estagiario?: UuidWithAggregatesFilter<"RelatorioAlta"> | string
    id_Supervisor?: UuidWithAggregatesFilter<"RelatorioAlta"> | string
    conteudo?: StringWithAggregatesFilter<"RelatorioAlta"> | string
    dataEmissao?: DateTimeWithAggregatesFilter<"RelatorioAlta"> | Date | string
    status?: EnumStatusRelatorioEnumWithAggregatesFilter<"RelatorioAlta"> | $Enums.StatusRelatorioEnum
  }

  export type LogAuditoriaWhereInput = {
    AND?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    OR?: LogAuditoriaWhereInput[]
    NOT?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    id_Log?: UuidFilter<"LogAuditoria"> | string
    id_Usuario_Executor?: UuidFilter<"LogAuditoria"> | string
    id_Paciente?: UuidFilter<"LogAuditoria"> | string
    tipoAcao?: EnumTipoAcaoEnumFilter<"LogAuditoria"> | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFilter<"LogAuditoria"> | Date | string
    detalhes?: StringFilter<"LogAuditoria"> | string
    usuarioExecutor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }

  export type LogAuditoriaOrderByWithRelationInput = {
    id_Log?: SortOrder
    id_Usuario_Executor?: SortOrder
    id_Paciente?: SortOrder
    tipoAcao?: SortOrder
    acessoEm?: SortOrder
    detalhes?: SortOrder
    usuarioExecutor?: UsuarioOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
  }

  export type LogAuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id_Log?: string
    AND?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    OR?: LogAuditoriaWhereInput[]
    NOT?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    id_Usuario_Executor?: UuidFilter<"LogAuditoria"> | string
    id_Paciente?: UuidFilter<"LogAuditoria"> | string
    tipoAcao?: EnumTipoAcaoEnumFilter<"LogAuditoria"> | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFilter<"LogAuditoria"> | Date | string
    detalhes?: StringFilter<"LogAuditoria"> | string
    usuarioExecutor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }, "id_Log">

  export type LogAuditoriaOrderByWithAggregationInput = {
    id_Log?: SortOrder
    id_Usuario_Executor?: SortOrder
    id_Paciente?: SortOrder
    tipoAcao?: SortOrder
    acessoEm?: SortOrder
    detalhes?: SortOrder
    _count?: LogAuditoriaCountOrderByAggregateInput
    _max?: LogAuditoriaMaxOrderByAggregateInput
    _min?: LogAuditoriaMinOrderByAggregateInput
  }

  export type LogAuditoriaScalarWhereWithAggregatesInput = {
    AND?: LogAuditoriaScalarWhereWithAggregatesInput | LogAuditoriaScalarWhereWithAggregatesInput[]
    OR?: LogAuditoriaScalarWhereWithAggregatesInput[]
    NOT?: LogAuditoriaScalarWhereWithAggregatesInput | LogAuditoriaScalarWhereWithAggregatesInput[]
    id_Log?: UuidWithAggregatesFilter<"LogAuditoria"> | string
    id_Usuario_Executor?: UuidWithAggregatesFilter<"LogAuditoria"> | string
    id_Paciente?: UuidWithAggregatesFilter<"LogAuditoria"> | string
    tipoAcao?: EnumTipoAcaoEnumWithAggregatesFilter<"LogAuditoria"> | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeWithAggregatesFilter<"LogAuditoria"> | Date | string
    detalhes?: StringWithAggregatesFilter<"LogAuditoria"> | string
  }

  export type AtendimentoWhereInput = {
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    id_Atendimento?: UuidFilter<"Atendimento"> | string
    dataHoraInicio?: DateTimeFilter<"Atendimento"> | Date | string
    dataHoraFim?: DateTimeFilter<"Atendimento"> | Date | string
    id_Paciente?: UuidFilter<"Atendimento"> | string
    id_Estagiario_Executor?: UuidFilter<"Atendimento"> | string
    id_Supervisor_Executor?: UuidFilter<"Atendimento"> | string
    id_Status?: IntFilter<"Atendimento"> | number
    observacoes?: StringFilter<"Atendimento"> | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    estagiarioExecutor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    supervisorExecutor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    status?: XOR<StatusAtendimentoScalarRelationFilter, StatusAtendimentoWhereInput>
  }

  export type AtendimentoOrderByWithRelationInput = {
    id_Atendimento?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario_Executor?: SortOrder
    id_Supervisor_Executor?: SortOrder
    id_Status?: SortOrder
    observacoes?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    estagiarioExecutor?: UsuarioOrderByWithRelationInput
    supervisorExecutor?: UsuarioOrderByWithRelationInput
    status?: StatusAtendimentoOrderByWithRelationInput
  }

  export type AtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id_Atendimento?: string
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    dataHoraInicio?: DateTimeFilter<"Atendimento"> | Date | string
    dataHoraFim?: DateTimeFilter<"Atendimento"> | Date | string
    id_Paciente?: UuidFilter<"Atendimento"> | string
    id_Estagiario_Executor?: UuidFilter<"Atendimento"> | string
    id_Supervisor_Executor?: UuidFilter<"Atendimento"> | string
    id_Status?: IntFilter<"Atendimento"> | number
    observacoes?: StringFilter<"Atendimento"> | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    estagiarioExecutor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    supervisorExecutor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    status?: XOR<StatusAtendimentoScalarRelationFilter, StatusAtendimentoWhereInput>
  }, "id_Atendimento">

  export type AtendimentoOrderByWithAggregationInput = {
    id_Atendimento?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario_Executor?: SortOrder
    id_Supervisor_Executor?: SortOrder
    id_Status?: SortOrder
    observacoes?: SortOrder
    _count?: AtendimentoCountOrderByAggregateInput
    _avg?: AtendimentoAvgOrderByAggregateInput
    _max?: AtendimentoMaxOrderByAggregateInput
    _min?: AtendimentoMinOrderByAggregateInput
    _sum?: AtendimentoSumOrderByAggregateInput
  }

  export type AtendimentoScalarWhereWithAggregatesInput = {
    AND?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    OR?: AtendimentoScalarWhereWithAggregatesInput[]
    NOT?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    id_Atendimento?: UuidWithAggregatesFilter<"Atendimento"> | string
    dataHoraInicio?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
    dataHoraFim?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
    id_Paciente?: UuidWithAggregatesFilter<"Atendimento"> | string
    id_Estagiario_Executor?: UuidWithAggregatesFilter<"Atendimento"> | string
    id_Supervisor_Executor?: UuidWithAggregatesFilter<"Atendimento"> | string
    id_Status?: IntWithAggregatesFilter<"Atendimento"> | number
    observacoes?: StringWithAggregatesFilter<"Atendimento"> | string
  }

  export type ListaEsperaWhereInput = {
    AND?: ListaEsperaWhereInput | ListaEsperaWhereInput[]
    OR?: ListaEsperaWhereInput[]
    NOT?: ListaEsperaWhereInput | ListaEsperaWhereInput[]
    id_Lista?: UuidFilter<"ListaEspera"> | string
    nomeRegistro?: StringFilter<"ListaEspera"> | string
    nomeSocial?: StringNullableFilter<"ListaEspera"> | string | null
    dataNascimento?: DateTimeFilter<"ListaEspera"> | Date | string
    telefonePessoal?: StringFilter<"ListaEspera"> | string
    contatoEmergencia?: StringFilter<"ListaEspera"> | string
    enderecoRua?: StringFilter<"ListaEspera"> | string
    enderecoNumero?: StringFilter<"ListaEspera"> | string
    enderecoBairro?: StringFilter<"ListaEspera"> | string
    enderecoCidade?: StringFilter<"ListaEspera"> | string
    enderecoEstado?: StringFilter<"ListaEspera"> | string
    enderecoCEP?: StringFilter<"ListaEspera"> | string
    createdAt?: DateTimeFilter<"ListaEspera"> | Date | string
    id_Genero?: IntFilter<"ListaEspera"> | number
    id_CorPele?: IntFilter<"ListaEspera"> | number
    id_Escolaridade?: IntFilter<"ListaEspera"> | number
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    corPele?: XOR<CorPeleScalarRelationFilter, CorPeleWhereInput>
    escolaridade?: XOR<EscolaridadeScalarRelationFilter, EscolaridadeWhereInput>
  }

  export type ListaEsperaOrderByWithRelationInput = {
    id_Lista?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    dataNascimento?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    createdAt?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
    genero?: GeneroOrderByWithRelationInput
    corPele?: CorPeleOrderByWithRelationInput
    escolaridade?: EscolaridadeOrderByWithRelationInput
  }

  export type ListaEsperaWhereUniqueInput = Prisma.AtLeast<{
    id_Lista?: string
    AND?: ListaEsperaWhereInput | ListaEsperaWhereInput[]
    OR?: ListaEsperaWhereInput[]
    NOT?: ListaEsperaWhereInput | ListaEsperaWhereInput[]
    nomeRegistro?: StringFilter<"ListaEspera"> | string
    nomeSocial?: StringNullableFilter<"ListaEspera"> | string | null
    dataNascimento?: DateTimeFilter<"ListaEspera"> | Date | string
    telefonePessoal?: StringFilter<"ListaEspera"> | string
    contatoEmergencia?: StringFilter<"ListaEspera"> | string
    enderecoRua?: StringFilter<"ListaEspera"> | string
    enderecoNumero?: StringFilter<"ListaEspera"> | string
    enderecoBairro?: StringFilter<"ListaEspera"> | string
    enderecoCidade?: StringFilter<"ListaEspera"> | string
    enderecoEstado?: StringFilter<"ListaEspera"> | string
    enderecoCEP?: StringFilter<"ListaEspera"> | string
    createdAt?: DateTimeFilter<"ListaEspera"> | Date | string
    id_Genero?: IntFilter<"ListaEspera"> | number
    id_CorPele?: IntFilter<"ListaEspera"> | number
    id_Escolaridade?: IntFilter<"ListaEspera"> | number
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    corPele?: XOR<CorPeleScalarRelationFilter, CorPeleWhereInput>
    escolaridade?: XOR<EscolaridadeScalarRelationFilter, EscolaridadeWhereInput>
  }, "id_Lista">

  export type ListaEsperaOrderByWithAggregationInput = {
    id_Lista?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrderInput | SortOrder
    dataNascimento?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    createdAt?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
    _count?: ListaEsperaCountOrderByAggregateInput
    _avg?: ListaEsperaAvgOrderByAggregateInput
    _max?: ListaEsperaMaxOrderByAggregateInput
    _min?: ListaEsperaMinOrderByAggregateInput
    _sum?: ListaEsperaSumOrderByAggregateInput
  }

  export type ListaEsperaScalarWhereWithAggregatesInput = {
    AND?: ListaEsperaScalarWhereWithAggregatesInput | ListaEsperaScalarWhereWithAggregatesInput[]
    OR?: ListaEsperaScalarWhereWithAggregatesInput[]
    NOT?: ListaEsperaScalarWhereWithAggregatesInput | ListaEsperaScalarWhereWithAggregatesInput[]
    id_Lista?: UuidWithAggregatesFilter<"ListaEspera"> | string
    nomeRegistro?: StringWithAggregatesFilter<"ListaEspera"> | string
    nomeSocial?: StringNullableWithAggregatesFilter<"ListaEspera"> | string | null
    dataNascimento?: DateTimeWithAggregatesFilter<"ListaEspera"> | Date | string
    telefonePessoal?: StringWithAggregatesFilter<"ListaEspera"> | string
    contatoEmergencia?: StringWithAggregatesFilter<"ListaEspera"> | string
    enderecoRua?: StringWithAggregatesFilter<"ListaEspera"> | string
    enderecoNumero?: StringWithAggregatesFilter<"ListaEspera"> | string
    enderecoBairro?: StringWithAggregatesFilter<"ListaEspera"> | string
    enderecoCidade?: StringWithAggregatesFilter<"ListaEspera"> | string
    enderecoEstado?: StringWithAggregatesFilter<"ListaEspera"> | string
    enderecoCEP?: StringWithAggregatesFilter<"ListaEspera"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ListaEspera"> | Date | string
    id_Genero?: IntWithAggregatesFilter<"ListaEspera"> | number
    id_CorPele?: IntWithAggregatesFilter<"ListaEspera"> | number
    id_Escolaridade?: IntWithAggregatesFilter<"ListaEspera"> | number
  }

  export type GeneroWhereInput = {
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    id_Genero?: IntFilter<"Genero"> | number
    nome?: StringFilter<"Genero"> | string
    pacientes?: PacienteListRelationFilter
    listaEspera?: ListaEsperaListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    id_Genero?: SortOrder
    nome?: SortOrder
    pacientes?: PacienteOrderByRelationAggregateInput
    listaEspera?: ListaEsperaOrderByRelationAggregateInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    id_Genero?: number
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    nome?: StringFilter<"Genero"> | string
    pacientes?: PacienteListRelationFilter
    listaEspera?: ListaEsperaListRelationFilter
  }, "id_Genero">

  export type GeneroOrderByWithAggregationInput = {
    id_Genero?: SortOrder
    nome?: SortOrder
    _count?: GeneroCountOrderByAggregateInput
    _avg?: GeneroAvgOrderByAggregateInput
    _max?: GeneroMaxOrderByAggregateInput
    _min?: GeneroMinOrderByAggregateInput
    _sum?: GeneroSumOrderByAggregateInput
  }

  export type GeneroScalarWhereWithAggregatesInput = {
    AND?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    OR?: GeneroScalarWhereWithAggregatesInput[]
    NOT?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    id_Genero?: IntWithAggregatesFilter<"Genero"> | number
    nome?: StringWithAggregatesFilter<"Genero"> | string
  }

  export type CorPeleWhereInput = {
    AND?: CorPeleWhereInput | CorPeleWhereInput[]
    OR?: CorPeleWhereInput[]
    NOT?: CorPeleWhereInput | CorPeleWhereInput[]
    id_CorPele?: IntFilter<"CorPele"> | number
    nome?: StringFilter<"CorPele"> | string
    pacientes?: PacienteListRelationFilter
    listaEspera?: ListaEsperaListRelationFilter
  }

  export type CorPeleOrderByWithRelationInput = {
    id_CorPele?: SortOrder
    nome?: SortOrder
    pacientes?: PacienteOrderByRelationAggregateInput
    listaEspera?: ListaEsperaOrderByRelationAggregateInput
  }

  export type CorPeleWhereUniqueInput = Prisma.AtLeast<{
    id_CorPele?: number
    AND?: CorPeleWhereInput | CorPeleWhereInput[]
    OR?: CorPeleWhereInput[]
    NOT?: CorPeleWhereInput | CorPeleWhereInput[]
    nome?: StringFilter<"CorPele"> | string
    pacientes?: PacienteListRelationFilter
    listaEspera?: ListaEsperaListRelationFilter
  }, "id_CorPele">

  export type CorPeleOrderByWithAggregationInput = {
    id_CorPele?: SortOrder
    nome?: SortOrder
    _count?: CorPeleCountOrderByAggregateInput
    _avg?: CorPeleAvgOrderByAggregateInput
    _max?: CorPeleMaxOrderByAggregateInput
    _min?: CorPeleMinOrderByAggregateInput
    _sum?: CorPeleSumOrderByAggregateInput
  }

  export type CorPeleScalarWhereWithAggregatesInput = {
    AND?: CorPeleScalarWhereWithAggregatesInput | CorPeleScalarWhereWithAggregatesInput[]
    OR?: CorPeleScalarWhereWithAggregatesInput[]
    NOT?: CorPeleScalarWhereWithAggregatesInput | CorPeleScalarWhereWithAggregatesInput[]
    id_CorPele?: IntWithAggregatesFilter<"CorPele"> | number
    nome?: StringWithAggregatesFilter<"CorPele"> | string
  }

  export type EscolaridadeWhereInput = {
    AND?: EscolaridadeWhereInput | EscolaridadeWhereInput[]
    OR?: EscolaridadeWhereInput[]
    NOT?: EscolaridadeWhereInput | EscolaridadeWhereInput[]
    id_Escolaridade?: IntFilter<"Escolaridade"> | number
    nome?: StringFilter<"Escolaridade"> | string
    pacientes?: PacienteListRelationFilter
    listaEspera?: ListaEsperaListRelationFilter
  }

  export type EscolaridadeOrderByWithRelationInput = {
    id_Escolaridade?: SortOrder
    nome?: SortOrder
    pacientes?: PacienteOrderByRelationAggregateInput
    listaEspera?: ListaEsperaOrderByRelationAggregateInput
  }

  export type EscolaridadeWhereUniqueInput = Prisma.AtLeast<{
    id_Escolaridade?: number
    AND?: EscolaridadeWhereInput | EscolaridadeWhereInput[]
    OR?: EscolaridadeWhereInput[]
    NOT?: EscolaridadeWhereInput | EscolaridadeWhereInput[]
    nome?: StringFilter<"Escolaridade"> | string
    pacientes?: PacienteListRelationFilter
    listaEspera?: ListaEsperaListRelationFilter
  }, "id_Escolaridade">

  export type EscolaridadeOrderByWithAggregationInput = {
    id_Escolaridade?: SortOrder
    nome?: SortOrder
    _count?: EscolaridadeCountOrderByAggregateInput
    _avg?: EscolaridadeAvgOrderByAggregateInput
    _max?: EscolaridadeMaxOrderByAggregateInput
    _min?: EscolaridadeMinOrderByAggregateInput
    _sum?: EscolaridadeSumOrderByAggregateInput
  }

  export type EscolaridadeScalarWhereWithAggregatesInput = {
    AND?: EscolaridadeScalarWhereWithAggregatesInput | EscolaridadeScalarWhereWithAggregatesInput[]
    OR?: EscolaridadeScalarWhereWithAggregatesInput[]
    NOT?: EscolaridadeScalarWhereWithAggregatesInput | EscolaridadeScalarWhereWithAggregatesInput[]
    id_Escolaridade?: IntWithAggregatesFilter<"Escolaridade"> | number
    nome?: StringWithAggregatesFilter<"Escolaridade"> | string
  }

  export type StatusAtendimentoWhereInput = {
    AND?: StatusAtendimentoWhereInput | StatusAtendimentoWhereInput[]
    OR?: StatusAtendimentoWhereInput[]
    NOT?: StatusAtendimentoWhereInput | StatusAtendimentoWhereInput[]
    id_Status?: IntFilter<"StatusAtendimento"> | number
    nome?: StringFilter<"StatusAtendimento"> | string
    atendimentos?: AtendimentoListRelationFilter
  }

  export type StatusAtendimentoOrderByWithRelationInput = {
    id_Status?: SortOrder
    nome?: SortOrder
    atendimentos?: AtendimentoOrderByRelationAggregateInput
  }

  export type StatusAtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id_Status?: number
    AND?: StatusAtendimentoWhereInput | StatusAtendimentoWhereInput[]
    OR?: StatusAtendimentoWhereInput[]
    NOT?: StatusAtendimentoWhereInput | StatusAtendimentoWhereInput[]
    nome?: StringFilter<"StatusAtendimento"> | string
    atendimentos?: AtendimentoListRelationFilter
  }, "id_Status">

  export type StatusAtendimentoOrderByWithAggregationInput = {
    id_Status?: SortOrder
    nome?: SortOrder
    _count?: StatusAtendimentoCountOrderByAggregateInput
    _avg?: StatusAtendimentoAvgOrderByAggregateInput
    _max?: StatusAtendimentoMaxOrderByAggregateInput
    _min?: StatusAtendimentoMinOrderByAggregateInput
    _sum?: StatusAtendimentoSumOrderByAggregateInput
  }

  export type StatusAtendimentoScalarWhereWithAggregatesInput = {
    AND?: StatusAtendimentoScalarWhereWithAggregatesInput | StatusAtendimentoScalarWhereWithAggregatesInput[]
    OR?: StatusAtendimentoScalarWhereWithAggregatesInput[]
    NOT?: StatusAtendimentoScalarWhereWithAggregatesInput | StatusAtendimentoScalarWhereWithAggregatesInput[]
    id_Status?: IntWithAggregatesFilter<"StatusAtendimento"> | number
    nome?: StringWithAggregatesFilter<"StatusAtendimento"> | string
  }

  export type UsuarioCreateInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUpdateInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
  }

  export type UsuarioUpdateManyMutationInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateInput = {
    id_Role?: string
    role: string
    descricao: string
    usuarios?: UsuarioCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id_Role?: string
    role: string
    descricao: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id_Role?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id_Role?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id_Role?: string
    role: string
    descricao: string
  }

  export type RoleUpdateManyMutationInput = {
    id_Role?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id_Role?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteCreateInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    genero: GeneroCreateNestedOneWithoutPacientesInput
    corPele: CorPeleCreateNestedOneWithoutPacientesInput
    escolaridade: EscolaridadeCreateNestedOneWithoutPacientesInput
    estagiarioResponsavel: UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput
    supervisorResponsavel: UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput
    relatoriosAlta?: RelatorioAltaCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
    relatoriosAlta?: RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutPacientesNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutPacientesNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput
    estagiarioResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput
    supervisorResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput
    relatoriosAlta?: RelatorioAltaUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
    relatoriosAlta?: RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
  }

  export type PacienteUpdateManyMutationInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoUsuarioCreateInput = {
    id_Documento?: string
    nomeArquivo: string
    caminhoArquivo: string
    dataUpload?: Date | string
    usuario: UsuarioCreateNestedOneWithoutDocumentosUsuarioInput
  }

  export type DocumentoUsuarioUncheckedCreateInput = {
    id_Documento?: string
    id_User: string
    nomeArquivo: string
    caminhoArquivo: string
    dataUpload?: Date | string
  }

  export type DocumentoUsuarioUpdateInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    caminhoArquivo?: StringFieldUpdateOperationsInput | string
    dataUpload?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutDocumentosUsuarioNestedInput
  }

  export type DocumentoUsuarioUncheckedUpdateInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_User?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    caminhoArquivo?: StringFieldUpdateOperationsInput | string
    dataUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUsuarioCreateManyInput = {
    id_Documento?: string
    id_User: string
    nomeArquivo: string
    caminhoArquivo: string
    dataUpload?: Date | string
  }

  export type DocumentoUsuarioUpdateManyMutationInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    caminhoArquivo?: StringFieldUpdateOperationsInput | string
    dataUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUsuarioUncheckedUpdateManyInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_User?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    caminhoArquivo?: StringFieldUpdateOperationsInput | string
    dataUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioAltaCreateInput = {
    id_Documento?: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
    paciente: PacienteCreateNestedOneWithoutRelatoriosAltaInput
    estagiario: UsuarioCreateNestedOneWithoutRelatorioComoEstagiarioInput
    supervisor: UsuarioCreateNestedOneWithoutRelatorioComoSupervisorInput
  }

  export type RelatorioAltaUncheckedCreateInput = {
    id_Documento?: string
    id_Paciente: string
    id_Estagiario: string
    id_Supervisor: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaUpdateInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
    paciente?: PacienteUpdateOneRequiredWithoutRelatoriosAltaNestedInput
    estagiario?: UsuarioUpdateOneRequiredWithoutRelatorioComoEstagiarioNestedInput
    supervisor?: UsuarioUpdateOneRequiredWithoutRelatorioComoSupervisorNestedInput
  }

  export type RelatorioAltaUncheckedUpdateInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario?: StringFieldUpdateOperationsInput | string
    id_Supervisor?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaCreateManyInput = {
    id_Documento?: string
    id_Paciente: string
    id_Estagiario: string
    id_Supervisor: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaUpdateManyMutationInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaUncheckedUpdateManyInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario?: StringFieldUpdateOperationsInput | string
    id_Supervisor?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type LogAuditoriaCreateInput = {
    id_Log?: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
    usuarioExecutor: UsuarioCreateNestedOneWithoutLogsExecutadosInput
    paciente: PacienteCreateNestedOneWithoutLogsAuditoriaInput
  }

  export type LogAuditoriaUncheckedCreateInput = {
    id_Log?: string
    id_Usuario_Executor: string
    id_Paciente: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
  }

  export type LogAuditoriaUpdateInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
    usuarioExecutor?: UsuarioUpdateOneRequiredWithoutLogsExecutadosNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutLogsAuditoriaNestedInput
  }

  export type LogAuditoriaUncheckedUpdateInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    id_Usuario_Executor?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
  }

  export type LogAuditoriaCreateManyInput = {
    id_Log?: string
    id_Usuario_Executor: string
    id_Paciente: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
  }

  export type LogAuditoriaUpdateManyMutationInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
  }

  export type LogAuditoriaUncheckedUpdateManyInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    id_Usuario_Executor?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoCreateInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    observacoes: string
    paciente: PacienteCreateNestedOneWithoutAtendimentosInput
    estagiarioExecutor: UsuarioCreateNestedOneWithoutAtendimentoComoEstagiarioInput
    supervisorExecutor: UsuarioCreateNestedOneWithoutAtendimentoComoSupervisorInput
    status: StatusAtendimentoCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Paciente: string
    id_Estagiario_Executor: string
    id_Supervisor_Executor: string
    id_Status: number
    observacoes: string
  }

  export type AtendimentoUpdateInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutAtendimentosNestedInput
    estagiarioExecutor?: UsuarioUpdateOneRequiredWithoutAtendimentoComoEstagiarioNestedInput
    supervisorExecutor?: UsuarioUpdateOneRequiredWithoutAtendimentoComoSupervisorNestedInput
    status?: StatusAtendimentoUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario_Executor?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Executor?: StringFieldUpdateOperationsInput | string
    id_Status?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoCreateManyInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Paciente: string
    id_Estagiario_Executor: string
    id_Supervisor_Executor: string
    id_Status: number
    observacoes: string
  }

  export type AtendimentoUpdateManyMutationInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUncheckedUpdateManyInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario_Executor?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Executor?: StringFieldUpdateOperationsInput | string
    id_Status?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type ListaEsperaCreateInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    genero: GeneroCreateNestedOneWithoutListaEsperaInput
    corPele: CorPeleCreateNestedOneWithoutListaEsperaInput
    escolaridade: EscolaridadeCreateNestedOneWithoutListaEsperaInput
  }

  export type ListaEsperaUncheckedCreateInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
  }

  export type ListaEsperaUpdateInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutListaEsperaNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutListaEsperaNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutListaEsperaNestedInput
  }

  export type ListaEsperaUncheckedUpdateInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
  }

  export type ListaEsperaCreateManyInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
  }

  export type ListaEsperaUpdateManyMutationInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaEsperaUncheckedUpdateManyInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
  }

  export type GeneroCreateInput = {
    nome: string
    pacientes?: PacienteCreateNestedManyWithoutGeneroInput
    listaEspera?: ListaEsperaCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateInput = {
    id_Genero?: number
    nome: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutGeneroInput
    listaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutGeneroNestedInput
    listaEspera?: ListaEsperaUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    id_Genero?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutGeneroNestedInput
    listaEspera?: ListaEsperaUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroCreateManyInput = {
    id_Genero?: number
    nome: string
  }

  export type GeneroUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateManyInput = {
    id_Genero?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CorPeleCreateInput = {
    nome: string
    pacientes?: PacienteCreateNestedManyWithoutCorPeleInput
    listaEspera?: ListaEsperaCreateNestedManyWithoutCorPeleInput
  }

  export type CorPeleUncheckedCreateInput = {
    id_CorPele?: number
    nome: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutCorPeleInput
    listaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutCorPeleInput
  }

  export type CorPeleUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutCorPeleNestedInput
    listaEspera?: ListaEsperaUpdateManyWithoutCorPeleNestedInput
  }

  export type CorPeleUncheckedUpdateInput = {
    id_CorPele?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutCorPeleNestedInput
    listaEspera?: ListaEsperaUncheckedUpdateManyWithoutCorPeleNestedInput
  }

  export type CorPeleCreateManyInput = {
    id_CorPele?: number
    nome: string
  }

  export type CorPeleUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CorPeleUncheckedUpdateManyInput = {
    id_CorPele?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EscolaridadeCreateInput = {
    nome: string
    pacientes?: PacienteCreateNestedManyWithoutEscolaridadeInput
    listaEspera?: ListaEsperaCreateNestedManyWithoutEscolaridadeInput
  }

  export type EscolaridadeUncheckedCreateInput = {
    id_Escolaridade?: number
    nome: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutEscolaridadeInput
    listaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutEscolaridadeInput
  }

  export type EscolaridadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutEscolaridadeNestedInput
    listaEspera?: ListaEsperaUpdateManyWithoutEscolaridadeNestedInput
  }

  export type EscolaridadeUncheckedUpdateInput = {
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutEscolaridadeNestedInput
    listaEspera?: ListaEsperaUncheckedUpdateManyWithoutEscolaridadeNestedInput
  }

  export type EscolaridadeCreateManyInput = {
    id_Escolaridade?: number
    nome: string
  }

  export type EscolaridadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EscolaridadeUncheckedUpdateManyInput = {
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusAtendimentoCreateInput = {
    nome: string
    atendimentos?: AtendimentoCreateNestedManyWithoutStatusInput
  }

  export type StatusAtendimentoUncheckedCreateInput = {
    id_Status?: number
    nome: string
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusAtendimentoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    atendimentos?: AtendimentoUpdateManyWithoutStatusNestedInput
  }

  export type StatusAtendimentoUncheckedUpdateInput = {
    id_Status?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusAtendimentoCreateManyInput = {
    id_Status?: number
    nome: string
  }

  export type StatusAtendimentoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusAtendimentoUncheckedUpdateManyInput = {
    id_Status?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type DocumentoUsuarioListRelationFilter = {
    every?: DocumentoUsuarioWhereInput
    some?: DocumentoUsuarioWhereInput
    none?: DocumentoUsuarioWhereInput
  }

  export type LogAuditoriaListRelationFilter = {
    every?: LogAuditoriaWhereInput
    some?: LogAuditoriaWhereInput
    none?: LogAuditoriaWhereInput
  }

  export type AtendimentoListRelationFilter = {
    every?: AtendimentoWhereInput
    some?: AtendimentoWhereInput
    none?: AtendimentoWhereInput
  }

  export type RelatorioAltaListRelationFilter = {
    every?: RelatorioAltaWhereInput
    some?: RelatorioAltaWhereInput
    none?: RelatorioAltaWhereInput
  }

  export type PacienteListRelationFilter = {
    every?: PacienteWhereInput
    some?: PacienteWhereInput
    none?: PacienteWhereInput
  }

  export type DocumentoUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogAuditoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtendimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelatorioAltaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_User?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    roleId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_User?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    roleId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_User?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    roleId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id_Role?: SortOrder
    role?: SortOrder
    descricao?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id_Role?: SortOrder
    role?: SortOrder
    descricao?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id_Role?: SortOrder
    role?: SortOrder
    descricao?: SortOrder
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

  export type GeneroScalarRelationFilter = {
    is?: GeneroWhereInput
    isNot?: GeneroWhereInput
  }

  export type CorPeleScalarRelationFilter = {
    is?: CorPeleWhereInput
    isNot?: CorPeleWhereInput
  }

  export type EscolaridadeScalarRelationFilter = {
    is?: EscolaridadeWhereInput
    isNot?: EscolaridadeWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id_Paciente?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrder
    dataNascimento?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    dataInicioTratamento?: SortOrder
    id_Estagiario_Responsavel?: SortOrder
    id_Supervisor_Responsavel?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id_Paciente?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrder
    dataNascimento?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    dataInicioTratamento?: SortOrder
    id_Estagiario_Responsavel?: SortOrder
    id_Supervisor_Responsavel?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id_Paciente?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrder
    dataNascimento?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    dataInicioTratamento?: SortOrder
    id_Estagiario_Responsavel?: SortOrder
    id_Supervisor_Responsavel?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
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

  export type DocumentoUsuarioCountOrderByAggregateInput = {
    id_Documento?: SortOrder
    id_User?: SortOrder
    nomeArquivo?: SortOrder
    caminhoArquivo?: SortOrder
    dataUpload?: SortOrder
  }

  export type DocumentoUsuarioMaxOrderByAggregateInput = {
    id_Documento?: SortOrder
    id_User?: SortOrder
    nomeArquivo?: SortOrder
    caminhoArquivo?: SortOrder
    dataUpload?: SortOrder
  }

  export type DocumentoUsuarioMinOrderByAggregateInput = {
    id_Documento?: SortOrder
    id_User?: SortOrder
    nomeArquivo?: SortOrder
    caminhoArquivo?: SortOrder
    dataUpload?: SortOrder
  }

  export type EnumStatusRelatorioEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRelatorioEnum | EnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRelatorioEnum[] | ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRelatorioEnum[] | ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRelatorioEnumFilter<$PrismaModel> | $Enums.StatusRelatorioEnum
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type RelatorioAltaCountOrderByAggregateInput = {
    id_Documento?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario?: SortOrder
    id_Supervisor?: SortOrder
    conteudo?: SortOrder
    dataEmissao?: SortOrder
    status?: SortOrder
  }

  export type RelatorioAltaMaxOrderByAggregateInput = {
    id_Documento?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario?: SortOrder
    id_Supervisor?: SortOrder
    conteudo?: SortOrder
    dataEmissao?: SortOrder
    status?: SortOrder
  }

  export type RelatorioAltaMinOrderByAggregateInput = {
    id_Documento?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario?: SortOrder
    id_Supervisor?: SortOrder
    conteudo?: SortOrder
    dataEmissao?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusRelatorioEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRelatorioEnum | EnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRelatorioEnum[] | ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRelatorioEnum[] | ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRelatorioEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusRelatorioEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRelatorioEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusRelatorioEnumFilter<$PrismaModel>
  }

  export type EnumTipoAcaoEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAcaoEnum | EnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAcaoEnum[] | ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAcaoEnum[] | ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAcaoEnumFilter<$PrismaModel> | $Enums.TipoAcaoEnum
  }

  export type LogAuditoriaCountOrderByAggregateInput = {
    id_Log?: SortOrder
    id_Usuario_Executor?: SortOrder
    id_Paciente?: SortOrder
    tipoAcao?: SortOrder
    acessoEm?: SortOrder
    detalhes?: SortOrder
  }

  export type LogAuditoriaMaxOrderByAggregateInput = {
    id_Log?: SortOrder
    id_Usuario_Executor?: SortOrder
    id_Paciente?: SortOrder
    tipoAcao?: SortOrder
    acessoEm?: SortOrder
    detalhes?: SortOrder
  }

  export type LogAuditoriaMinOrderByAggregateInput = {
    id_Log?: SortOrder
    id_Usuario_Executor?: SortOrder
    id_Paciente?: SortOrder
    tipoAcao?: SortOrder
    acessoEm?: SortOrder
    detalhes?: SortOrder
  }

  export type EnumTipoAcaoEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAcaoEnum | EnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAcaoEnum[] | ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAcaoEnum[] | ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAcaoEnumWithAggregatesFilter<$PrismaModel> | $Enums.TipoAcaoEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAcaoEnumFilter<$PrismaModel>
    _max?: NestedEnumTipoAcaoEnumFilter<$PrismaModel>
  }

  export type StatusAtendimentoScalarRelationFilter = {
    is?: StatusAtendimentoWhereInput
    isNot?: StatusAtendimentoWhereInput
  }

  export type AtendimentoCountOrderByAggregateInput = {
    id_Atendimento?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario_Executor?: SortOrder
    id_Supervisor_Executor?: SortOrder
    id_Status?: SortOrder
    observacoes?: SortOrder
  }

  export type AtendimentoAvgOrderByAggregateInput = {
    id_Status?: SortOrder
  }

  export type AtendimentoMaxOrderByAggregateInput = {
    id_Atendimento?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario_Executor?: SortOrder
    id_Supervisor_Executor?: SortOrder
    id_Status?: SortOrder
    observacoes?: SortOrder
  }

  export type AtendimentoMinOrderByAggregateInput = {
    id_Atendimento?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    id_Paciente?: SortOrder
    id_Estagiario_Executor?: SortOrder
    id_Supervisor_Executor?: SortOrder
    id_Status?: SortOrder
    observacoes?: SortOrder
  }

  export type AtendimentoSumOrderByAggregateInput = {
    id_Status?: SortOrder
  }

  export type ListaEsperaCountOrderByAggregateInput = {
    id_Lista?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrder
    dataNascimento?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    createdAt?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
  }

  export type ListaEsperaAvgOrderByAggregateInput = {
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
  }

  export type ListaEsperaMaxOrderByAggregateInput = {
    id_Lista?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrder
    dataNascimento?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    createdAt?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
  }

  export type ListaEsperaMinOrderByAggregateInput = {
    id_Lista?: SortOrder
    nomeRegistro?: SortOrder
    nomeSocial?: SortOrder
    dataNascimento?: SortOrder
    telefonePessoal?: SortOrder
    contatoEmergencia?: SortOrder
    enderecoRua?: SortOrder
    enderecoNumero?: SortOrder
    enderecoBairro?: SortOrder
    enderecoCidade?: SortOrder
    enderecoEstado?: SortOrder
    enderecoCEP?: SortOrder
    createdAt?: SortOrder
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
  }

  export type ListaEsperaSumOrderByAggregateInput = {
    id_Genero?: SortOrder
    id_CorPele?: SortOrder
    id_Escolaridade?: SortOrder
  }

  export type ListaEsperaListRelationFilter = {
    every?: ListaEsperaWhereInput
    some?: ListaEsperaWhereInput
    none?: ListaEsperaWhereInput
  }

  export type ListaEsperaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneroCountOrderByAggregateInput = {
    id_Genero?: SortOrder
    nome?: SortOrder
  }

  export type GeneroAvgOrderByAggregateInput = {
    id_Genero?: SortOrder
  }

  export type GeneroMaxOrderByAggregateInput = {
    id_Genero?: SortOrder
    nome?: SortOrder
  }

  export type GeneroMinOrderByAggregateInput = {
    id_Genero?: SortOrder
    nome?: SortOrder
  }

  export type GeneroSumOrderByAggregateInput = {
    id_Genero?: SortOrder
  }

  export type CorPeleCountOrderByAggregateInput = {
    id_CorPele?: SortOrder
    nome?: SortOrder
  }

  export type CorPeleAvgOrderByAggregateInput = {
    id_CorPele?: SortOrder
  }

  export type CorPeleMaxOrderByAggregateInput = {
    id_CorPele?: SortOrder
    nome?: SortOrder
  }

  export type CorPeleMinOrderByAggregateInput = {
    id_CorPele?: SortOrder
    nome?: SortOrder
  }

  export type CorPeleSumOrderByAggregateInput = {
    id_CorPele?: SortOrder
  }

  export type EscolaridadeCountOrderByAggregateInput = {
    id_Escolaridade?: SortOrder
    nome?: SortOrder
  }

  export type EscolaridadeAvgOrderByAggregateInput = {
    id_Escolaridade?: SortOrder
  }

  export type EscolaridadeMaxOrderByAggregateInput = {
    id_Escolaridade?: SortOrder
    nome?: SortOrder
  }

  export type EscolaridadeMinOrderByAggregateInput = {
    id_Escolaridade?: SortOrder
    nome?: SortOrder
  }

  export type EscolaridadeSumOrderByAggregateInput = {
    id_Escolaridade?: SortOrder
  }

  export type StatusAtendimentoCountOrderByAggregateInput = {
    id_Status?: SortOrder
    nome?: SortOrder
  }

  export type StatusAtendimentoAvgOrderByAggregateInput = {
    id_Status?: SortOrder
  }

  export type StatusAtendimentoMaxOrderByAggregateInput = {
    id_Status?: SortOrder
    nome?: SortOrder
  }

  export type StatusAtendimentoMinOrderByAggregateInput = {
    id_Status?: SortOrder
    nome?: SortOrder
  }

  export type StatusAtendimentoSumOrderByAggregateInput = {
    id_Status?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RoleCreateWithoutUsuariosInput, RoleUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsuariosInput
    connect?: RoleWhereUniqueInput
  }

  export type DocumentoUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DocumentoUsuarioCreateWithoutUsuarioInput, DocumentoUsuarioUncheckedCreateWithoutUsuarioInput> | DocumentoUsuarioCreateWithoutUsuarioInput[] | DocumentoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DocumentoUsuarioCreateOrConnectWithoutUsuarioInput | DocumentoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: DocumentoUsuarioCreateManyUsuarioInputEnvelope
    connect?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
  }

  export type LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput = {
    create?: XOR<LogAuditoriaCreateWithoutUsuarioExecutorInput, LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput> | LogAuditoriaCreateWithoutUsuarioExecutorInput[] | LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput | LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput[]
    createMany?: LogAuditoriaCreateManyUsuarioExecutorInputEnvelope
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
  }

  export type AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput = {
    create?: XOR<AtendimentoCreateWithoutEstagiarioExecutorInput, AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput> | AtendimentoCreateWithoutEstagiarioExecutorInput[] | AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput | AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput[]
    createMany?: AtendimentoCreateManyEstagiarioExecutorInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoCreateNestedManyWithoutSupervisorExecutorInput = {
    create?: XOR<AtendimentoCreateWithoutSupervisorExecutorInput, AtendimentoUncheckedCreateWithoutSupervisorExecutorInput> | AtendimentoCreateWithoutSupervisorExecutorInput[] | AtendimentoUncheckedCreateWithoutSupervisorExecutorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutSupervisorExecutorInput | AtendimentoCreateOrConnectWithoutSupervisorExecutorInput[]
    createMany?: AtendimentoCreateManySupervisorExecutorInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type RelatorioAltaCreateNestedManyWithoutEstagiarioInput = {
    create?: XOR<RelatorioAltaCreateWithoutEstagiarioInput, RelatorioAltaUncheckedCreateWithoutEstagiarioInput> | RelatorioAltaCreateWithoutEstagiarioInput[] | RelatorioAltaUncheckedCreateWithoutEstagiarioInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutEstagiarioInput | RelatorioAltaCreateOrConnectWithoutEstagiarioInput[]
    createMany?: RelatorioAltaCreateManyEstagiarioInputEnvelope
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
  }

  export type RelatorioAltaCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<RelatorioAltaCreateWithoutSupervisorInput, RelatorioAltaUncheckedCreateWithoutSupervisorInput> | RelatorioAltaCreateWithoutSupervisorInput[] | RelatorioAltaUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutSupervisorInput | RelatorioAltaCreateOrConnectWithoutSupervisorInput[]
    createMany?: RelatorioAltaCreateManySupervisorInputEnvelope
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
  }

  export type PacienteCreateNestedManyWithoutEstagiarioResponsavelInput = {
    create?: XOR<PacienteCreateWithoutEstagiarioResponsavelInput, PacienteUncheckedCreateWithoutEstagiarioResponsavelInput> | PacienteCreateWithoutEstagiarioResponsavelInput[] | PacienteUncheckedCreateWithoutEstagiarioResponsavelInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutEstagiarioResponsavelInput | PacienteCreateOrConnectWithoutEstagiarioResponsavelInput[]
    createMany?: PacienteCreateManyEstagiarioResponsavelInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type PacienteCreateNestedManyWithoutSupervisorResponsavelInput = {
    create?: XOR<PacienteCreateWithoutSupervisorResponsavelInput, PacienteUncheckedCreateWithoutSupervisorResponsavelInput> | PacienteCreateWithoutSupervisorResponsavelInput[] | PacienteUncheckedCreateWithoutSupervisorResponsavelInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutSupervisorResponsavelInput | PacienteCreateOrConnectWithoutSupervisorResponsavelInput[]
    createMany?: PacienteCreateManySupervisorResponsavelInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DocumentoUsuarioCreateWithoutUsuarioInput, DocumentoUsuarioUncheckedCreateWithoutUsuarioInput> | DocumentoUsuarioCreateWithoutUsuarioInput[] | DocumentoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DocumentoUsuarioCreateOrConnectWithoutUsuarioInput | DocumentoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: DocumentoUsuarioCreateManyUsuarioInputEnvelope
    connect?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
  }

  export type LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput = {
    create?: XOR<LogAuditoriaCreateWithoutUsuarioExecutorInput, LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput> | LogAuditoriaCreateWithoutUsuarioExecutorInput[] | LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput | LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput[]
    createMany?: LogAuditoriaCreateManyUsuarioExecutorInputEnvelope
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput = {
    create?: XOR<AtendimentoCreateWithoutEstagiarioExecutorInput, AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput> | AtendimentoCreateWithoutEstagiarioExecutorInput[] | AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput | AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput[]
    createMany?: AtendimentoCreateManyEstagiarioExecutorInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput = {
    create?: XOR<AtendimentoCreateWithoutSupervisorExecutorInput, AtendimentoUncheckedCreateWithoutSupervisorExecutorInput> | AtendimentoCreateWithoutSupervisorExecutorInput[] | AtendimentoUncheckedCreateWithoutSupervisorExecutorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutSupervisorExecutorInput | AtendimentoCreateOrConnectWithoutSupervisorExecutorInput[]
    createMany?: AtendimentoCreateManySupervisorExecutorInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput = {
    create?: XOR<RelatorioAltaCreateWithoutEstagiarioInput, RelatorioAltaUncheckedCreateWithoutEstagiarioInput> | RelatorioAltaCreateWithoutEstagiarioInput[] | RelatorioAltaUncheckedCreateWithoutEstagiarioInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutEstagiarioInput | RelatorioAltaCreateOrConnectWithoutEstagiarioInput[]
    createMany?: RelatorioAltaCreateManyEstagiarioInputEnvelope
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
  }

  export type RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<RelatorioAltaCreateWithoutSupervisorInput, RelatorioAltaUncheckedCreateWithoutSupervisorInput> | RelatorioAltaCreateWithoutSupervisorInput[] | RelatorioAltaUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutSupervisorInput | RelatorioAltaCreateOrConnectWithoutSupervisorInput[]
    createMany?: RelatorioAltaCreateManySupervisorInputEnvelope
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput = {
    create?: XOR<PacienteCreateWithoutEstagiarioResponsavelInput, PacienteUncheckedCreateWithoutEstagiarioResponsavelInput> | PacienteCreateWithoutEstagiarioResponsavelInput[] | PacienteUncheckedCreateWithoutEstagiarioResponsavelInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutEstagiarioResponsavelInput | PacienteCreateOrConnectWithoutEstagiarioResponsavelInput[]
    createMany?: PacienteCreateManyEstagiarioResponsavelInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput = {
    create?: XOR<PacienteCreateWithoutSupervisorResponsavelInput, PacienteUncheckedCreateWithoutSupervisorResponsavelInput> | PacienteCreateWithoutSupervisorResponsavelInput[] | PacienteUncheckedCreateWithoutSupervisorResponsavelInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutSupervisorResponsavelInput | PacienteCreateOrConnectWithoutSupervisorResponsavelInput[]
    createMany?: PacienteCreateManySupervisorResponsavelInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RoleUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RoleCreateWithoutUsuariosInput, RoleUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsuariosInput
    upsert?: RoleUpsertWithoutUsuariosInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsuariosInput, RoleUpdateWithoutUsuariosInput>, RoleUncheckedUpdateWithoutUsuariosInput>
  }

  export type DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DocumentoUsuarioCreateWithoutUsuarioInput, DocumentoUsuarioUncheckedCreateWithoutUsuarioInput> | DocumentoUsuarioCreateWithoutUsuarioInput[] | DocumentoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DocumentoUsuarioCreateOrConnectWithoutUsuarioInput | DocumentoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: DocumentoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | DocumentoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DocumentoUsuarioCreateManyUsuarioInputEnvelope
    set?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
    disconnect?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
    delete?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
    connect?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
    update?: DocumentoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | DocumentoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DocumentoUsuarioUpdateManyWithWhereWithoutUsuarioInput | DocumentoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DocumentoUsuarioScalarWhereInput | DocumentoUsuarioScalarWhereInput[]
  }

  export type LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput = {
    create?: XOR<LogAuditoriaCreateWithoutUsuarioExecutorInput, LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput> | LogAuditoriaCreateWithoutUsuarioExecutorInput[] | LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput | LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput[]
    upsert?: LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioExecutorInput | LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioExecutorInput[]
    createMany?: LogAuditoriaCreateManyUsuarioExecutorInputEnvelope
    set?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    disconnect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    delete?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    update?: LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioExecutorInput | LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioExecutorInput[]
    updateMany?: LogAuditoriaUpdateManyWithWhereWithoutUsuarioExecutorInput | LogAuditoriaUpdateManyWithWhereWithoutUsuarioExecutorInput[]
    deleteMany?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
  }

  export type AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput = {
    create?: XOR<AtendimentoCreateWithoutEstagiarioExecutorInput, AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput> | AtendimentoCreateWithoutEstagiarioExecutorInput[] | AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput | AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutEstagiarioExecutorInput | AtendimentoUpsertWithWhereUniqueWithoutEstagiarioExecutorInput[]
    createMany?: AtendimentoCreateManyEstagiarioExecutorInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutEstagiarioExecutorInput | AtendimentoUpdateWithWhereUniqueWithoutEstagiarioExecutorInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutEstagiarioExecutorInput | AtendimentoUpdateManyWithWhereWithoutEstagiarioExecutorInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput = {
    create?: XOR<AtendimentoCreateWithoutSupervisorExecutorInput, AtendimentoUncheckedCreateWithoutSupervisorExecutorInput> | AtendimentoCreateWithoutSupervisorExecutorInput[] | AtendimentoUncheckedCreateWithoutSupervisorExecutorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutSupervisorExecutorInput | AtendimentoCreateOrConnectWithoutSupervisorExecutorInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutSupervisorExecutorInput | AtendimentoUpsertWithWhereUniqueWithoutSupervisorExecutorInput[]
    createMany?: AtendimentoCreateManySupervisorExecutorInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutSupervisorExecutorInput | AtendimentoUpdateWithWhereUniqueWithoutSupervisorExecutorInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutSupervisorExecutorInput | AtendimentoUpdateManyWithWhereWithoutSupervisorExecutorInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type RelatorioAltaUpdateManyWithoutEstagiarioNestedInput = {
    create?: XOR<RelatorioAltaCreateWithoutEstagiarioInput, RelatorioAltaUncheckedCreateWithoutEstagiarioInput> | RelatorioAltaCreateWithoutEstagiarioInput[] | RelatorioAltaUncheckedCreateWithoutEstagiarioInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutEstagiarioInput | RelatorioAltaCreateOrConnectWithoutEstagiarioInput[]
    upsert?: RelatorioAltaUpsertWithWhereUniqueWithoutEstagiarioInput | RelatorioAltaUpsertWithWhereUniqueWithoutEstagiarioInput[]
    createMany?: RelatorioAltaCreateManyEstagiarioInputEnvelope
    set?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    disconnect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    delete?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    update?: RelatorioAltaUpdateWithWhereUniqueWithoutEstagiarioInput | RelatorioAltaUpdateWithWhereUniqueWithoutEstagiarioInput[]
    updateMany?: RelatorioAltaUpdateManyWithWhereWithoutEstagiarioInput | RelatorioAltaUpdateManyWithWhereWithoutEstagiarioInput[]
    deleteMany?: RelatorioAltaScalarWhereInput | RelatorioAltaScalarWhereInput[]
  }

  export type RelatorioAltaUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<RelatorioAltaCreateWithoutSupervisorInput, RelatorioAltaUncheckedCreateWithoutSupervisorInput> | RelatorioAltaCreateWithoutSupervisorInput[] | RelatorioAltaUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutSupervisorInput | RelatorioAltaCreateOrConnectWithoutSupervisorInput[]
    upsert?: RelatorioAltaUpsertWithWhereUniqueWithoutSupervisorInput | RelatorioAltaUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: RelatorioAltaCreateManySupervisorInputEnvelope
    set?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    disconnect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    delete?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    update?: RelatorioAltaUpdateWithWhereUniqueWithoutSupervisorInput | RelatorioAltaUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: RelatorioAltaUpdateManyWithWhereWithoutSupervisorInput | RelatorioAltaUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: RelatorioAltaScalarWhereInput | RelatorioAltaScalarWhereInput[]
  }

  export type PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput = {
    create?: XOR<PacienteCreateWithoutEstagiarioResponsavelInput, PacienteUncheckedCreateWithoutEstagiarioResponsavelInput> | PacienteCreateWithoutEstagiarioResponsavelInput[] | PacienteUncheckedCreateWithoutEstagiarioResponsavelInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutEstagiarioResponsavelInput | PacienteCreateOrConnectWithoutEstagiarioResponsavelInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutEstagiarioResponsavelInput | PacienteUpsertWithWhereUniqueWithoutEstagiarioResponsavelInput[]
    createMany?: PacienteCreateManyEstagiarioResponsavelInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutEstagiarioResponsavelInput | PacienteUpdateWithWhereUniqueWithoutEstagiarioResponsavelInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutEstagiarioResponsavelInput | PacienteUpdateManyWithWhereWithoutEstagiarioResponsavelInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type PacienteUpdateManyWithoutSupervisorResponsavelNestedInput = {
    create?: XOR<PacienteCreateWithoutSupervisorResponsavelInput, PacienteUncheckedCreateWithoutSupervisorResponsavelInput> | PacienteCreateWithoutSupervisorResponsavelInput[] | PacienteUncheckedCreateWithoutSupervisorResponsavelInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutSupervisorResponsavelInput | PacienteCreateOrConnectWithoutSupervisorResponsavelInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutSupervisorResponsavelInput | PacienteUpsertWithWhereUniqueWithoutSupervisorResponsavelInput[]
    createMany?: PacienteCreateManySupervisorResponsavelInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutSupervisorResponsavelInput | PacienteUpdateWithWhereUniqueWithoutSupervisorResponsavelInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutSupervisorResponsavelInput | PacienteUpdateManyWithWhereWithoutSupervisorResponsavelInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DocumentoUsuarioCreateWithoutUsuarioInput, DocumentoUsuarioUncheckedCreateWithoutUsuarioInput> | DocumentoUsuarioCreateWithoutUsuarioInput[] | DocumentoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DocumentoUsuarioCreateOrConnectWithoutUsuarioInput | DocumentoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: DocumentoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | DocumentoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DocumentoUsuarioCreateManyUsuarioInputEnvelope
    set?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
    disconnect?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
    delete?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
    connect?: DocumentoUsuarioWhereUniqueInput | DocumentoUsuarioWhereUniqueInput[]
    update?: DocumentoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | DocumentoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DocumentoUsuarioUpdateManyWithWhereWithoutUsuarioInput | DocumentoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DocumentoUsuarioScalarWhereInput | DocumentoUsuarioScalarWhereInput[]
  }

  export type LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput = {
    create?: XOR<LogAuditoriaCreateWithoutUsuarioExecutorInput, LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput> | LogAuditoriaCreateWithoutUsuarioExecutorInput[] | LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput | LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput[]
    upsert?: LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioExecutorInput | LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioExecutorInput[]
    createMany?: LogAuditoriaCreateManyUsuarioExecutorInputEnvelope
    set?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    disconnect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    delete?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    update?: LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioExecutorInput | LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioExecutorInput[]
    updateMany?: LogAuditoriaUpdateManyWithWhereWithoutUsuarioExecutorInput | LogAuditoriaUpdateManyWithWhereWithoutUsuarioExecutorInput[]
    deleteMany?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput = {
    create?: XOR<AtendimentoCreateWithoutEstagiarioExecutorInput, AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput> | AtendimentoCreateWithoutEstagiarioExecutorInput[] | AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput | AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutEstagiarioExecutorInput | AtendimentoUpsertWithWhereUniqueWithoutEstagiarioExecutorInput[]
    createMany?: AtendimentoCreateManyEstagiarioExecutorInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutEstagiarioExecutorInput | AtendimentoUpdateWithWhereUniqueWithoutEstagiarioExecutorInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutEstagiarioExecutorInput | AtendimentoUpdateManyWithWhereWithoutEstagiarioExecutorInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput = {
    create?: XOR<AtendimentoCreateWithoutSupervisorExecutorInput, AtendimentoUncheckedCreateWithoutSupervisorExecutorInput> | AtendimentoCreateWithoutSupervisorExecutorInput[] | AtendimentoUncheckedCreateWithoutSupervisorExecutorInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutSupervisorExecutorInput | AtendimentoCreateOrConnectWithoutSupervisorExecutorInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutSupervisorExecutorInput | AtendimentoUpsertWithWhereUniqueWithoutSupervisorExecutorInput[]
    createMany?: AtendimentoCreateManySupervisorExecutorInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutSupervisorExecutorInput | AtendimentoUpdateWithWhereUniqueWithoutSupervisorExecutorInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutSupervisorExecutorInput | AtendimentoUpdateManyWithWhereWithoutSupervisorExecutorInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput = {
    create?: XOR<RelatorioAltaCreateWithoutEstagiarioInput, RelatorioAltaUncheckedCreateWithoutEstagiarioInput> | RelatorioAltaCreateWithoutEstagiarioInput[] | RelatorioAltaUncheckedCreateWithoutEstagiarioInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutEstagiarioInput | RelatorioAltaCreateOrConnectWithoutEstagiarioInput[]
    upsert?: RelatorioAltaUpsertWithWhereUniqueWithoutEstagiarioInput | RelatorioAltaUpsertWithWhereUniqueWithoutEstagiarioInput[]
    createMany?: RelatorioAltaCreateManyEstagiarioInputEnvelope
    set?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    disconnect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    delete?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    update?: RelatorioAltaUpdateWithWhereUniqueWithoutEstagiarioInput | RelatorioAltaUpdateWithWhereUniqueWithoutEstagiarioInput[]
    updateMany?: RelatorioAltaUpdateManyWithWhereWithoutEstagiarioInput | RelatorioAltaUpdateManyWithWhereWithoutEstagiarioInput[]
    deleteMany?: RelatorioAltaScalarWhereInput | RelatorioAltaScalarWhereInput[]
  }

  export type RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<RelatorioAltaCreateWithoutSupervisorInput, RelatorioAltaUncheckedCreateWithoutSupervisorInput> | RelatorioAltaCreateWithoutSupervisorInput[] | RelatorioAltaUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutSupervisorInput | RelatorioAltaCreateOrConnectWithoutSupervisorInput[]
    upsert?: RelatorioAltaUpsertWithWhereUniqueWithoutSupervisorInput | RelatorioAltaUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: RelatorioAltaCreateManySupervisorInputEnvelope
    set?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    disconnect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    delete?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    update?: RelatorioAltaUpdateWithWhereUniqueWithoutSupervisorInput | RelatorioAltaUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: RelatorioAltaUpdateManyWithWhereWithoutSupervisorInput | RelatorioAltaUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: RelatorioAltaScalarWhereInput | RelatorioAltaScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput = {
    create?: XOR<PacienteCreateWithoutEstagiarioResponsavelInput, PacienteUncheckedCreateWithoutEstagiarioResponsavelInput> | PacienteCreateWithoutEstagiarioResponsavelInput[] | PacienteUncheckedCreateWithoutEstagiarioResponsavelInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutEstagiarioResponsavelInput | PacienteCreateOrConnectWithoutEstagiarioResponsavelInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutEstagiarioResponsavelInput | PacienteUpsertWithWhereUniqueWithoutEstagiarioResponsavelInput[]
    createMany?: PacienteCreateManyEstagiarioResponsavelInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutEstagiarioResponsavelInput | PacienteUpdateWithWhereUniqueWithoutEstagiarioResponsavelInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutEstagiarioResponsavelInput | PacienteUpdateManyWithWhereWithoutEstagiarioResponsavelInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput = {
    create?: XOR<PacienteCreateWithoutSupervisorResponsavelInput, PacienteUncheckedCreateWithoutSupervisorResponsavelInput> | PacienteCreateWithoutSupervisorResponsavelInput[] | PacienteUncheckedCreateWithoutSupervisorResponsavelInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutSupervisorResponsavelInput | PacienteCreateOrConnectWithoutSupervisorResponsavelInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutSupervisorResponsavelInput | PacienteUpsertWithWhereUniqueWithoutSupervisorResponsavelInput[]
    createMany?: PacienteCreateManySupervisorResponsavelInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutSupervisorResponsavelInput | PacienteUpdateWithWhereUniqueWithoutSupervisorResponsavelInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutSupervisorResponsavelInput | PacienteUpdateManyWithWhereWithoutSupervisorResponsavelInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput> | UsuarioCreateWithoutRoleInput[] | UsuarioUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRoleInput | UsuarioCreateOrConnectWithoutRoleInput[]
    createMany?: UsuarioCreateManyRoleInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput> | UsuarioCreateWithoutRoleInput[] | UsuarioUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRoleInput | UsuarioCreateOrConnectWithoutRoleInput[]
    createMany?: UsuarioCreateManyRoleInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput> | UsuarioCreateWithoutRoleInput[] | UsuarioUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRoleInput | UsuarioCreateOrConnectWithoutRoleInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRoleInput | UsuarioUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsuarioCreateManyRoleInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRoleInput | UsuarioUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRoleInput | UsuarioUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput> | UsuarioCreateWithoutRoleInput[] | UsuarioUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRoleInput | UsuarioCreateOrConnectWithoutRoleInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRoleInput | UsuarioUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsuarioCreateManyRoleInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRoleInput | UsuarioUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRoleInput | UsuarioUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type GeneroCreateNestedOneWithoutPacientesInput = {
    create?: XOR<GeneroCreateWithoutPacientesInput, GeneroUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutPacientesInput
    connect?: GeneroWhereUniqueInput
  }

  export type CorPeleCreateNestedOneWithoutPacientesInput = {
    create?: XOR<CorPeleCreateWithoutPacientesInput, CorPeleUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: CorPeleCreateOrConnectWithoutPacientesInput
    connect?: CorPeleWhereUniqueInput
  }

  export type EscolaridadeCreateNestedOneWithoutPacientesInput = {
    create?: XOR<EscolaridadeCreateWithoutPacientesInput, EscolaridadeUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: EscolaridadeCreateOrConnectWithoutPacientesInput
    connect?: EscolaridadeWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput = {
    create?: XOR<UsuarioCreateWithoutPacientesComoEstagiarioInput, UsuarioUncheckedCreateWithoutPacientesComoEstagiarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacientesComoEstagiarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput = {
    create?: XOR<UsuarioCreateWithoutPacientesComoSupervisorInput, UsuarioUncheckedCreateWithoutPacientesComoSupervisorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacientesComoSupervisorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RelatorioAltaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RelatorioAltaCreateWithoutPacienteInput, RelatorioAltaUncheckedCreateWithoutPacienteInput> | RelatorioAltaCreateWithoutPacienteInput[] | RelatorioAltaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutPacienteInput | RelatorioAltaCreateOrConnectWithoutPacienteInput[]
    createMany?: RelatorioAltaCreateManyPacienteInputEnvelope
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
  }

  export type LogAuditoriaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<LogAuditoriaCreateWithoutPacienteInput, LogAuditoriaUncheckedCreateWithoutPacienteInput> | LogAuditoriaCreateWithoutPacienteInput[] | LogAuditoriaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutPacienteInput | LogAuditoriaCreateOrConnectWithoutPacienteInput[]
    createMany?: LogAuditoriaCreateManyPacienteInputEnvelope
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
  }

  export type AtendimentoCreateNestedManyWithoutPacienteInput = {
    create?: XOR<AtendimentoCreateWithoutPacienteInput, AtendimentoUncheckedCreateWithoutPacienteInput> | AtendimentoCreateWithoutPacienteInput[] | AtendimentoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutPacienteInput | AtendimentoCreateOrConnectWithoutPacienteInput[]
    createMany?: AtendimentoCreateManyPacienteInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RelatorioAltaCreateWithoutPacienteInput, RelatorioAltaUncheckedCreateWithoutPacienteInput> | RelatorioAltaCreateWithoutPacienteInput[] | RelatorioAltaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutPacienteInput | RelatorioAltaCreateOrConnectWithoutPacienteInput[]
    createMany?: RelatorioAltaCreateManyPacienteInputEnvelope
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
  }

  export type LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<LogAuditoriaCreateWithoutPacienteInput, LogAuditoriaUncheckedCreateWithoutPacienteInput> | LogAuditoriaCreateWithoutPacienteInput[] | LogAuditoriaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutPacienteInput | LogAuditoriaCreateOrConnectWithoutPacienteInput[]
    createMany?: LogAuditoriaCreateManyPacienteInputEnvelope
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<AtendimentoCreateWithoutPacienteInput, AtendimentoUncheckedCreateWithoutPacienteInput> | AtendimentoCreateWithoutPacienteInput[] | AtendimentoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutPacienteInput | AtendimentoCreateOrConnectWithoutPacienteInput[]
    createMany?: AtendimentoCreateManyPacienteInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GeneroUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<GeneroCreateWithoutPacientesInput, GeneroUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutPacientesInput
    upsert?: GeneroUpsertWithoutPacientesInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutPacientesInput, GeneroUpdateWithoutPacientesInput>, GeneroUncheckedUpdateWithoutPacientesInput>
  }

  export type CorPeleUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<CorPeleCreateWithoutPacientesInput, CorPeleUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: CorPeleCreateOrConnectWithoutPacientesInput
    upsert?: CorPeleUpsertWithoutPacientesInput
    connect?: CorPeleWhereUniqueInput
    update?: XOR<XOR<CorPeleUpdateToOneWithWhereWithoutPacientesInput, CorPeleUpdateWithoutPacientesInput>, CorPeleUncheckedUpdateWithoutPacientesInput>
  }

  export type EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<EscolaridadeCreateWithoutPacientesInput, EscolaridadeUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: EscolaridadeCreateOrConnectWithoutPacientesInput
    upsert?: EscolaridadeUpsertWithoutPacientesInput
    connect?: EscolaridadeWhereUniqueInput
    update?: XOR<XOR<EscolaridadeUpdateToOneWithWhereWithoutPacientesInput, EscolaridadeUpdateWithoutPacientesInput>, EscolaridadeUncheckedUpdateWithoutPacientesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutPacientesComoEstagiarioInput, UsuarioUncheckedCreateWithoutPacientesComoEstagiarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacientesComoEstagiarioInput
    upsert?: UsuarioUpsertWithoutPacientesComoEstagiarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPacientesComoEstagiarioInput, UsuarioUpdateWithoutPacientesComoEstagiarioInput>, UsuarioUncheckedUpdateWithoutPacientesComoEstagiarioInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput = {
    create?: XOR<UsuarioCreateWithoutPacientesComoSupervisorInput, UsuarioUncheckedCreateWithoutPacientesComoSupervisorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacientesComoSupervisorInput
    upsert?: UsuarioUpsertWithoutPacientesComoSupervisorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPacientesComoSupervisorInput, UsuarioUpdateWithoutPacientesComoSupervisorInput>, UsuarioUncheckedUpdateWithoutPacientesComoSupervisorInput>
  }

  export type RelatorioAltaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RelatorioAltaCreateWithoutPacienteInput, RelatorioAltaUncheckedCreateWithoutPacienteInput> | RelatorioAltaCreateWithoutPacienteInput[] | RelatorioAltaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutPacienteInput | RelatorioAltaCreateOrConnectWithoutPacienteInput[]
    upsert?: RelatorioAltaUpsertWithWhereUniqueWithoutPacienteInput | RelatorioAltaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RelatorioAltaCreateManyPacienteInputEnvelope
    set?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    disconnect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    delete?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    update?: RelatorioAltaUpdateWithWhereUniqueWithoutPacienteInput | RelatorioAltaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RelatorioAltaUpdateManyWithWhereWithoutPacienteInput | RelatorioAltaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RelatorioAltaScalarWhereInput | RelatorioAltaScalarWhereInput[]
  }

  export type LogAuditoriaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<LogAuditoriaCreateWithoutPacienteInput, LogAuditoriaUncheckedCreateWithoutPacienteInput> | LogAuditoriaCreateWithoutPacienteInput[] | LogAuditoriaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutPacienteInput | LogAuditoriaCreateOrConnectWithoutPacienteInput[]
    upsert?: LogAuditoriaUpsertWithWhereUniqueWithoutPacienteInput | LogAuditoriaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: LogAuditoriaCreateManyPacienteInputEnvelope
    set?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    disconnect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    delete?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    update?: LogAuditoriaUpdateWithWhereUniqueWithoutPacienteInput | LogAuditoriaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: LogAuditoriaUpdateManyWithWhereWithoutPacienteInput | LogAuditoriaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
  }

  export type AtendimentoUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<AtendimentoCreateWithoutPacienteInput, AtendimentoUncheckedCreateWithoutPacienteInput> | AtendimentoCreateWithoutPacienteInput[] | AtendimentoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutPacienteInput | AtendimentoCreateOrConnectWithoutPacienteInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutPacienteInput | AtendimentoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: AtendimentoCreateManyPacienteInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutPacienteInput | AtendimentoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutPacienteInput | AtendimentoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RelatorioAltaCreateWithoutPacienteInput, RelatorioAltaUncheckedCreateWithoutPacienteInput> | RelatorioAltaCreateWithoutPacienteInput[] | RelatorioAltaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RelatorioAltaCreateOrConnectWithoutPacienteInput | RelatorioAltaCreateOrConnectWithoutPacienteInput[]
    upsert?: RelatorioAltaUpsertWithWhereUniqueWithoutPacienteInput | RelatorioAltaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RelatorioAltaCreateManyPacienteInputEnvelope
    set?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    disconnect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    delete?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    connect?: RelatorioAltaWhereUniqueInput | RelatorioAltaWhereUniqueInput[]
    update?: RelatorioAltaUpdateWithWhereUniqueWithoutPacienteInput | RelatorioAltaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RelatorioAltaUpdateManyWithWhereWithoutPacienteInput | RelatorioAltaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RelatorioAltaScalarWhereInput | RelatorioAltaScalarWhereInput[]
  }

  export type LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<LogAuditoriaCreateWithoutPacienteInput, LogAuditoriaUncheckedCreateWithoutPacienteInput> | LogAuditoriaCreateWithoutPacienteInput[] | LogAuditoriaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutPacienteInput | LogAuditoriaCreateOrConnectWithoutPacienteInput[]
    upsert?: LogAuditoriaUpsertWithWhereUniqueWithoutPacienteInput | LogAuditoriaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: LogAuditoriaCreateManyPacienteInputEnvelope
    set?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    disconnect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    delete?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    update?: LogAuditoriaUpdateWithWhereUniqueWithoutPacienteInput | LogAuditoriaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: LogAuditoriaUpdateManyWithWhereWithoutPacienteInput | LogAuditoriaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<AtendimentoCreateWithoutPacienteInput, AtendimentoUncheckedCreateWithoutPacienteInput> | AtendimentoCreateWithoutPacienteInput[] | AtendimentoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutPacienteInput | AtendimentoCreateOrConnectWithoutPacienteInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutPacienteInput | AtendimentoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: AtendimentoCreateManyPacienteInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutPacienteInput | AtendimentoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutPacienteInput | AtendimentoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDocumentosUsuarioInput = {
    create?: XOR<UsuarioCreateWithoutDocumentosUsuarioInput, UsuarioUncheckedCreateWithoutDocumentosUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDocumentosUsuarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutDocumentosUsuarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutDocumentosUsuarioInput, UsuarioUncheckedCreateWithoutDocumentosUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDocumentosUsuarioInput
    upsert?: UsuarioUpsertWithoutDocumentosUsuarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDocumentosUsuarioInput, UsuarioUpdateWithoutDocumentosUsuarioInput>, UsuarioUncheckedUpdateWithoutDocumentosUsuarioInput>
  }

  export type PacienteCreateNestedOneWithoutRelatoriosAltaInput = {
    create?: XOR<PacienteCreateWithoutRelatoriosAltaInput, PacienteUncheckedCreateWithoutRelatoriosAltaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutRelatoriosAltaInput
    connect?: PacienteWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutRelatorioComoEstagiarioInput = {
    create?: XOR<UsuarioCreateWithoutRelatorioComoEstagiarioInput, UsuarioUncheckedCreateWithoutRelatorioComoEstagiarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRelatorioComoEstagiarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutRelatorioComoSupervisorInput = {
    create?: XOR<UsuarioCreateWithoutRelatorioComoSupervisorInput, UsuarioUncheckedCreateWithoutRelatorioComoSupervisorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRelatorioComoSupervisorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumStatusRelatorioEnumFieldUpdateOperationsInput = {
    set?: $Enums.StatusRelatorioEnum
  }

  export type PacienteUpdateOneRequiredWithoutRelatoriosAltaNestedInput = {
    create?: XOR<PacienteCreateWithoutRelatoriosAltaInput, PacienteUncheckedCreateWithoutRelatoriosAltaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutRelatoriosAltaInput
    upsert?: PacienteUpsertWithoutRelatoriosAltaInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutRelatoriosAltaInput, PacienteUpdateWithoutRelatoriosAltaInput>, PacienteUncheckedUpdateWithoutRelatoriosAltaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutRelatorioComoEstagiarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutRelatorioComoEstagiarioInput, UsuarioUncheckedCreateWithoutRelatorioComoEstagiarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRelatorioComoEstagiarioInput
    upsert?: UsuarioUpsertWithoutRelatorioComoEstagiarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRelatorioComoEstagiarioInput, UsuarioUpdateWithoutRelatorioComoEstagiarioInput>, UsuarioUncheckedUpdateWithoutRelatorioComoEstagiarioInput>
  }

  export type UsuarioUpdateOneRequiredWithoutRelatorioComoSupervisorNestedInput = {
    create?: XOR<UsuarioCreateWithoutRelatorioComoSupervisorInput, UsuarioUncheckedCreateWithoutRelatorioComoSupervisorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRelatorioComoSupervisorInput
    upsert?: UsuarioUpsertWithoutRelatorioComoSupervisorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRelatorioComoSupervisorInput, UsuarioUpdateWithoutRelatorioComoSupervisorInput>, UsuarioUncheckedUpdateWithoutRelatorioComoSupervisorInput>
  }

  export type UsuarioCreateNestedOneWithoutLogsExecutadosInput = {
    create?: XOR<UsuarioCreateWithoutLogsExecutadosInput, UsuarioUncheckedCreateWithoutLogsExecutadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsExecutadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutLogsAuditoriaInput = {
    create?: XOR<PacienteCreateWithoutLogsAuditoriaInput, PacienteUncheckedCreateWithoutLogsAuditoriaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutLogsAuditoriaInput
    connect?: PacienteWhereUniqueInput
  }

  export type EnumTipoAcaoEnumFieldUpdateOperationsInput = {
    set?: $Enums.TipoAcaoEnum
  }

  export type UsuarioUpdateOneRequiredWithoutLogsExecutadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutLogsExecutadosInput, UsuarioUncheckedCreateWithoutLogsExecutadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsExecutadosInput
    upsert?: UsuarioUpsertWithoutLogsExecutadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLogsExecutadosInput, UsuarioUpdateWithoutLogsExecutadosInput>, UsuarioUncheckedUpdateWithoutLogsExecutadosInput>
  }

  export type PacienteUpdateOneRequiredWithoutLogsAuditoriaNestedInput = {
    create?: XOR<PacienteCreateWithoutLogsAuditoriaInput, PacienteUncheckedCreateWithoutLogsAuditoriaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutLogsAuditoriaInput
    upsert?: PacienteUpsertWithoutLogsAuditoriaInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutLogsAuditoriaInput, PacienteUpdateWithoutLogsAuditoriaInput>, PacienteUncheckedUpdateWithoutLogsAuditoriaInput>
  }

  export type PacienteCreateNestedOneWithoutAtendimentosInput = {
    create?: XOR<PacienteCreateWithoutAtendimentosInput, PacienteUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutAtendimentosInput
    connect?: PacienteWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAtendimentoComoEstagiarioInput = {
    create?: XOR<UsuarioCreateWithoutAtendimentoComoEstagiarioInput, UsuarioUncheckedCreateWithoutAtendimentoComoEstagiarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtendimentoComoEstagiarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAtendimentoComoSupervisorInput = {
    create?: XOR<UsuarioCreateWithoutAtendimentoComoSupervisorInput, UsuarioUncheckedCreateWithoutAtendimentoComoSupervisorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtendimentoComoSupervisorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type StatusAtendimentoCreateNestedOneWithoutAtendimentosInput = {
    create?: XOR<StatusAtendimentoCreateWithoutAtendimentosInput, StatusAtendimentoUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: StatusAtendimentoCreateOrConnectWithoutAtendimentosInput
    connect?: StatusAtendimentoWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutAtendimentosNestedInput = {
    create?: XOR<PacienteCreateWithoutAtendimentosInput, PacienteUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutAtendimentosInput
    upsert?: PacienteUpsertWithoutAtendimentosInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutAtendimentosInput, PacienteUpdateWithoutAtendimentosInput>, PacienteUncheckedUpdateWithoutAtendimentosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAtendimentoComoEstagiarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtendimentoComoEstagiarioInput, UsuarioUncheckedCreateWithoutAtendimentoComoEstagiarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtendimentoComoEstagiarioInput
    upsert?: UsuarioUpsertWithoutAtendimentoComoEstagiarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtendimentoComoEstagiarioInput, UsuarioUpdateWithoutAtendimentoComoEstagiarioInput>, UsuarioUncheckedUpdateWithoutAtendimentoComoEstagiarioInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAtendimentoComoSupervisorNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtendimentoComoSupervisorInput, UsuarioUncheckedCreateWithoutAtendimentoComoSupervisorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtendimentoComoSupervisorInput
    upsert?: UsuarioUpsertWithoutAtendimentoComoSupervisorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtendimentoComoSupervisorInput, UsuarioUpdateWithoutAtendimentoComoSupervisorInput>, UsuarioUncheckedUpdateWithoutAtendimentoComoSupervisorInput>
  }

  export type StatusAtendimentoUpdateOneRequiredWithoutAtendimentosNestedInput = {
    create?: XOR<StatusAtendimentoCreateWithoutAtendimentosInput, StatusAtendimentoUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: StatusAtendimentoCreateOrConnectWithoutAtendimentosInput
    upsert?: StatusAtendimentoUpsertWithoutAtendimentosInput
    connect?: StatusAtendimentoWhereUniqueInput
    update?: XOR<XOR<StatusAtendimentoUpdateToOneWithWhereWithoutAtendimentosInput, StatusAtendimentoUpdateWithoutAtendimentosInput>, StatusAtendimentoUncheckedUpdateWithoutAtendimentosInput>
  }

  export type GeneroCreateNestedOneWithoutListaEsperaInput = {
    create?: XOR<GeneroCreateWithoutListaEsperaInput, GeneroUncheckedCreateWithoutListaEsperaInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutListaEsperaInput
    connect?: GeneroWhereUniqueInput
  }

  export type CorPeleCreateNestedOneWithoutListaEsperaInput = {
    create?: XOR<CorPeleCreateWithoutListaEsperaInput, CorPeleUncheckedCreateWithoutListaEsperaInput>
    connectOrCreate?: CorPeleCreateOrConnectWithoutListaEsperaInput
    connect?: CorPeleWhereUniqueInput
  }

  export type EscolaridadeCreateNestedOneWithoutListaEsperaInput = {
    create?: XOR<EscolaridadeCreateWithoutListaEsperaInput, EscolaridadeUncheckedCreateWithoutListaEsperaInput>
    connectOrCreate?: EscolaridadeCreateOrConnectWithoutListaEsperaInput
    connect?: EscolaridadeWhereUniqueInput
  }

  export type GeneroUpdateOneRequiredWithoutListaEsperaNestedInput = {
    create?: XOR<GeneroCreateWithoutListaEsperaInput, GeneroUncheckedCreateWithoutListaEsperaInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutListaEsperaInput
    upsert?: GeneroUpsertWithoutListaEsperaInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutListaEsperaInput, GeneroUpdateWithoutListaEsperaInput>, GeneroUncheckedUpdateWithoutListaEsperaInput>
  }

  export type CorPeleUpdateOneRequiredWithoutListaEsperaNestedInput = {
    create?: XOR<CorPeleCreateWithoutListaEsperaInput, CorPeleUncheckedCreateWithoutListaEsperaInput>
    connectOrCreate?: CorPeleCreateOrConnectWithoutListaEsperaInput
    upsert?: CorPeleUpsertWithoutListaEsperaInput
    connect?: CorPeleWhereUniqueInput
    update?: XOR<XOR<CorPeleUpdateToOneWithWhereWithoutListaEsperaInput, CorPeleUpdateWithoutListaEsperaInput>, CorPeleUncheckedUpdateWithoutListaEsperaInput>
  }

  export type EscolaridadeUpdateOneRequiredWithoutListaEsperaNestedInput = {
    create?: XOR<EscolaridadeCreateWithoutListaEsperaInput, EscolaridadeUncheckedCreateWithoutListaEsperaInput>
    connectOrCreate?: EscolaridadeCreateOrConnectWithoutListaEsperaInput
    upsert?: EscolaridadeUpsertWithoutListaEsperaInput
    connect?: EscolaridadeWhereUniqueInput
    update?: XOR<XOR<EscolaridadeUpdateToOneWithWhereWithoutListaEsperaInput, EscolaridadeUpdateWithoutListaEsperaInput>, EscolaridadeUncheckedUpdateWithoutListaEsperaInput>
  }

  export type PacienteCreateNestedManyWithoutGeneroInput = {
    create?: XOR<PacienteCreateWithoutGeneroInput, PacienteUncheckedCreateWithoutGeneroInput> | PacienteCreateWithoutGeneroInput[] | PacienteUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutGeneroInput | PacienteCreateOrConnectWithoutGeneroInput[]
    createMany?: PacienteCreateManyGeneroInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ListaEsperaCreateNestedManyWithoutGeneroInput = {
    create?: XOR<ListaEsperaCreateWithoutGeneroInput, ListaEsperaUncheckedCreateWithoutGeneroInput> | ListaEsperaCreateWithoutGeneroInput[] | ListaEsperaUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutGeneroInput | ListaEsperaCreateOrConnectWithoutGeneroInput[]
    createMany?: ListaEsperaCreateManyGeneroInputEnvelope
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<PacienteCreateWithoutGeneroInput, PacienteUncheckedCreateWithoutGeneroInput> | PacienteCreateWithoutGeneroInput[] | PacienteUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutGeneroInput | PacienteCreateOrConnectWithoutGeneroInput[]
    createMany?: PacienteCreateManyGeneroInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ListaEsperaUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<ListaEsperaCreateWithoutGeneroInput, ListaEsperaUncheckedCreateWithoutGeneroInput> | ListaEsperaCreateWithoutGeneroInput[] | ListaEsperaUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutGeneroInput | ListaEsperaCreateOrConnectWithoutGeneroInput[]
    createMany?: ListaEsperaCreateManyGeneroInputEnvelope
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
  }

  export type PacienteUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<PacienteCreateWithoutGeneroInput, PacienteUncheckedCreateWithoutGeneroInput> | PacienteCreateWithoutGeneroInput[] | PacienteUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutGeneroInput | PacienteCreateOrConnectWithoutGeneroInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutGeneroInput | PacienteUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: PacienteCreateManyGeneroInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutGeneroInput | PacienteUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutGeneroInput | PacienteUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ListaEsperaUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<ListaEsperaCreateWithoutGeneroInput, ListaEsperaUncheckedCreateWithoutGeneroInput> | ListaEsperaCreateWithoutGeneroInput[] | ListaEsperaUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutGeneroInput | ListaEsperaCreateOrConnectWithoutGeneroInput[]
    upsert?: ListaEsperaUpsertWithWhereUniqueWithoutGeneroInput | ListaEsperaUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: ListaEsperaCreateManyGeneroInputEnvelope
    set?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    disconnect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    delete?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    update?: ListaEsperaUpdateWithWhereUniqueWithoutGeneroInput | ListaEsperaUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: ListaEsperaUpdateManyWithWhereWithoutGeneroInput | ListaEsperaUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<PacienteCreateWithoutGeneroInput, PacienteUncheckedCreateWithoutGeneroInput> | PacienteCreateWithoutGeneroInput[] | PacienteUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutGeneroInput | PacienteCreateOrConnectWithoutGeneroInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutGeneroInput | PacienteUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: PacienteCreateManyGeneroInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutGeneroInput | PacienteUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutGeneroInput | PacienteUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ListaEsperaUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<ListaEsperaCreateWithoutGeneroInput, ListaEsperaUncheckedCreateWithoutGeneroInput> | ListaEsperaCreateWithoutGeneroInput[] | ListaEsperaUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutGeneroInput | ListaEsperaCreateOrConnectWithoutGeneroInput[]
    upsert?: ListaEsperaUpsertWithWhereUniqueWithoutGeneroInput | ListaEsperaUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: ListaEsperaCreateManyGeneroInputEnvelope
    set?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    disconnect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    delete?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    update?: ListaEsperaUpdateWithWhereUniqueWithoutGeneroInput | ListaEsperaUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: ListaEsperaUpdateManyWithWhereWithoutGeneroInput | ListaEsperaUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
  }

  export type PacienteCreateNestedManyWithoutCorPeleInput = {
    create?: XOR<PacienteCreateWithoutCorPeleInput, PacienteUncheckedCreateWithoutCorPeleInput> | PacienteCreateWithoutCorPeleInput[] | PacienteUncheckedCreateWithoutCorPeleInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutCorPeleInput | PacienteCreateOrConnectWithoutCorPeleInput[]
    createMany?: PacienteCreateManyCorPeleInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ListaEsperaCreateNestedManyWithoutCorPeleInput = {
    create?: XOR<ListaEsperaCreateWithoutCorPeleInput, ListaEsperaUncheckedCreateWithoutCorPeleInput> | ListaEsperaCreateWithoutCorPeleInput[] | ListaEsperaUncheckedCreateWithoutCorPeleInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutCorPeleInput | ListaEsperaCreateOrConnectWithoutCorPeleInput[]
    createMany?: ListaEsperaCreateManyCorPeleInputEnvelope
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutCorPeleInput = {
    create?: XOR<PacienteCreateWithoutCorPeleInput, PacienteUncheckedCreateWithoutCorPeleInput> | PacienteCreateWithoutCorPeleInput[] | PacienteUncheckedCreateWithoutCorPeleInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutCorPeleInput | PacienteCreateOrConnectWithoutCorPeleInput[]
    createMany?: PacienteCreateManyCorPeleInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ListaEsperaUncheckedCreateNestedManyWithoutCorPeleInput = {
    create?: XOR<ListaEsperaCreateWithoutCorPeleInput, ListaEsperaUncheckedCreateWithoutCorPeleInput> | ListaEsperaCreateWithoutCorPeleInput[] | ListaEsperaUncheckedCreateWithoutCorPeleInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutCorPeleInput | ListaEsperaCreateOrConnectWithoutCorPeleInput[]
    createMany?: ListaEsperaCreateManyCorPeleInputEnvelope
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
  }

  export type PacienteUpdateManyWithoutCorPeleNestedInput = {
    create?: XOR<PacienteCreateWithoutCorPeleInput, PacienteUncheckedCreateWithoutCorPeleInput> | PacienteCreateWithoutCorPeleInput[] | PacienteUncheckedCreateWithoutCorPeleInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutCorPeleInput | PacienteCreateOrConnectWithoutCorPeleInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutCorPeleInput | PacienteUpsertWithWhereUniqueWithoutCorPeleInput[]
    createMany?: PacienteCreateManyCorPeleInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutCorPeleInput | PacienteUpdateWithWhereUniqueWithoutCorPeleInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutCorPeleInput | PacienteUpdateManyWithWhereWithoutCorPeleInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ListaEsperaUpdateManyWithoutCorPeleNestedInput = {
    create?: XOR<ListaEsperaCreateWithoutCorPeleInput, ListaEsperaUncheckedCreateWithoutCorPeleInput> | ListaEsperaCreateWithoutCorPeleInput[] | ListaEsperaUncheckedCreateWithoutCorPeleInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutCorPeleInput | ListaEsperaCreateOrConnectWithoutCorPeleInput[]
    upsert?: ListaEsperaUpsertWithWhereUniqueWithoutCorPeleInput | ListaEsperaUpsertWithWhereUniqueWithoutCorPeleInput[]
    createMany?: ListaEsperaCreateManyCorPeleInputEnvelope
    set?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    disconnect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    delete?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    update?: ListaEsperaUpdateWithWhereUniqueWithoutCorPeleInput | ListaEsperaUpdateWithWhereUniqueWithoutCorPeleInput[]
    updateMany?: ListaEsperaUpdateManyWithWhereWithoutCorPeleInput | ListaEsperaUpdateManyWithWhereWithoutCorPeleInput[]
    deleteMany?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutCorPeleNestedInput = {
    create?: XOR<PacienteCreateWithoutCorPeleInput, PacienteUncheckedCreateWithoutCorPeleInput> | PacienteCreateWithoutCorPeleInput[] | PacienteUncheckedCreateWithoutCorPeleInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutCorPeleInput | PacienteCreateOrConnectWithoutCorPeleInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutCorPeleInput | PacienteUpsertWithWhereUniqueWithoutCorPeleInput[]
    createMany?: PacienteCreateManyCorPeleInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutCorPeleInput | PacienteUpdateWithWhereUniqueWithoutCorPeleInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutCorPeleInput | PacienteUpdateManyWithWhereWithoutCorPeleInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ListaEsperaUncheckedUpdateManyWithoutCorPeleNestedInput = {
    create?: XOR<ListaEsperaCreateWithoutCorPeleInput, ListaEsperaUncheckedCreateWithoutCorPeleInput> | ListaEsperaCreateWithoutCorPeleInput[] | ListaEsperaUncheckedCreateWithoutCorPeleInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutCorPeleInput | ListaEsperaCreateOrConnectWithoutCorPeleInput[]
    upsert?: ListaEsperaUpsertWithWhereUniqueWithoutCorPeleInput | ListaEsperaUpsertWithWhereUniqueWithoutCorPeleInput[]
    createMany?: ListaEsperaCreateManyCorPeleInputEnvelope
    set?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    disconnect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    delete?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    update?: ListaEsperaUpdateWithWhereUniqueWithoutCorPeleInput | ListaEsperaUpdateWithWhereUniqueWithoutCorPeleInput[]
    updateMany?: ListaEsperaUpdateManyWithWhereWithoutCorPeleInput | ListaEsperaUpdateManyWithWhereWithoutCorPeleInput[]
    deleteMany?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
  }

  export type PacienteCreateNestedManyWithoutEscolaridadeInput = {
    create?: XOR<PacienteCreateWithoutEscolaridadeInput, PacienteUncheckedCreateWithoutEscolaridadeInput> | PacienteCreateWithoutEscolaridadeInput[] | PacienteUncheckedCreateWithoutEscolaridadeInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutEscolaridadeInput | PacienteCreateOrConnectWithoutEscolaridadeInput[]
    createMany?: PacienteCreateManyEscolaridadeInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ListaEsperaCreateNestedManyWithoutEscolaridadeInput = {
    create?: XOR<ListaEsperaCreateWithoutEscolaridadeInput, ListaEsperaUncheckedCreateWithoutEscolaridadeInput> | ListaEsperaCreateWithoutEscolaridadeInput[] | ListaEsperaUncheckedCreateWithoutEscolaridadeInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutEscolaridadeInput | ListaEsperaCreateOrConnectWithoutEscolaridadeInput[]
    createMany?: ListaEsperaCreateManyEscolaridadeInputEnvelope
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutEscolaridadeInput = {
    create?: XOR<PacienteCreateWithoutEscolaridadeInput, PacienteUncheckedCreateWithoutEscolaridadeInput> | PacienteCreateWithoutEscolaridadeInput[] | PacienteUncheckedCreateWithoutEscolaridadeInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutEscolaridadeInput | PacienteCreateOrConnectWithoutEscolaridadeInput[]
    createMany?: PacienteCreateManyEscolaridadeInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ListaEsperaUncheckedCreateNestedManyWithoutEscolaridadeInput = {
    create?: XOR<ListaEsperaCreateWithoutEscolaridadeInput, ListaEsperaUncheckedCreateWithoutEscolaridadeInput> | ListaEsperaCreateWithoutEscolaridadeInput[] | ListaEsperaUncheckedCreateWithoutEscolaridadeInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutEscolaridadeInput | ListaEsperaCreateOrConnectWithoutEscolaridadeInput[]
    createMany?: ListaEsperaCreateManyEscolaridadeInputEnvelope
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
  }

  export type PacienteUpdateManyWithoutEscolaridadeNestedInput = {
    create?: XOR<PacienteCreateWithoutEscolaridadeInput, PacienteUncheckedCreateWithoutEscolaridadeInput> | PacienteCreateWithoutEscolaridadeInput[] | PacienteUncheckedCreateWithoutEscolaridadeInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutEscolaridadeInput | PacienteCreateOrConnectWithoutEscolaridadeInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutEscolaridadeInput | PacienteUpsertWithWhereUniqueWithoutEscolaridadeInput[]
    createMany?: PacienteCreateManyEscolaridadeInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutEscolaridadeInput | PacienteUpdateWithWhereUniqueWithoutEscolaridadeInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutEscolaridadeInput | PacienteUpdateManyWithWhereWithoutEscolaridadeInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ListaEsperaUpdateManyWithoutEscolaridadeNestedInput = {
    create?: XOR<ListaEsperaCreateWithoutEscolaridadeInput, ListaEsperaUncheckedCreateWithoutEscolaridadeInput> | ListaEsperaCreateWithoutEscolaridadeInput[] | ListaEsperaUncheckedCreateWithoutEscolaridadeInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutEscolaridadeInput | ListaEsperaCreateOrConnectWithoutEscolaridadeInput[]
    upsert?: ListaEsperaUpsertWithWhereUniqueWithoutEscolaridadeInput | ListaEsperaUpsertWithWhereUniqueWithoutEscolaridadeInput[]
    createMany?: ListaEsperaCreateManyEscolaridadeInputEnvelope
    set?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    disconnect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    delete?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    update?: ListaEsperaUpdateWithWhereUniqueWithoutEscolaridadeInput | ListaEsperaUpdateWithWhereUniqueWithoutEscolaridadeInput[]
    updateMany?: ListaEsperaUpdateManyWithWhereWithoutEscolaridadeInput | ListaEsperaUpdateManyWithWhereWithoutEscolaridadeInput[]
    deleteMany?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutEscolaridadeNestedInput = {
    create?: XOR<PacienteCreateWithoutEscolaridadeInput, PacienteUncheckedCreateWithoutEscolaridadeInput> | PacienteCreateWithoutEscolaridadeInput[] | PacienteUncheckedCreateWithoutEscolaridadeInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutEscolaridadeInput | PacienteCreateOrConnectWithoutEscolaridadeInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutEscolaridadeInput | PacienteUpsertWithWhereUniqueWithoutEscolaridadeInput[]
    createMany?: PacienteCreateManyEscolaridadeInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutEscolaridadeInput | PacienteUpdateWithWhereUniqueWithoutEscolaridadeInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutEscolaridadeInput | PacienteUpdateManyWithWhereWithoutEscolaridadeInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ListaEsperaUncheckedUpdateManyWithoutEscolaridadeNestedInput = {
    create?: XOR<ListaEsperaCreateWithoutEscolaridadeInput, ListaEsperaUncheckedCreateWithoutEscolaridadeInput> | ListaEsperaCreateWithoutEscolaridadeInput[] | ListaEsperaUncheckedCreateWithoutEscolaridadeInput[]
    connectOrCreate?: ListaEsperaCreateOrConnectWithoutEscolaridadeInput | ListaEsperaCreateOrConnectWithoutEscolaridadeInput[]
    upsert?: ListaEsperaUpsertWithWhereUniqueWithoutEscolaridadeInput | ListaEsperaUpsertWithWhereUniqueWithoutEscolaridadeInput[]
    createMany?: ListaEsperaCreateManyEscolaridadeInputEnvelope
    set?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    disconnect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    delete?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    connect?: ListaEsperaWhereUniqueInput | ListaEsperaWhereUniqueInput[]
    update?: ListaEsperaUpdateWithWhereUniqueWithoutEscolaridadeInput | ListaEsperaUpdateWithWhereUniqueWithoutEscolaridadeInput[]
    updateMany?: ListaEsperaUpdateManyWithWhereWithoutEscolaridadeInput | ListaEsperaUpdateManyWithWhereWithoutEscolaridadeInput[]
    deleteMany?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
  }

  export type AtendimentoCreateNestedManyWithoutStatusInput = {
    create?: XOR<AtendimentoCreateWithoutStatusInput, AtendimentoUncheckedCreateWithoutStatusInput> | AtendimentoCreateWithoutStatusInput[] | AtendimentoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutStatusInput | AtendimentoCreateOrConnectWithoutStatusInput[]
    createMany?: AtendimentoCreateManyStatusInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<AtendimentoCreateWithoutStatusInput, AtendimentoUncheckedCreateWithoutStatusInput> | AtendimentoCreateWithoutStatusInput[] | AtendimentoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutStatusInput | AtendimentoCreateOrConnectWithoutStatusInput[]
    createMany?: AtendimentoCreateManyStatusInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUpdateManyWithoutStatusNestedInput = {
    create?: XOR<AtendimentoCreateWithoutStatusInput, AtendimentoUncheckedCreateWithoutStatusInput> | AtendimentoCreateWithoutStatusInput[] | AtendimentoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutStatusInput | AtendimentoCreateOrConnectWithoutStatusInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutStatusInput | AtendimentoUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: AtendimentoCreateManyStatusInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutStatusInput | AtendimentoUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutStatusInput | AtendimentoUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<AtendimentoCreateWithoutStatusInput, AtendimentoUncheckedCreateWithoutStatusInput> | AtendimentoCreateWithoutStatusInput[] | AtendimentoUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutStatusInput | AtendimentoCreateOrConnectWithoutStatusInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutStatusInput | AtendimentoUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: AtendimentoCreateManyStatusInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutStatusInput | AtendimentoUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutStatusInput | AtendimentoUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumStatusRelatorioEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRelatorioEnum | EnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRelatorioEnum[] | ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRelatorioEnum[] | ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRelatorioEnumFilter<$PrismaModel> | $Enums.StatusRelatorioEnum
  }

  export type NestedEnumStatusRelatorioEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRelatorioEnum | EnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRelatorioEnum[] | ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRelatorioEnum[] | ListEnumStatusRelatorioEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRelatorioEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusRelatorioEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRelatorioEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusRelatorioEnumFilter<$PrismaModel>
  }

  export type NestedEnumTipoAcaoEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAcaoEnum | EnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAcaoEnum[] | ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAcaoEnum[] | ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAcaoEnumFilter<$PrismaModel> | $Enums.TipoAcaoEnum
  }

  export type NestedEnumTipoAcaoEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAcaoEnum | EnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAcaoEnum[] | ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAcaoEnum[] | ListEnumTipoAcaoEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAcaoEnumWithAggregatesFilter<$PrismaModel> | $Enums.TipoAcaoEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAcaoEnumFilter<$PrismaModel>
    _max?: NestedEnumTipoAcaoEnumFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsuariosInput = {
    id_Role?: string
    role: string
    descricao: string
  }

  export type RoleUncheckedCreateWithoutUsuariosInput = {
    id_Role?: string
    role: string
    descricao: string
  }

  export type RoleCreateOrConnectWithoutUsuariosInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsuariosInput, RoleUncheckedCreateWithoutUsuariosInput>
  }

  export type DocumentoUsuarioCreateWithoutUsuarioInput = {
    id_Documento?: string
    nomeArquivo: string
    caminhoArquivo: string
    dataUpload?: Date | string
  }

  export type DocumentoUsuarioUncheckedCreateWithoutUsuarioInput = {
    id_Documento?: string
    nomeArquivo: string
    caminhoArquivo: string
    dataUpload?: Date | string
  }

  export type DocumentoUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: DocumentoUsuarioWhereUniqueInput
    create: XOR<DocumentoUsuarioCreateWithoutUsuarioInput, DocumentoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type DocumentoUsuarioCreateManyUsuarioInputEnvelope = {
    data: DocumentoUsuarioCreateManyUsuarioInput | DocumentoUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type LogAuditoriaCreateWithoutUsuarioExecutorInput = {
    id_Log?: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
    paciente: PacienteCreateNestedOneWithoutLogsAuditoriaInput
  }

  export type LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput = {
    id_Log?: string
    id_Paciente: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
  }

  export type LogAuditoriaCreateOrConnectWithoutUsuarioExecutorInput = {
    where: LogAuditoriaWhereUniqueInput
    create: XOR<LogAuditoriaCreateWithoutUsuarioExecutorInput, LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput>
  }

  export type LogAuditoriaCreateManyUsuarioExecutorInputEnvelope = {
    data: LogAuditoriaCreateManyUsuarioExecutorInput | LogAuditoriaCreateManyUsuarioExecutorInput[]
    skipDuplicates?: boolean
  }

  export type AtendimentoCreateWithoutEstagiarioExecutorInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    observacoes: string
    paciente: PacienteCreateNestedOneWithoutAtendimentosInput
    supervisorExecutor: UsuarioCreateNestedOneWithoutAtendimentoComoSupervisorInput
    status: StatusAtendimentoCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Paciente: string
    id_Supervisor_Executor: string
    id_Status: number
    observacoes: string
  }

  export type AtendimentoCreateOrConnectWithoutEstagiarioExecutorInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutEstagiarioExecutorInput, AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput>
  }

  export type AtendimentoCreateManyEstagiarioExecutorInputEnvelope = {
    data: AtendimentoCreateManyEstagiarioExecutorInput | AtendimentoCreateManyEstagiarioExecutorInput[]
    skipDuplicates?: boolean
  }

  export type AtendimentoCreateWithoutSupervisorExecutorInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    observacoes: string
    paciente: PacienteCreateNestedOneWithoutAtendimentosInput
    estagiarioExecutor: UsuarioCreateNestedOneWithoutAtendimentoComoEstagiarioInput
    status: StatusAtendimentoCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutSupervisorExecutorInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Paciente: string
    id_Estagiario_Executor: string
    id_Status: number
    observacoes: string
  }

  export type AtendimentoCreateOrConnectWithoutSupervisorExecutorInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutSupervisorExecutorInput, AtendimentoUncheckedCreateWithoutSupervisorExecutorInput>
  }

  export type AtendimentoCreateManySupervisorExecutorInputEnvelope = {
    data: AtendimentoCreateManySupervisorExecutorInput | AtendimentoCreateManySupervisorExecutorInput[]
    skipDuplicates?: boolean
  }

  export type RelatorioAltaCreateWithoutEstagiarioInput = {
    id_Documento?: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
    paciente: PacienteCreateNestedOneWithoutRelatoriosAltaInput
    supervisor: UsuarioCreateNestedOneWithoutRelatorioComoSupervisorInput
  }

  export type RelatorioAltaUncheckedCreateWithoutEstagiarioInput = {
    id_Documento?: string
    id_Paciente: string
    id_Supervisor: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaCreateOrConnectWithoutEstagiarioInput = {
    where: RelatorioAltaWhereUniqueInput
    create: XOR<RelatorioAltaCreateWithoutEstagiarioInput, RelatorioAltaUncheckedCreateWithoutEstagiarioInput>
  }

  export type RelatorioAltaCreateManyEstagiarioInputEnvelope = {
    data: RelatorioAltaCreateManyEstagiarioInput | RelatorioAltaCreateManyEstagiarioInput[]
    skipDuplicates?: boolean
  }

  export type RelatorioAltaCreateWithoutSupervisorInput = {
    id_Documento?: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
    paciente: PacienteCreateNestedOneWithoutRelatoriosAltaInput
    estagiario: UsuarioCreateNestedOneWithoutRelatorioComoEstagiarioInput
  }

  export type RelatorioAltaUncheckedCreateWithoutSupervisorInput = {
    id_Documento?: string
    id_Paciente: string
    id_Estagiario: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaCreateOrConnectWithoutSupervisorInput = {
    where: RelatorioAltaWhereUniqueInput
    create: XOR<RelatorioAltaCreateWithoutSupervisorInput, RelatorioAltaUncheckedCreateWithoutSupervisorInput>
  }

  export type RelatorioAltaCreateManySupervisorInputEnvelope = {
    data: RelatorioAltaCreateManySupervisorInput | RelatorioAltaCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type PacienteCreateWithoutEstagiarioResponsavelInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    genero: GeneroCreateNestedOneWithoutPacientesInput
    corPele: CorPeleCreateNestedOneWithoutPacientesInput
    escolaridade: EscolaridadeCreateNestedOneWithoutPacientesInput
    supervisorResponsavel: UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput
    relatoriosAlta?: RelatorioAltaCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutEstagiarioResponsavelInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Supervisor_Responsavel: string
    relatoriosAlta?: RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutEstagiarioResponsavelInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutEstagiarioResponsavelInput, PacienteUncheckedCreateWithoutEstagiarioResponsavelInput>
  }

  export type PacienteCreateManyEstagiarioResponsavelInputEnvelope = {
    data: PacienteCreateManyEstagiarioResponsavelInput | PacienteCreateManyEstagiarioResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type PacienteCreateWithoutSupervisorResponsavelInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    genero: GeneroCreateNestedOneWithoutPacientesInput
    corPele: CorPeleCreateNestedOneWithoutPacientesInput
    escolaridade: EscolaridadeCreateNestedOneWithoutPacientesInput
    estagiarioResponsavel: UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput
    relatoriosAlta?: RelatorioAltaCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutSupervisorResponsavelInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    relatoriosAlta?: RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutSupervisorResponsavelInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutSupervisorResponsavelInput, PacienteUncheckedCreateWithoutSupervisorResponsavelInput>
  }

  export type PacienteCreateManySupervisorResponsavelInputEnvelope = {
    data: PacienteCreateManySupervisorResponsavelInput | PacienteCreateManySupervisorResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsuariosInput = {
    update: XOR<RoleUpdateWithoutUsuariosInput, RoleUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RoleCreateWithoutUsuariosInput, RoleUncheckedCreateWithoutUsuariosInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsuariosInput, RoleUncheckedUpdateWithoutUsuariosInput>
  }

  export type RoleUpdateWithoutUsuariosInput = {
    id_Role?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsuariosInput = {
    id_Role?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DocumentoUsuarioWhereUniqueInput
    update: XOR<DocumentoUsuarioUpdateWithoutUsuarioInput, DocumentoUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DocumentoUsuarioCreateWithoutUsuarioInput, DocumentoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type DocumentoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DocumentoUsuarioWhereUniqueInput
    data: XOR<DocumentoUsuarioUpdateWithoutUsuarioInput, DocumentoUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type DocumentoUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: DocumentoUsuarioScalarWhereInput
    data: XOR<DocumentoUsuarioUpdateManyMutationInput, DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DocumentoUsuarioScalarWhereInput = {
    AND?: DocumentoUsuarioScalarWhereInput | DocumentoUsuarioScalarWhereInput[]
    OR?: DocumentoUsuarioScalarWhereInput[]
    NOT?: DocumentoUsuarioScalarWhereInput | DocumentoUsuarioScalarWhereInput[]
    id_Documento?: UuidFilter<"DocumentoUsuario"> | string
    id_User?: UuidFilter<"DocumentoUsuario"> | string
    nomeArquivo?: StringFilter<"DocumentoUsuario"> | string
    caminhoArquivo?: StringFilter<"DocumentoUsuario"> | string
    dataUpload?: DateTimeFilter<"DocumentoUsuario"> | Date | string
  }

  export type LogAuditoriaUpsertWithWhereUniqueWithoutUsuarioExecutorInput = {
    where: LogAuditoriaWhereUniqueInput
    update: XOR<LogAuditoriaUpdateWithoutUsuarioExecutorInput, LogAuditoriaUncheckedUpdateWithoutUsuarioExecutorInput>
    create: XOR<LogAuditoriaCreateWithoutUsuarioExecutorInput, LogAuditoriaUncheckedCreateWithoutUsuarioExecutorInput>
  }

  export type LogAuditoriaUpdateWithWhereUniqueWithoutUsuarioExecutorInput = {
    where: LogAuditoriaWhereUniqueInput
    data: XOR<LogAuditoriaUpdateWithoutUsuarioExecutorInput, LogAuditoriaUncheckedUpdateWithoutUsuarioExecutorInput>
  }

  export type LogAuditoriaUpdateManyWithWhereWithoutUsuarioExecutorInput = {
    where: LogAuditoriaScalarWhereInput
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorInput>
  }

  export type LogAuditoriaScalarWhereInput = {
    AND?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
    OR?: LogAuditoriaScalarWhereInput[]
    NOT?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
    id_Log?: UuidFilter<"LogAuditoria"> | string
    id_Usuario_Executor?: UuidFilter<"LogAuditoria"> | string
    id_Paciente?: UuidFilter<"LogAuditoria"> | string
    tipoAcao?: EnumTipoAcaoEnumFilter<"LogAuditoria"> | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFilter<"LogAuditoria"> | Date | string
    detalhes?: StringFilter<"LogAuditoria"> | string
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutEstagiarioExecutorInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutEstagiarioExecutorInput, AtendimentoUncheckedUpdateWithoutEstagiarioExecutorInput>
    create: XOR<AtendimentoCreateWithoutEstagiarioExecutorInput, AtendimentoUncheckedCreateWithoutEstagiarioExecutorInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutEstagiarioExecutorInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutEstagiarioExecutorInput, AtendimentoUncheckedUpdateWithoutEstagiarioExecutorInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutEstagiarioExecutorInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorInput>
  }

  export type AtendimentoScalarWhereInput = {
    AND?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    OR?: AtendimentoScalarWhereInput[]
    NOT?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    id_Atendimento?: UuidFilter<"Atendimento"> | string
    dataHoraInicio?: DateTimeFilter<"Atendimento"> | Date | string
    dataHoraFim?: DateTimeFilter<"Atendimento"> | Date | string
    id_Paciente?: UuidFilter<"Atendimento"> | string
    id_Estagiario_Executor?: UuidFilter<"Atendimento"> | string
    id_Supervisor_Executor?: UuidFilter<"Atendimento"> | string
    id_Status?: IntFilter<"Atendimento"> | number
    observacoes?: StringFilter<"Atendimento"> | string
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutSupervisorExecutorInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutSupervisorExecutorInput, AtendimentoUncheckedUpdateWithoutSupervisorExecutorInput>
    create: XOR<AtendimentoCreateWithoutSupervisorExecutorInput, AtendimentoUncheckedCreateWithoutSupervisorExecutorInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutSupervisorExecutorInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutSupervisorExecutorInput, AtendimentoUncheckedUpdateWithoutSupervisorExecutorInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutSupervisorExecutorInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorInput>
  }

  export type RelatorioAltaUpsertWithWhereUniqueWithoutEstagiarioInput = {
    where: RelatorioAltaWhereUniqueInput
    update: XOR<RelatorioAltaUpdateWithoutEstagiarioInput, RelatorioAltaUncheckedUpdateWithoutEstagiarioInput>
    create: XOR<RelatorioAltaCreateWithoutEstagiarioInput, RelatorioAltaUncheckedCreateWithoutEstagiarioInput>
  }

  export type RelatorioAltaUpdateWithWhereUniqueWithoutEstagiarioInput = {
    where: RelatorioAltaWhereUniqueInput
    data: XOR<RelatorioAltaUpdateWithoutEstagiarioInput, RelatorioAltaUncheckedUpdateWithoutEstagiarioInput>
  }

  export type RelatorioAltaUpdateManyWithWhereWithoutEstagiarioInput = {
    where: RelatorioAltaScalarWhereInput
    data: XOR<RelatorioAltaUpdateManyMutationInput, RelatorioAltaUncheckedUpdateManyWithoutEstagiarioInput>
  }

  export type RelatorioAltaScalarWhereInput = {
    AND?: RelatorioAltaScalarWhereInput | RelatorioAltaScalarWhereInput[]
    OR?: RelatorioAltaScalarWhereInput[]
    NOT?: RelatorioAltaScalarWhereInput | RelatorioAltaScalarWhereInput[]
    id_Documento?: UuidFilter<"RelatorioAlta"> | string
    id_Paciente?: UuidFilter<"RelatorioAlta"> | string
    id_Estagiario?: UuidFilter<"RelatorioAlta"> | string
    id_Supervisor?: UuidFilter<"RelatorioAlta"> | string
    conteudo?: StringFilter<"RelatorioAlta"> | string
    dataEmissao?: DateTimeFilter<"RelatorioAlta"> | Date | string
    status?: EnumStatusRelatorioEnumFilter<"RelatorioAlta"> | $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: RelatorioAltaWhereUniqueInput
    update: XOR<RelatorioAltaUpdateWithoutSupervisorInput, RelatorioAltaUncheckedUpdateWithoutSupervisorInput>
    create: XOR<RelatorioAltaCreateWithoutSupervisorInput, RelatorioAltaUncheckedCreateWithoutSupervisorInput>
  }

  export type RelatorioAltaUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: RelatorioAltaWhereUniqueInput
    data: XOR<RelatorioAltaUpdateWithoutSupervisorInput, RelatorioAltaUncheckedUpdateWithoutSupervisorInput>
  }

  export type RelatorioAltaUpdateManyWithWhereWithoutSupervisorInput = {
    where: RelatorioAltaScalarWhereInput
    data: XOR<RelatorioAltaUpdateManyMutationInput, RelatorioAltaUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type PacienteUpsertWithWhereUniqueWithoutEstagiarioResponsavelInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutEstagiarioResponsavelInput, PacienteUncheckedUpdateWithoutEstagiarioResponsavelInput>
    create: XOR<PacienteCreateWithoutEstagiarioResponsavelInput, PacienteUncheckedCreateWithoutEstagiarioResponsavelInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutEstagiarioResponsavelInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutEstagiarioResponsavelInput, PacienteUncheckedUpdateWithoutEstagiarioResponsavelInput>
  }

  export type PacienteUpdateManyWithWhereWithoutEstagiarioResponsavelInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelInput>
  }

  export type PacienteScalarWhereInput = {
    AND?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    OR?: PacienteScalarWhereInput[]
    NOT?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    id_Paciente?: UuidFilter<"Paciente"> | string
    nomeRegistro?: StringFilter<"Paciente"> | string
    nomeSocial?: StringNullableFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    id_Genero?: IntFilter<"Paciente"> | number
    id_CorPele?: IntFilter<"Paciente"> | number
    id_Escolaridade?: IntFilter<"Paciente"> | number
    telefonePessoal?: StringFilter<"Paciente"> | string
    contatoEmergencia?: StringFilter<"Paciente"> | string
    enderecoRua?: StringFilter<"Paciente"> | string
    enderecoNumero?: StringFilter<"Paciente"> | string
    enderecoBairro?: StringFilter<"Paciente"> | string
    enderecoCidade?: StringFilter<"Paciente"> | string
    enderecoEstado?: StringFilter<"Paciente"> | string
    enderecoCEP?: StringFilter<"Paciente"> | string
    dataInicioTratamento?: DateTimeFilter<"Paciente"> | Date | string
    id_Estagiario_Responsavel?: UuidFilter<"Paciente"> | string
    id_Supervisor_Responsavel?: UuidFilter<"Paciente"> | string
  }

  export type PacienteUpsertWithWhereUniqueWithoutSupervisorResponsavelInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutSupervisorResponsavelInput, PacienteUncheckedUpdateWithoutSupervisorResponsavelInput>
    create: XOR<PacienteCreateWithoutSupervisorResponsavelInput, PacienteUncheckedCreateWithoutSupervisorResponsavelInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutSupervisorResponsavelInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutSupervisorResponsavelInput, PacienteUncheckedUpdateWithoutSupervisorResponsavelInput>
  }

  export type PacienteUpdateManyWithWhereWithoutSupervisorResponsavelInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutSupervisorResponsavelInput>
  }

  export type UsuarioCreateWithoutRoleInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutRoleInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutRoleInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput>
  }

  export type UsuarioCreateManyRoleInputEnvelope = {
    data: UsuarioCreateManyRoleInput | UsuarioCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRoleInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRoleInput, UsuarioUncheckedUpdateWithoutRoleInput>
    create: XOR<UsuarioCreateWithoutRoleInput, UsuarioUncheckedCreateWithoutRoleInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRoleInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRoleInput, UsuarioUncheckedUpdateWithoutRoleInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRoleInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRoleInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id_User?: UuidFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    roleId?: UuidFilter<"Usuario"> | string
  }

  export type GeneroCreateWithoutPacientesInput = {
    nome: string
    listaEspera?: ListaEsperaCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateWithoutPacientesInput = {
    id_Genero?: number
    nome: string
    listaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroCreateOrConnectWithoutPacientesInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutPacientesInput, GeneroUncheckedCreateWithoutPacientesInput>
  }

  export type CorPeleCreateWithoutPacientesInput = {
    nome: string
    listaEspera?: ListaEsperaCreateNestedManyWithoutCorPeleInput
  }

  export type CorPeleUncheckedCreateWithoutPacientesInput = {
    id_CorPele?: number
    nome: string
    listaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutCorPeleInput
  }

  export type CorPeleCreateOrConnectWithoutPacientesInput = {
    where: CorPeleWhereUniqueInput
    create: XOR<CorPeleCreateWithoutPacientesInput, CorPeleUncheckedCreateWithoutPacientesInput>
  }

  export type EscolaridadeCreateWithoutPacientesInput = {
    nome: string
    listaEspera?: ListaEsperaCreateNestedManyWithoutEscolaridadeInput
  }

  export type EscolaridadeUncheckedCreateWithoutPacientesInput = {
    id_Escolaridade?: number
    nome: string
    listaEspera?: ListaEsperaUncheckedCreateNestedManyWithoutEscolaridadeInput
  }

  export type EscolaridadeCreateOrConnectWithoutPacientesInput = {
    where: EscolaridadeWhereUniqueInput
    create: XOR<EscolaridadeCreateWithoutPacientesInput, EscolaridadeUncheckedCreateWithoutPacientesInput>
  }

  export type UsuarioCreateWithoutPacientesComoEstagiarioInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutPacientesComoEstagiarioInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutPacientesComoEstagiarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPacientesComoEstagiarioInput, UsuarioUncheckedCreateWithoutPacientesComoEstagiarioInput>
  }

  export type UsuarioCreateWithoutPacientesComoSupervisorInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutPacientesComoSupervisorInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutPacientesComoSupervisorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPacientesComoSupervisorInput, UsuarioUncheckedCreateWithoutPacientesComoSupervisorInput>
  }

  export type RelatorioAltaCreateWithoutPacienteInput = {
    id_Documento?: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
    estagiario: UsuarioCreateNestedOneWithoutRelatorioComoEstagiarioInput
    supervisor: UsuarioCreateNestedOneWithoutRelatorioComoSupervisorInput
  }

  export type RelatorioAltaUncheckedCreateWithoutPacienteInput = {
    id_Documento?: string
    id_Estagiario: string
    id_Supervisor: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaCreateOrConnectWithoutPacienteInput = {
    where: RelatorioAltaWhereUniqueInput
    create: XOR<RelatorioAltaCreateWithoutPacienteInput, RelatorioAltaUncheckedCreateWithoutPacienteInput>
  }

  export type RelatorioAltaCreateManyPacienteInputEnvelope = {
    data: RelatorioAltaCreateManyPacienteInput | RelatorioAltaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type LogAuditoriaCreateWithoutPacienteInput = {
    id_Log?: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
    usuarioExecutor: UsuarioCreateNestedOneWithoutLogsExecutadosInput
  }

  export type LogAuditoriaUncheckedCreateWithoutPacienteInput = {
    id_Log?: string
    id_Usuario_Executor: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
  }

  export type LogAuditoriaCreateOrConnectWithoutPacienteInput = {
    where: LogAuditoriaWhereUniqueInput
    create: XOR<LogAuditoriaCreateWithoutPacienteInput, LogAuditoriaUncheckedCreateWithoutPacienteInput>
  }

  export type LogAuditoriaCreateManyPacienteInputEnvelope = {
    data: LogAuditoriaCreateManyPacienteInput | LogAuditoriaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type AtendimentoCreateWithoutPacienteInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    observacoes: string
    estagiarioExecutor: UsuarioCreateNestedOneWithoutAtendimentoComoEstagiarioInput
    supervisorExecutor: UsuarioCreateNestedOneWithoutAtendimentoComoSupervisorInput
    status: StatusAtendimentoCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutPacienteInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Estagiario_Executor: string
    id_Supervisor_Executor: string
    id_Status: number
    observacoes: string
  }

  export type AtendimentoCreateOrConnectWithoutPacienteInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutPacienteInput, AtendimentoUncheckedCreateWithoutPacienteInput>
  }

  export type AtendimentoCreateManyPacienteInputEnvelope = {
    data: AtendimentoCreateManyPacienteInput | AtendimentoCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type GeneroUpsertWithoutPacientesInput = {
    update: XOR<GeneroUpdateWithoutPacientesInput, GeneroUncheckedUpdateWithoutPacientesInput>
    create: XOR<GeneroCreateWithoutPacientesInput, GeneroUncheckedCreateWithoutPacientesInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutPacientesInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutPacientesInput, GeneroUncheckedUpdateWithoutPacientesInput>
  }

  export type GeneroUpdateWithoutPacientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    listaEspera?: ListaEsperaUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateWithoutPacientesInput = {
    id_Genero?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    listaEspera?: ListaEsperaUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type CorPeleUpsertWithoutPacientesInput = {
    update: XOR<CorPeleUpdateWithoutPacientesInput, CorPeleUncheckedUpdateWithoutPacientesInput>
    create: XOR<CorPeleCreateWithoutPacientesInput, CorPeleUncheckedCreateWithoutPacientesInput>
    where?: CorPeleWhereInput
  }

  export type CorPeleUpdateToOneWithWhereWithoutPacientesInput = {
    where?: CorPeleWhereInput
    data: XOR<CorPeleUpdateWithoutPacientesInput, CorPeleUncheckedUpdateWithoutPacientesInput>
  }

  export type CorPeleUpdateWithoutPacientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    listaEspera?: ListaEsperaUpdateManyWithoutCorPeleNestedInput
  }

  export type CorPeleUncheckedUpdateWithoutPacientesInput = {
    id_CorPele?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    listaEspera?: ListaEsperaUncheckedUpdateManyWithoutCorPeleNestedInput
  }

  export type EscolaridadeUpsertWithoutPacientesInput = {
    update: XOR<EscolaridadeUpdateWithoutPacientesInput, EscolaridadeUncheckedUpdateWithoutPacientesInput>
    create: XOR<EscolaridadeCreateWithoutPacientesInput, EscolaridadeUncheckedCreateWithoutPacientesInput>
    where?: EscolaridadeWhereInput
  }

  export type EscolaridadeUpdateToOneWithWhereWithoutPacientesInput = {
    where?: EscolaridadeWhereInput
    data: XOR<EscolaridadeUpdateWithoutPacientesInput, EscolaridadeUncheckedUpdateWithoutPacientesInput>
  }

  export type EscolaridadeUpdateWithoutPacientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    listaEspera?: ListaEsperaUpdateManyWithoutEscolaridadeNestedInput
  }

  export type EscolaridadeUncheckedUpdateWithoutPacientesInput = {
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    listaEspera?: ListaEsperaUncheckedUpdateManyWithoutEscolaridadeNestedInput
  }

  export type UsuarioUpsertWithoutPacientesComoEstagiarioInput = {
    update: XOR<UsuarioUpdateWithoutPacientesComoEstagiarioInput, UsuarioUncheckedUpdateWithoutPacientesComoEstagiarioInput>
    create: XOR<UsuarioCreateWithoutPacientesComoEstagiarioInput, UsuarioUncheckedCreateWithoutPacientesComoEstagiarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPacientesComoEstagiarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPacientesComoEstagiarioInput, UsuarioUncheckedUpdateWithoutPacientesComoEstagiarioInput>
  }

  export type UsuarioUpdateWithoutPacientesComoEstagiarioInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPacientesComoEstagiarioInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUpsertWithoutPacientesComoSupervisorInput = {
    update: XOR<UsuarioUpdateWithoutPacientesComoSupervisorInput, UsuarioUncheckedUpdateWithoutPacientesComoSupervisorInput>
    create: XOR<UsuarioCreateWithoutPacientesComoSupervisorInput, UsuarioUncheckedCreateWithoutPacientesComoSupervisorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPacientesComoSupervisorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPacientesComoSupervisorInput, UsuarioUncheckedUpdateWithoutPacientesComoSupervisorInput>
  }

  export type UsuarioUpdateWithoutPacientesComoSupervisorInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPacientesComoSupervisorInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
  }

  export type RelatorioAltaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: RelatorioAltaWhereUniqueInput
    update: XOR<RelatorioAltaUpdateWithoutPacienteInput, RelatorioAltaUncheckedUpdateWithoutPacienteInput>
    create: XOR<RelatorioAltaCreateWithoutPacienteInput, RelatorioAltaUncheckedCreateWithoutPacienteInput>
  }

  export type RelatorioAltaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: RelatorioAltaWhereUniqueInput
    data: XOR<RelatorioAltaUpdateWithoutPacienteInput, RelatorioAltaUncheckedUpdateWithoutPacienteInput>
  }

  export type RelatorioAltaUpdateManyWithWhereWithoutPacienteInput = {
    where: RelatorioAltaScalarWhereInput
    data: XOR<RelatorioAltaUpdateManyMutationInput, RelatorioAltaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type LogAuditoriaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: LogAuditoriaWhereUniqueInput
    update: XOR<LogAuditoriaUpdateWithoutPacienteInput, LogAuditoriaUncheckedUpdateWithoutPacienteInput>
    create: XOR<LogAuditoriaCreateWithoutPacienteInput, LogAuditoriaUncheckedCreateWithoutPacienteInput>
  }

  export type LogAuditoriaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: LogAuditoriaWhereUniqueInput
    data: XOR<LogAuditoriaUpdateWithoutPacienteInput, LogAuditoriaUncheckedUpdateWithoutPacienteInput>
  }

  export type LogAuditoriaUpdateManyWithWhereWithoutPacienteInput = {
    where: LogAuditoriaScalarWhereInput
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutPacienteInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutPacienteInput, AtendimentoUncheckedUpdateWithoutPacienteInput>
    create: XOR<AtendimentoCreateWithoutPacienteInput, AtendimentoUncheckedCreateWithoutPacienteInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutPacienteInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutPacienteInput, AtendimentoUncheckedUpdateWithoutPacienteInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutPacienteInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutPacienteInput>
  }

  export type UsuarioCreateWithoutDocumentosUsuarioInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutDocumentosUsuarioInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutDocumentosUsuarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDocumentosUsuarioInput, UsuarioUncheckedCreateWithoutDocumentosUsuarioInput>
  }

  export type UsuarioUpsertWithoutDocumentosUsuarioInput = {
    update: XOR<UsuarioUpdateWithoutDocumentosUsuarioInput, UsuarioUncheckedUpdateWithoutDocumentosUsuarioInput>
    create: XOR<UsuarioCreateWithoutDocumentosUsuarioInput, UsuarioUncheckedCreateWithoutDocumentosUsuarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDocumentosUsuarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDocumentosUsuarioInput, UsuarioUncheckedUpdateWithoutDocumentosUsuarioInput>
  }

  export type UsuarioUpdateWithoutDocumentosUsuarioInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDocumentosUsuarioInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type PacienteCreateWithoutRelatoriosAltaInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    genero: GeneroCreateNestedOneWithoutPacientesInput
    corPele: CorPeleCreateNestedOneWithoutPacientesInput
    escolaridade: EscolaridadeCreateNestedOneWithoutPacientesInput
    estagiarioResponsavel: UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput
    supervisorResponsavel: UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutRelatoriosAltaInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutRelatoriosAltaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutRelatoriosAltaInput, PacienteUncheckedCreateWithoutRelatoriosAltaInput>
  }

  export type UsuarioCreateWithoutRelatorioComoEstagiarioInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutRelatorioComoEstagiarioInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutRelatorioComoEstagiarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRelatorioComoEstagiarioInput, UsuarioUncheckedCreateWithoutRelatorioComoEstagiarioInput>
  }

  export type UsuarioCreateWithoutRelatorioComoSupervisorInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutRelatorioComoSupervisorInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutRelatorioComoSupervisorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRelatorioComoSupervisorInput, UsuarioUncheckedCreateWithoutRelatorioComoSupervisorInput>
  }

  export type PacienteUpsertWithoutRelatoriosAltaInput = {
    update: XOR<PacienteUpdateWithoutRelatoriosAltaInput, PacienteUncheckedUpdateWithoutRelatoriosAltaInput>
    create: XOR<PacienteCreateWithoutRelatoriosAltaInput, PacienteUncheckedCreateWithoutRelatoriosAltaInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutRelatoriosAltaInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutRelatoriosAltaInput, PacienteUncheckedUpdateWithoutRelatoriosAltaInput>
  }

  export type PacienteUpdateWithoutRelatoriosAltaInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutPacientesNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutPacientesNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput
    estagiarioResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput
    supervisorResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput
    logsAuditoria?: LogAuditoriaUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutRelatoriosAltaInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUpsertWithoutRelatorioComoEstagiarioInput = {
    update: XOR<UsuarioUpdateWithoutRelatorioComoEstagiarioInput, UsuarioUncheckedUpdateWithoutRelatorioComoEstagiarioInput>
    create: XOR<UsuarioCreateWithoutRelatorioComoEstagiarioInput, UsuarioUncheckedCreateWithoutRelatorioComoEstagiarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRelatorioComoEstagiarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRelatorioComoEstagiarioInput, UsuarioUncheckedUpdateWithoutRelatorioComoEstagiarioInput>
  }

  export type UsuarioUpdateWithoutRelatorioComoEstagiarioInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRelatorioComoEstagiarioInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUpsertWithoutRelatorioComoSupervisorInput = {
    update: XOR<UsuarioUpdateWithoutRelatorioComoSupervisorInput, UsuarioUncheckedUpdateWithoutRelatorioComoSupervisorInput>
    create: XOR<UsuarioCreateWithoutRelatorioComoSupervisorInput, UsuarioUncheckedCreateWithoutRelatorioComoSupervisorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRelatorioComoSupervisorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRelatorioComoSupervisorInput, UsuarioUncheckedUpdateWithoutRelatorioComoSupervisorInput>
  }

  export type UsuarioUpdateWithoutRelatorioComoSupervisorInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRelatorioComoSupervisorInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioCreateWithoutLogsExecutadosInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutLogsExecutadosInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutLogsExecutadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLogsExecutadosInput, UsuarioUncheckedCreateWithoutLogsExecutadosInput>
  }

  export type PacienteCreateWithoutLogsAuditoriaInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    genero: GeneroCreateNestedOneWithoutPacientesInput
    corPele: CorPeleCreateNestedOneWithoutPacientesInput
    escolaridade: EscolaridadeCreateNestedOneWithoutPacientesInput
    estagiarioResponsavel: UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput
    supervisorResponsavel: UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput
    relatoriosAlta?: RelatorioAltaCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutLogsAuditoriaInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
    relatoriosAlta?: RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutLogsAuditoriaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutLogsAuditoriaInput, PacienteUncheckedCreateWithoutLogsAuditoriaInput>
  }

  export type UsuarioUpsertWithoutLogsExecutadosInput = {
    update: XOR<UsuarioUpdateWithoutLogsExecutadosInput, UsuarioUncheckedUpdateWithoutLogsExecutadosInput>
    create: XOR<UsuarioCreateWithoutLogsExecutadosInput, UsuarioUncheckedCreateWithoutLogsExecutadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLogsExecutadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLogsExecutadosInput, UsuarioUncheckedUpdateWithoutLogsExecutadosInput>
  }

  export type UsuarioUpdateWithoutLogsExecutadosInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLogsExecutadosInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type PacienteUpsertWithoutLogsAuditoriaInput = {
    update: XOR<PacienteUpdateWithoutLogsAuditoriaInput, PacienteUncheckedUpdateWithoutLogsAuditoriaInput>
    create: XOR<PacienteCreateWithoutLogsAuditoriaInput, PacienteUncheckedCreateWithoutLogsAuditoriaInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutLogsAuditoriaInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutLogsAuditoriaInput, PacienteUncheckedUpdateWithoutLogsAuditoriaInput>
  }

  export type PacienteUpdateWithoutLogsAuditoriaInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutPacientesNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutPacientesNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput
    estagiarioResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput
    supervisorResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput
    relatoriosAlta?: RelatorioAltaUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutLogsAuditoriaInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
    relatoriosAlta?: RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateWithoutAtendimentosInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    genero: GeneroCreateNestedOneWithoutPacientesInput
    corPele: CorPeleCreateNestedOneWithoutPacientesInput
    escolaridade: EscolaridadeCreateNestedOneWithoutPacientesInput
    estagiarioResponsavel: UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput
    supervisorResponsavel: UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput
    relatoriosAlta?: RelatorioAltaCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutAtendimentosInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
    relatoriosAlta?: RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutAtendimentosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutAtendimentosInput, PacienteUncheckedCreateWithoutAtendimentosInput>
  }

  export type UsuarioCreateWithoutAtendimentoComoEstagiarioInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutAtendimentoComoEstagiarioInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoSupervisor?: AtendimentoUncheckedCreateNestedManyWithoutSupervisorExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutAtendimentoComoEstagiarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtendimentoComoEstagiarioInput, UsuarioUncheckedCreateWithoutAtendimentoComoEstagiarioInput>
  }

  export type UsuarioCreateWithoutAtendimentoComoSupervisorInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    role: RoleCreateNestedOneWithoutUsuariosInput
    documentosUsuario?: DocumentoUsuarioCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoCreateNestedManyWithoutEstagiarioExecutorInput
    relatorioComoEstagiario?: RelatorioAltaCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioUncheckedCreateWithoutAtendimentoComoSupervisorInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
    roleId: string
    documentosUsuario?: DocumentoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    logsExecutados?: LogAuditoriaUncheckedCreateNestedManyWithoutUsuarioExecutorInput
    atendimentoComoEstagiario?: AtendimentoUncheckedCreateNestedManyWithoutEstagiarioExecutorInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedCreateNestedManyWithoutEstagiarioInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedCreateNestedManyWithoutSupervisorInput
    pacientesComoEstagiario?: PacienteUncheckedCreateNestedManyWithoutEstagiarioResponsavelInput
    pacientesComoSupervisor?: PacienteUncheckedCreateNestedManyWithoutSupervisorResponsavelInput
  }

  export type UsuarioCreateOrConnectWithoutAtendimentoComoSupervisorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtendimentoComoSupervisorInput, UsuarioUncheckedCreateWithoutAtendimentoComoSupervisorInput>
  }

  export type StatusAtendimentoCreateWithoutAtendimentosInput = {
    nome: string
  }

  export type StatusAtendimentoUncheckedCreateWithoutAtendimentosInput = {
    id_Status?: number
    nome: string
  }

  export type StatusAtendimentoCreateOrConnectWithoutAtendimentosInput = {
    where: StatusAtendimentoWhereUniqueInput
    create: XOR<StatusAtendimentoCreateWithoutAtendimentosInput, StatusAtendimentoUncheckedCreateWithoutAtendimentosInput>
  }

  export type PacienteUpsertWithoutAtendimentosInput = {
    update: XOR<PacienteUpdateWithoutAtendimentosInput, PacienteUncheckedUpdateWithoutAtendimentosInput>
    create: XOR<PacienteCreateWithoutAtendimentosInput, PacienteUncheckedCreateWithoutAtendimentosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutAtendimentosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutAtendimentosInput, PacienteUncheckedUpdateWithoutAtendimentosInput>
  }

  export type PacienteUpdateWithoutAtendimentosInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutPacientesNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutPacientesNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput
    estagiarioResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput
    supervisorResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput
    relatoriosAlta?: RelatorioAltaUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutAtendimentosInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
    relatoriosAlta?: RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type UsuarioUpsertWithoutAtendimentoComoEstagiarioInput = {
    update: XOR<UsuarioUpdateWithoutAtendimentoComoEstagiarioInput, UsuarioUncheckedUpdateWithoutAtendimentoComoEstagiarioInput>
    create: XOR<UsuarioCreateWithoutAtendimentoComoEstagiarioInput, UsuarioUncheckedCreateWithoutAtendimentoComoEstagiarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtendimentoComoEstagiarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtendimentoComoEstagiarioInput, UsuarioUncheckedUpdateWithoutAtendimentoComoEstagiarioInput>
  }

  export type UsuarioUpdateWithoutAtendimentoComoEstagiarioInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAtendimentoComoEstagiarioInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUpsertWithoutAtendimentoComoSupervisorInput = {
    update: XOR<UsuarioUpdateWithoutAtendimentoComoSupervisorInput, UsuarioUncheckedUpdateWithoutAtendimentoComoSupervisorInput>
    create: XOR<UsuarioCreateWithoutAtendimentoComoSupervisorInput, UsuarioUncheckedCreateWithoutAtendimentoComoSupervisorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtendimentoComoSupervisorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtendimentoComoSupervisorInput, UsuarioUncheckedUpdateWithoutAtendimentoComoSupervisorInput>
  }

  export type UsuarioUpdateWithoutAtendimentoComoSupervisorInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsuariosNestedInput
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAtendimentoComoSupervisorInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type StatusAtendimentoUpsertWithoutAtendimentosInput = {
    update: XOR<StatusAtendimentoUpdateWithoutAtendimentosInput, StatusAtendimentoUncheckedUpdateWithoutAtendimentosInput>
    create: XOR<StatusAtendimentoCreateWithoutAtendimentosInput, StatusAtendimentoUncheckedCreateWithoutAtendimentosInput>
    where?: StatusAtendimentoWhereInput
  }

  export type StatusAtendimentoUpdateToOneWithWhereWithoutAtendimentosInput = {
    where?: StatusAtendimentoWhereInput
    data: XOR<StatusAtendimentoUpdateWithoutAtendimentosInput, StatusAtendimentoUncheckedUpdateWithoutAtendimentosInput>
  }

  export type StatusAtendimentoUpdateWithoutAtendimentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type StatusAtendimentoUncheckedUpdateWithoutAtendimentosInput = {
    id_Status?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroCreateWithoutListaEsperaInput = {
    nome: string
    pacientes?: PacienteCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateWithoutListaEsperaInput = {
    id_Genero?: number
    nome: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroCreateOrConnectWithoutListaEsperaInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutListaEsperaInput, GeneroUncheckedCreateWithoutListaEsperaInput>
  }

  export type CorPeleCreateWithoutListaEsperaInput = {
    nome: string
    pacientes?: PacienteCreateNestedManyWithoutCorPeleInput
  }

  export type CorPeleUncheckedCreateWithoutListaEsperaInput = {
    id_CorPele?: number
    nome: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutCorPeleInput
  }

  export type CorPeleCreateOrConnectWithoutListaEsperaInput = {
    where: CorPeleWhereUniqueInput
    create: XOR<CorPeleCreateWithoutListaEsperaInput, CorPeleUncheckedCreateWithoutListaEsperaInput>
  }

  export type EscolaridadeCreateWithoutListaEsperaInput = {
    nome: string
    pacientes?: PacienteCreateNestedManyWithoutEscolaridadeInput
  }

  export type EscolaridadeUncheckedCreateWithoutListaEsperaInput = {
    id_Escolaridade?: number
    nome: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutEscolaridadeInput
  }

  export type EscolaridadeCreateOrConnectWithoutListaEsperaInput = {
    where: EscolaridadeWhereUniqueInput
    create: XOR<EscolaridadeCreateWithoutListaEsperaInput, EscolaridadeUncheckedCreateWithoutListaEsperaInput>
  }

  export type GeneroUpsertWithoutListaEsperaInput = {
    update: XOR<GeneroUpdateWithoutListaEsperaInput, GeneroUncheckedUpdateWithoutListaEsperaInput>
    create: XOR<GeneroCreateWithoutListaEsperaInput, GeneroUncheckedCreateWithoutListaEsperaInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutListaEsperaInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutListaEsperaInput, GeneroUncheckedUpdateWithoutListaEsperaInput>
  }

  export type GeneroUpdateWithoutListaEsperaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateWithoutListaEsperaInput = {
    id_Genero?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type CorPeleUpsertWithoutListaEsperaInput = {
    update: XOR<CorPeleUpdateWithoutListaEsperaInput, CorPeleUncheckedUpdateWithoutListaEsperaInput>
    create: XOR<CorPeleCreateWithoutListaEsperaInput, CorPeleUncheckedCreateWithoutListaEsperaInput>
    where?: CorPeleWhereInput
  }

  export type CorPeleUpdateToOneWithWhereWithoutListaEsperaInput = {
    where?: CorPeleWhereInput
    data: XOR<CorPeleUpdateWithoutListaEsperaInput, CorPeleUncheckedUpdateWithoutListaEsperaInput>
  }

  export type CorPeleUpdateWithoutListaEsperaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutCorPeleNestedInput
  }

  export type CorPeleUncheckedUpdateWithoutListaEsperaInput = {
    id_CorPele?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutCorPeleNestedInput
  }

  export type EscolaridadeUpsertWithoutListaEsperaInput = {
    update: XOR<EscolaridadeUpdateWithoutListaEsperaInput, EscolaridadeUncheckedUpdateWithoutListaEsperaInput>
    create: XOR<EscolaridadeCreateWithoutListaEsperaInput, EscolaridadeUncheckedCreateWithoutListaEsperaInput>
    where?: EscolaridadeWhereInput
  }

  export type EscolaridadeUpdateToOneWithWhereWithoutListaEsperaInput = {
    where?: EscolaridadeWhereInput
    data: XOR<EscolaridadeUpdateWithoutListaEsperaInput, EscolaridadeUncheckedUpdateWithoutListaEsperaInput>
  }

  export type EscolaridadeUpdateWithoutListaEsperaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutEscolaridadeNestedInput
  }

  export type EscolaridadeUncheckedUpdateWithoutListaEsperaInput = {
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutEscolaridadeNestedInput
  }

  export type PacienteCreateWithoutGeneroInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    corPele: CorPeleCreateNestedOneWithoutPacientesInput
    escolaridade: EscolaridadeCreateNestedOneWithoutPacientesInput
    estagiarioResponsavel: UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput
    supervisorResponsavel: UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput
    relatoriosAlta?: RelatorioAltaCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutGeneroInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
    relatoriosAlta?: RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutGeneroInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutGeneroInput, PacienteUncheckedCreateWithoutGeneroInput>
  }

  export type PacienteCreateManyGeneroInputEnvelope = {
    data: PacienteCreateManyGeneroInput | PacienteCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type ListaEsperaCreateWithoutGeneroInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    corPele: CorPeleCreateNestedOneWithoutListaEsperaInput
    escolaridade: EscolaridadeCreateNestedOneWithoutListaEsperaInput
  }

  export type ListaEsperaUncheckedCreateWithoutGeneroInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    id_CorPele: number
    id_Escolaridade: number
  }

  export type ListaEsperaCreateOrConnectWithoutGeneroInput = {
    where: ListaEsperaWhereUniqueInput
    create: XOR<ListaEsperaCreateWithoutGeneroInput, ListaEsperaUncheckedCreateWithoutGeneroInput>
  }

  export type ListaEsperaCreateManyGeneroInputEnvelope = {
    data: ListaEsperaCreateManyGeneroInput | ListaEsperaCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithWhereUniqueWithoutGeneroInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutGeneroInput, PacienteUncheckedUpdateWithoutGeneroInput>
    create: XOR<PacienteCreateWithoutGeneroInput, PacienteUncheckedCreateWithoutGeneroInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutGeneroInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutGeneroInput, PacienteUncheckedUpdateWithoutGeneroInput>
  }

  export type PacienteUpdateManyWithWhereWithoutGeneroInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutGeneroInput>
  }

  export type ListaEsperaUpsertWithWhereUniqueWithoutGeneroInput = {
    where: ListaEsperaWhereUniqueInput
    update: XOR<ListaEsperaUpdateWithoutGeneroInput, ListaEsperaUncheckedUpdateWithoutGeneroInput>
    create: XOR<ListaEsperaCreateWithoutGeneroInput, ListaEsperaUncheckedCreateWithoutGeneroInput>
  }

  export type ListaEsperaUpdateWithWhereUniqueWithoutGeneroInput = {
    where: ListaEsperaWhereUniqueInput
    data: XOR<ListaEsperaUpdateWithoutGeneroInput, ListaEsperaUncheckedUpdateWithoutGeneroInput>
  }

  export type ListaEsperaUpdateManyWithWhereWithoutGeneroInput = {
    where: ListaEsperaScalarWhereInput
    data: XOR<ListaEsperaUpdateManyMutationInput, ListaEsperaUncheckedUpdateManyWithoutGeneroInput>
  }

  export type ListaEsperaScalarWhereInput = {
    AND?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
    OR?: ListaEsperaScalarWhereInput[]
    NOT?: ListaEsperaScalarWhereInput | ListaEsperaScalarWhereInput[]
    id_Lista?: UuidFilter<"ListaEspera"> | string
    nomeRegistro?: StringFilter<"ListaEspera"> | string
    nomeSocial?: StringNullableFilter<"ListaEspera"> | string | null
    dataNascimento?: DateTimeFilter<"ListaEspera"> | Date | string
    telefonePessoal?: StringFilter<"ListaEspera"> | string
    contatoEmergencia?: StringFilter<"ListaEspera"> | string
    enderecoRua?: StringFilter<"ListaEspera"> | string
    enderecoNumero?: StringFilter<"ListaEspera"> | string
    enderecoBairro?: StringFilter<"ListaEspera"> | string
    enderecoCidade?: StringFilter<"ListaEspera"> | string
    enderecoEstado?: StringFilter<"ListaEspera"> | string
    enderecoCEP?: StringFilter<"ListaEspera"> | string
    createdAt?: DateTimeFilter<"ListaEspera"> | Date | string
    id_Genero?: IntFilter<"ListaEspera"> | number
    id_CorPele?: IntFilter<"ListaEspera"> | number
    id_Escolaridade?: IntFilter<"ListaEspera"> | number
  }

  export type PacienteCreateWithoutCorPeleInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    genero: GeneroCreateNestedOneWithoutPacientesInput
    escolaridade: EscolaridadeCreateNestedOneWithoutPacientesInput
    estagiarioResponsavel: UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput
    supervisorResponsavel: UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput
    relatoriosAlta?: RelatorioAltaCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutCorPeleInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
    relatoriosAlta?: RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutCorPeleInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutCorPeleInput, PacienteUncheckedCreateWithoutCorPeleInput>
  }

  export type PacienteCreateManyCorPeleInputEnvelope = {
    data: PacienteCreateManyCorPeleInput | PacienteCreateManyCorPeleInput[]
    skipDuplicates?: boolean
  }

  export type ListaEsperaCreateWithoutCorPeleInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    genero: GeneroCreateNestedOneWithoutListaEsperaInput
    escolaridade: EscolaridadeCreateNestedOneWithoutListaEsperaInput
  }

  export type ListaEsperaUncheckedCreateWithoutCorPeleInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    id_Genero: number
    id_Escolaridade: number
  }

  export type ListaEsperaCreateOrConnectWithoutCorPeleInput = {
    where: ListaEsperaWhereUniqueInput
    create: XOR<ListaEsperaCreateWithoutCorPeleInput, ListaEsperaUncheckedCreateWithoutCorPeleInput>
  }

  export type ListaEsperaCreateManyCorPeleInputEnvelope = {
    data: ListaEsperaCreateManyCorPeleInput | ListaEsperaCreateManyCorPeleInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithWhereUniqueWithoutCorPeleInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutCorPeleInput, PacienteUncheckedUpdateWithoutCorPeleInput>
    create: XOR<PacienteCreateWithoutCorPeleInput, PacienteUncheckedCreateWithoutCorPeleInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutCorPeleInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutCorPeleInput, PacienteUncheckedUpdateWithoutCorPeleInput>
  }

  export type PacienteUpdateManyWithWhereWithoutCorPeleInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutCorPeleInput>
  }

  export type ListaEsperaUpsertWithWhereUniqueWithoutCorPeleInput = {
    where: ListaEsperaWhereUniqueInput
    update: XOR<ListaEsperaUpdateWithoutCorPeleInput, ListaEsperaUncheckedUpdateWithoutCorPeleInput>
    create: XOR<ListaEsperaCreateWithoutCorPeleInput, ListaEsperaUncheckedCreateWithoutCorPeleInput>
  }

  export type ListaEsperaUpdateWithWhereUniqueWithoutCorPeleInput = {
    where: ListaEsperaWhereUniqueInput
    data: XOR<ListaEsperaUpdateWithoutCorPeleInput, ListaEsperaUncheckedUpdateWithoutCorPeleInput>
  }

  export type ListaEsperaUpdateManyWithWhereWithoutCorPeleInput = {
    where: ListaEsperaScalarWhereInput
    data: XOR<ListaEsperaUpdateManyMutationInput, ListaEsperaUncheckedUpdateManyWithoutCorPeleInput>
  }

  export type PacienteCreateWithoutEscolaridadeInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    genero: GeneroCreateNestedOneWithoutPacientesInput
    corPele: CorPeleCreateNestedOneWithoutPacientesInput
    estagiarioResponsavel: UsuarioCreateNestedOneWithoutPacientesComoEstagiarioInput
    supervisorResponsavel: UsuarioCreateNestedOneWithoutPacientesComoSupervisorInput
    relatoriosAlta?: RelatorioAltaCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutEscolaridadeInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
    relatoriosAlta?: RelatorioAltaUncheckedCreateNestedManyWithoutPacienteInput
    logsAuditoria?: LogAuditoriaUncheckedCreateNestedManyWithoutPacienteInput
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutEscolaridadeInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutEscolaridadeInput, PacienteUncheckedCreateWithoutEscolaridadeInput>
  }

  export type PacienteCreateManyEscolaridadeInputEnvelope = {
    data: PacienteCreateManyEscolaridadeInput | PacienteCreateManyEscolaridadeInput[]
    skipDuplicates?: boolean
  }

  export type ListaEsperaCreateWithoutEscolaridadeInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    genero: GeneroCreateNestedOneWithoutListaEsperaInput
    corPele: CorPeleCreateNestedOneWithoutListaEsperaInput
  }

  export type ListaEsperaUncheckedCreateWithoutEscolaridadeInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    id_Genero: number
    id_CorPele: number
  }

  export type ListaEsperaCreateOrConnectWithoutEscolaridadeInput = {
    where: ListaEsperaWhereUniqueInput
    create: XOR<ListaEsperaCreateWithoutEscolaridadeInput, ListaEsperaUncheckedCreateWithoutEscolaridadeInput>
  }

  export type ListaEsperaCreateManyEscolaridadeInputEnvelope = {
    data: ListaEsperaCreateManyEscolaridadeInput | ListaEsperaCreateManyEscolaridadeInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithWhereUniqueWithoutEscolaridadeInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutEscolaridadeInput, PacienteUncheckedUpdateWithoutEscolaridadeInput>
    create: XOR<PacienteCreateWithoutEscolaridadeInput, PacienteUncheckedCreateWithoutEscolaridadeInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutEscolaridadeInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutEscolaridadeInput, PacienteUncheckedUpdateWithoutEscolaridadeInput>
  }

  export type PacienteUpdateManyWithWhereWithoutEscolaridadeInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutEscolaridadeInput>
  }

  export type ListaEsperaUpsertWithWhereUniqueWithoutEscolaridadeInput = {
    where: ListaEsperaWhereUniqueInput
    update: XOR<ListaEsperaUpdateWithoutEscolaridadeInput, ListaEsperaUncheckedUpdateWithoutEscolaridadeInput>
    create: XOR<ListaEsperaCreateWithoutEscolaridadeInput, ListaEsperaUncheckedCreateWithoutEscolaridadeInput>
  }

  export type ListaEsperaUpdateWithWhereUniqueWithoutEscolaridadeInput = {
    where: ListaEsperaWhereUniqueInput
    data: XOR<ListaEsperaUpdateWithoutEscolaridadeInput, ListaEsperaUncheckedUpdateWithoutEscolaridadeInput>
  }

  export type ListaEsperaUpdateManyWithWhereWithoutEscolaridadeInput = {
    where: ListaEsperaScalarWhereInput
    data: XOR<ListaEsperaUpdateManyMutationInput, ListaEsperaUncheckedUpdateManyWithoutEscolaridadeInput>
  }

  export type AtendimentoCreateWithoutStatusInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    observacoes: string
    paciente: PacienteCreateNestedOneWithoutAtendimentosInput
    estagiarioExecutor: UsuarioCreateNestedOneWithoutAtendimentoComoEstagiarioInput
    supervisorExecutor: UsuarioCreateNestedOneWithoutAtendimentoComoSupervisorInput
  }

  export type AtendimentoUncheckedCreateWithoutStatusInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Paciente: string
    id_Estagiario_Executor: string
    id_Supervisor_Executor: string
    observacoes: string
  }

  export type AtendimentoCreateOrConnectWithoutStatusInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutStatusInput, AtendimentoUncheckedCreateWithoutStatusInput>
  }

  export type AtendimentoCreateManyStatusInputEnvelope = {
    data: AtendimentoCreateManyStatusInput | AtendimentoCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutStatusInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutStatusInput, AtendimentoUncheckedUpdateWithoutStatusInput>
    create: XOR<AtendimentoCreateWithoutStatusInput, AtendimentoUncheckedCreateWithoutStatusInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutStatusInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutStatusInput, AtendimentoUncheckedUpdateWithoutStatusInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutStatusInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutStatusInput>
  }

  export type DocumentoUsuarioCreateManyUsuarioInput = {
    id_Documento?: string
    nomeArquivo: string
    caminhoArquivo: string
    dataUpload?: Date | string
  }

  export type LogAuditoriaCreateManyUsuarioExecutorInput = {
    id_Log?: string
    id_Paciente: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
  }

  export type AtendimentoCreateManyEstagiarioExecutorInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Paciente: string
    id_Supervisor_Executor: string
    id_Status: number
    observacoes: string
  }

  export type AtendimentoCreateManySupervisorExecutorInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Paciente: string
    id_Estagiario_Executor: string
    id_Status: number
    observacoes: string
  }

  export type RelatorioAltaCreateManyEstagiarioInput = {
    id_Documento?: string
    id_Paciente: string
    id_Supervisor: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaCreateManySupervisorInput = {
    id_Documento?: string
    id_Paciente: string
    id_Estagiario: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
  }

  export type PacienteCreateManyEstagiarioResponsavelInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Supervisor_Responsavel: string
  }

  export type PacienteCreateManySupervisorResponsavelInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
  }

  export type DocumentoUsuarioUpdateWithoutUsuarioInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    caminhoArquivo?: StringFieldUpdateOperationsInput | string
    dataUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUsuarioUncheckedUpdateWithoutUsuarioInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    caminhoArquivo?: StringFieldUpdateOperationsInput | string
    dataUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    nomeArquivo?: StringFieldUpdateOperationsInput | string
    caminhoArquivo?: StringFieldUpdateOperationsInput | string
    dataUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAuditoriaUpdateWithoutUsuarioExecutorInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutLogsAuditoriaNestedInput
  }

  export type LogAuditoriaUncheckedUpdateWithoutUsuarioExecutorInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
  }

  export type LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUpdateWithoutEstagiarioExecutorInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutAtendimentosNestedInput
    supervisorExecutor?: UsuarioUpdateOneRequiredWithoutAtendimentoComoSupervisorNestedInput
    status?: StatusAtendimentoUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutEstagiarioExecutorInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Executor?: StringFieldUpdateOperationsInput | string
    id_Status?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Executor?: StringFieldUpdateOperationsInput | string
    id_Status?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUpdateWithoutSupervisorExecutorInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutAtendimentosNestedInput
    estagiarioExecutor?: UsuarioUpdateOneRequiredWithoutAtendimentoComoEstagiarioNestedInput
    status?: StatusAtendimentoUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutSupervisorExecutorInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario_Executor?: StringFieldUpdateOperationsInput | string
    id_Status?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario_Executor?: StringFieldUpdateOperationsInput | string
    id_Status?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioAltaUpdateWithoutEstagiarioInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
    paciente?: PacienteUpdateOneRequiredWithoutRelatoriosAltaNestedInput
    supervisor?: UsuarioUpdateOneRequiredWithoutRelatorioComoSupervisorNestedInput
  }

  export type RelatorioAltaUncheckedUpdateWithoutEstagiarioInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Supervisor?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaUncheckedUpdateManyWithoutEstagiarioInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Supervisor?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaUpdateWithoutSupervisorInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
    paciente?: PacienteUpdateOneRequiredWithoutRelatoriosAltaNestedInput
    estagiario?: UsuarioUpdateOneRequiredWithoutRelatorioComoEstagiarioNestedInput
  }

  export type RelatorioAltaUncheckedUpdateWithoutSupervisorInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaUncheckedUpdateManyWithoutSupervisorInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type PacienteUpdateWithoutEstagiarioResponsavelInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutPacientesNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutPacientesNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput
    supervisorResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput
    relatoriosAlta?: RelatorioAltaUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutEstagiarioResponsavelInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
    relatoriosAlta?: RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUpdateWithoutSupervisorResponsavelInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutPacientesNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutPacientesNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput
    estagiarioResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput
    relatoriosAlta?: RelatorioAltaUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutSupervisorResponsavelInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    relatoriosAlta?: RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutSupervisorResponsavelInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyRoleInput = {
    id_User?: string
    nome: string
    email: string
    senhaHash: string
  }

  export type UsuarioUpdateWithoutRoleInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRoleInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    documentosUsuario?: DocumentoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    logsExecutados?: LogAuditoriaUncheckedUpdateManyWithoutUsuarioExecutorNestedInput
    atendimentoComoEstagiario?: AtendimentoUncheckedUpdateManyWithoutEstagiarioExecutorNestedInput
    atendimentoComoSupervisor?: AtendimentoUncheckedUpdateManyWithoutSupervisorExecutorNestedInput
    relatorioComoEstagiario?: RelatorioAltaUncheckedUpdateManyWithoutEstagiarioNestedInput
    relatorioComoSupervisor?: RelatorioAltaUncheckedUpdateManyWithoutSupervisorNestedInput
    pacientesComoEstagiario?: PacienteUncheckedUpdateManyWithoutEstagiarioResponsavelNestedInput
    pacientesComoSupervisor?: PacienteUncheckedUpdateManyWithoutSupervisorResponsavelNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRoleInput = {
    id_User?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
  }

  export type RelatorioAltaCreateManyPacienteInput = {
    id_Documento?: string
    id_Estagiario: string
    id_Supervisor: string
    conteudo: string
    dataEmissao?: Date | string
    status?: $Enums.StatusRelatorioEnum
  }

  export type LogAuditoriaCreateManyPacienteInput = {
    id_Log?: string
    id_Usuario_Executor: string
    tipoAcao: $Enums.TipoAcaoEnum
    acessoEm?: Date | string
    detalhes: string
  }

  export type AtendimentoCreateManyPacienteInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Estagiario_Executor: string
    id_Supervisor_Executor: string
    id_Status: number
    observacoes: string
  }

  export type RelatorioAltaUpdateWithoutPacienteInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
    estagiario?: UsuarioUpdateOneRequiredWithoutRelatorioComoEstagiarioNestedInput
    supervisor?: UsuarioUpdateOneRequiredWithoutRelatorioComoSupervisorNestedInput
  }

  export type RelatorioAltaUncheckedUpdateWithoutPacienteInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_Estagiario?: StringFieldUpdateOperationsInput | string
    id_Supervisor?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type RelatorioAltaUncheckedUpdateManyWithoutPacienteInput = {
    id_Documento?: StringFieldUpdateOperationsInput | string
    id_Estagiario?: StringFieldUpdateOperationsInput | string
    id_Supervisor?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusRelatorioEnumFieldUpdateOperationsInput | $Enums.StatusRelatorioEnum
  }

  export type LogAuditoriaUpdateWithoutPacienteInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
    usuarioExecutor?: UsuarioUpdateOneRequiredWithoutLogsExecutadosNestedInput
  }

  export type LogAuditoriaUncheckedUpdateWithoutPacienteInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    id_Usuario_Executor?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
  }

  export type LogAuditoriaUncheckedUpdateManyWithoutPacienteInput = {
    id_Log?: StringFieldUpdateOperationsInput | string
    id_Usuario_Executor?: StringFieldUpdateOperationsInput | string
    tipoAcao?: EnumTipoAcaoEnumFieldUpdateOperationsInput | $Enums.TipoAcaoEnum
    acessoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUpdateWithoutPacienteInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: StringFieldUpdateOperationsInput | string
    estagiarioExecutor?: UsuarioUpdateOneRequiredWithoutAtendimentoComoEstagiarioNestedInput
    supervisorExecutor?: UsuarioUpdateOneRequiredWithoutAtendimentoComoSupervisorNestedInput
    status?: StatusAtendimentoUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutPacienteInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Executor?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Executor?: StringFieldUpdateOperationsInput | string
    id_Status?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUncheckedUpdateManyWithoutPacienteInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Executor?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Executor?: StringFieldUpdateOperationsInput | string
    id_Status?: IntFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteCreateManyGeneroInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_CorPele: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
  }

  export type ListaEsperaCreateManyGeneroInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    id_CorPele: number
    id_Escolaridade: number
  }

  export type PacienteUpdateWithoutGeneroInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    corPele?: CorPeleUpdateOneRequiredWithoutPacientesNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput
    estagiarioResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput
    supervisorResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput
    relatoriosAlta?: RelatorioAltaUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutGeneroInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
    relatoriosAlta?: RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutGeneroInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
  }

  export type ListaEsperaUpdateWithoutGeneroInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corPele?: CorPeleUpdateOneRequiredWithoutListaEsperaNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutListaEsperaNestedInput
  }

  export type ListaEsperaUncheckedUpdateWithoutGeneroInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
  }

  export type ListaEsperaUncheckedUpdateManyWithoutGeneroInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_CorPele?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
  }

  export type PacienteCreateManyCorPeleInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_Escolaridade: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
  }

  export type ListaEsperaCreateManyCorPeleInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    id_Genero: number
    id_Escolaridade: number
  }

  export type PacienteUpdateWithoutCorPeleInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutPacientesNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutPacientesNestedInput
    estagiarioResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput
    supervisorResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput
    relatoriosAlta?: RelatorioAltaUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutCorPeleInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
    relatoriosAlta?: RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutCorPeleInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
  }

  export type ListaEsperaUpdateWithoutCorPeleInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutListaEsperaNestedInput
    escolaridade?: EscolaridadeUpdateOneRequiredWithoutListaEsperaNestedInput
  }

  export type ListaEsperaUncheckedUpdateWithoutCorPeleInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
  }

  export type ListaEsperaUncheckedUpdateManyWithoutCorPeleInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_Escolaridade?: IntFieldUpdateOperationsInput | number
  }

  export type PacienteCreateManyEscolaridadeInput = {
    id_Paciente?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    id_Genero: number
    id_CorPele: number
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    dataInicioTratamento: Date | string
    id_Estagiario_Responsavel: string
    id_Supervisor_Responsavel: string
  }

  export type ListaEsperaCreateManyEscolaridadeInput = {
    id_Lista?: string
    nomeRegistro: string
    nomeSocial?: string | null
    dataNascimento: Date | string
    telefonePessoal: string
    contatoEmergencia: string
    enderecoRua: string
    enderecoNumero: string
    enderecoBairro: string
    enderecoCidade: string
    enderecoEstado: string
    enderecoCEP: string
    createdAt?: Date | string
    id_Genero: number
    id_CorPele: number
  }

  export type PacienteUpdateWithoutEscolaridadeInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutPacientesNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutPacientesNestedInput
    estagiarioResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoEstagiarioNestedInput
    supervisorResponsavel?: UsuarioUpdateOneRequiredWithoutPacientesComoSupervisorNestedInput
    relatoriosAlta?: RelatorioAltaUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutEscolaridadeInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
    relatoriosAlta?: RelatorioAltaUncheckedUpdateManyWithoutPacienteNestedInput
    logsAuditoria?: LogAuditoriaUncheckedUpdateManyWithoutPacienteNestedInput
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutEscolaridadeInput = {
    id_Paciente?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    dataInicioTratamento?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Estagiario_Responsavel?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Responsavel?: StringFieldUpdateOperationsInput | string
  }

  export type ListaEsperaUpdateWithoutEscolaridadeInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: GeneroUpdateOneRequiredWithoutListaEsperaNestedInput
    corPele?: CorPeleUpdateOneRequiredWithoutListaEsperaNestedInput
  }

  export type ListaEsperaUncheckedUpdateWithoutEscolaridadeInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
  }

  export type ListaEsperaUncheckedUpdateManyWithoutEscolaridadeInput = {
    id_Lista?: StringFieldUpdateOperationsInput | string
    nomeRegistro?: StringFieldUpdateOperationsInput | string
    nomeSocial?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefonePessoal?: StringFieldUpdateOperationsInput | string
    contatoEmergencia?: StringFieldUpdateOperationsInput | string
    enderecoRua?: StringFieldUpdateOperationsInput | string
    enderecoNumero?: StringFieldUpdateOperationsInput | string
    enderecoBairro?: StringFieldUpdateOperationsInput | string
    enderecoCidade?: StringFieldUpdateOperationsInput | string
    enderecoEstado?: StringFieldUpdateOperationsInput | string
    enderecoCEP?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Genero?: IntFieldUpdateOperationsInput | number
    id_CorPele?: IntFieldUpdateOperationsInput | number
  }

  export type AtendimentoCreateManyStatusInput = {
    id_Atendimento?: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    id_Paciente: string
    id_Estagiario_Executor: string
    id_Supervisor_Executor: string
    observacoes: string
  }

  export type AtendimentoUpdateWithoutStatusInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutAtendimentosNestedInput
    estagiarioExecutor?: UsuarioUpdateOneRequiredWithoutAtendimentoComoEstagiarioNestedInput
    supervisorExecutor?: UsuarioUpdateOneRequiredWithoutAtendimentoComoSupervisorNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutStatusInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario_Executor?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Executor?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
  }

  export type AtendimentoUncheckedUpdateManyWithoutStatusInput = {
    id_Atendimento?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Paciente?: StringFieldUpdateOperationsInput | string
    id_Estagiario_Executor?: StringFieldUpdateOperationsInput | string
    id_Supervisor_Executor?: StringFieldUpdateOperationsInput | string
    observacoes?: StringFieldUpdateOperationsInput | string
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