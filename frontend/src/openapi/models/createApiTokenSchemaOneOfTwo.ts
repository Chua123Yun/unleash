/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type CreateApiTokenSchemaOneOfTwo = {
    /** The time when this token should expire. */
    expiresAt?: string;
    /**
     * An admin token. Must be the string "admin" (not case sensitive).
     * @pattern ^[Aa][Dd][Mm][Ii][Nn]$
     */
    type: string;
    /**
     * The name of the token. This property was deprecated in v5. Use `tokenName` instead.
     * @deprecated
     */
    username: string;
};
