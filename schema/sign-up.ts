export type SignUp = {
  token: string;
};

export type SignUpRaw = {
  token: string;
};

export function mapSignUpResponseRaw(signUpRaw: SignUpRaw): SignUp {
  return {
    token: signUpRaw.token ? String(signUpRaw.token) : null,
  };
}
