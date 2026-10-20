export const required = <Rule extends { required(): Rule }>(rule: Rule) => rule.required();
