import { redirect } from 'next/navigation';

export async function GET() {
  redirect(
    `${
      process.env.KEYCLOAK_URL
    }/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(
      process.env.NEXTAUTH_URL as string
    )}&client_id=${process.env.CLIENT_ID}`
  );
}
