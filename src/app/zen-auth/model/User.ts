export class UserCredential {
  constructor(
    public username: string = '',
    public password: string = '',
    public grant_type = 'password'
  ) {  }
}

export class UserInfo {
  constructor(
    public username: string = '',
    public access_token: string = '',
    public expires_in: string = '',
    public token_type: string = '',
    public scope: string = '',
    public refresh_token: string = ''
  ) {  }
}

