import Validator from "fastest-validator"

const v = new Validator();
export const validate = (schema: Record<string, unknown>, data: Record<string, unknown>) => {
    const check = v.compile(schema);
    return check(data)
}