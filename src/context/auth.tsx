import React, { useState, createContext } from 'react';
import { initMagic } from '@/utils/magic';

export const AuthContext = createContext<any>({
  auth: null,
  connect: null
});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: { children: any }) => {
  const [auth, setAuth] = useState<any | null>(null);

  const connect = async (email: string) => {
    try {
      if (email) {
        const magic = await initMagic();
        const response = await magic.auth.loginWithEmailOTP({ email });
        if (response) {
          setAuth(setAuth);
        }
      }
    } catch (error) {
      auth(null);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, connect }}>
      {children}
    </AuthContext.Provider>
  );
};
