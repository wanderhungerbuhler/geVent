import { createContext, ReactNode, useContext, useState } from "react";
import app from '../../services/firebaseConfig';
import { getAuth } from 'firebase/auth';

interface AuthProvider {
  children: ReactNode;
}

interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

interface AuthContextDate {
  user: User | null;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

export function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  getAuth(app).onAuthStateChanged(user => {
    setUser(user as User);
    // console.log(user)
  });

  async function logOut() {
    await getAuth(app).signOut();
  }

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default { AuthContext, useAuth };
