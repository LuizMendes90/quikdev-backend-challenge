import bcryptjs from 'bcryptjs';

class Bcript {
  private salt = 10;

  async compare(plainText: string, hashText: string): Promise<boolean> {
    return bcryptjs.compare(plainText, hashText);
  }

  async crypt(plainText: string): Promise<string> {
    return bcryptjs.hash(plainText, this.salt);
  }
}

export default Bcript;
