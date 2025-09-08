import { getUploadAuthParams } from "@imagekit/next/server";
import config from "@/lib/config";
import { NextResponse } from "next/server";
const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

export async function GET() {
  const { token, expire, signature } = getUploadAuthParams({
    privateKey: privateKey,
    publicKey: publicKey,
  });

  return NextResponse.json({
    token,
    expire,
    signature,
    publicKey: publicKey,
  });
}
