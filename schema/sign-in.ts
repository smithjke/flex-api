export type SignIn = {
  token: string;
};

export type SignInRaw = {
  token: string;
};

export function mapSignInResponseRaw(signInRaw: SignInRaw): SignIn {
  return {
    token: signInRaw.token ? String(signInRaw.token) : null,
  };
}
