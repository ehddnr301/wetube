interface KUserResponse {
  _raw: string;
  _json: {
    profile_image: string;
    properties: { nickname: string };
    id: number;
    kakao_account: {
      email: string;
    };
  };
}
