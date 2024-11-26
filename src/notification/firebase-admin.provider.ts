import * as admin from 'firebase-admin';
export const firebaseAdminProvider = {
  provide: 'FIREBASE_ADMIN',
  useFactory: () => {
    const defaultApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID ="taskmanagement-391b9",
        clientEmail: process.env.CLIENT_EMAIL ="firebase-adminsdk-y4548@taskmanagement-391b9.iam.gserviceaccount.com",
        privateKey: process.env.PRIVATE_KEY ="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCgyPhxIgzh1q5Z\nIVsTV6EXIqX0TqDOxKtOwGoxu1kM8RlZeXUxVx55ja/DUIafO4nqzCYXrhtZNwm3\n8LeRUH3SHj9g+EiWapD2Ns/gN+vVcFJFfoKxwxYlMf2ntKNjagzJTgT+0iIahFSV\nFu6H3EWFh5t0eBTZAGw0apTpYCaLir9KAzWJNcaj/I+Aw/fvgb77/M/WujrR3Jq5\nPlhdxof8ECe+XQ+6VWK+4ukmAnksN2I0gUDvBWtMHA2IML6ybnIAXfP72zvGk/QR\n/q5eq8/LnYH2R20KAY7tUQVP2t5pdh06snveN8KnWkLItUDZ9UPmxz+1DJpzlZDx\nztaaZSKfAgMBAAECggEAIwj3vesuBG37qrdOea4AD6MAp3YUq0mGjI/38+M/ecb1\nf54sL7askM8TbAtZckwOdufKKyHIms2X5Aljbpor+IOXyuD/LCuHb+csr85vqKAj\nhToWb3azliJJA+ikK675n0nNY9tVDBMmvR/0lQ0l5v1QHfZmkIx7h4Zr8Vh+vawD\nIgDyjQlQu0ITLnVuWqA9pj/F37OEoOv3PGkIzz16mxLysMDVN8FBNkXu3xjR0jYG\n5SFNqzFRrtZMb5rukSPjjveLYuyF6J6UkF81PWafvYGxTpdumJTyacLiNt97Cmt3\noAm65AJ/+vWB3WKi94fYgb4DsoBumtR9ZbxWSt/6VQKBgQDRSKm9waxz4pwgbXQ3\nfOfWBBOl1tDVLDq8Nkc0I+7O2iUT/I2X3Nuc/zNVVDErIqrw/R5kDYXDvBNPNIBB\nipCpxBE0XSb/WaboT6oTt2ryhfigt0fOU5m1G/QZny1UuKBznIWzvE8S8lr+JoxQ\nQxFxlN2ymF0uckOxEcl1e/atowKBgQDErOMbXk9cqJHgWkfbxEXY+Bm0+cPMl1xv\n1dgLQiDm7xGUImg9HkfWsqRFqxV409EG/WPn+jqBUEUPtxOXuwRkczT7BSWbQ2iF\nSv9hG3AP+ZU7u/OB2bz1C2UT4sUmDoukoA9P0rhrWEpNhJlZ0LKKc2z0MHuYJ03x\nzC5b47VO1QKBgD3zjIuncS08v4q529UxHE+2FTraRCdWWGyuhJViraZ93Mv1ztRN\nhJUM1l1D9uoV8RQ1WXG0rwwp+G1R1UWRhxE6AP3HNWwRVd8e9fGwMfBoyBiLKK5j\nAPUjuTZ8cCbMIHMYultiOuYY5+aj8pUvxVIiBx5/C9Zb7L3VzhUBBRyRAoGAWPkd\nhLQVkwVveN9ewrz4HD+g4Y5cVaHj33QOWImB+PcOLMWkAoJAXZBTYHEVNaQdW9wl\n5jv9W6LEm2dnJa0lP4we27BoYuUL08Ep5vRSredq66sLbiLiqLiO8YAVUDIkWkVO\np/3cEDPQ6WCjP056dsfg8lc8koi1aj3Eey14SEECgYB9B/PhfNuA6bi3oK2Io0Ob\nZpuiNRbmotQ4LEbTZ6EFXteSVKc7fiq1UIjomlKhSR3gTi+D5ObRJC4oeajbBZy7\nA+mb+WrLCzloNg/WdwH7op95mEBLAZ0/Omesx1pz0krTEpOa/VJH+OoOzuWGK2vK\n6ySKyyu9nD8F6C4uDY6aFg==\n-----END PRIVATE KEY-----\n",
      }),
    });
    return { defaultApp };
  },
};