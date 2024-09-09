import bcrypt from 'bcrypt';
import prisma from '../../utils/connect';

export async function verifyPassword(user, inputPassword) {
  if (typeof window !== 'undefined') {
    throw new Error('This function should only be called on the server side');
  }

  if (!user.password) {
    const hashedPassword = await bcrypt.hash(inputPassword, 10);
    await prisma.user.update({
      where: { email: user.email },
      data: { password: hashedPassword }
    });
    return true;
  }

  return bcrypt.compare(inputPassword, user.password);
}