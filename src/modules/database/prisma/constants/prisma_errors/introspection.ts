/** `prisma db pull` (Introspection Engine) Error Codes `P4XXX` */
export const PrismaIntrospectionError = {
  /**
   * Introspection operation failed to produce a schema file: `{introspection_error}`
   */
  failedProducingSchemaFile: 'P4000',

  /**
   * The introspected database was empty.
   */
  emptyDatabase: 'P4001',

  /**
   * The schema of the introspected database was inconsistent: {explanation}
   */
  inconsistentSchema: 'P4002',
} as const;
