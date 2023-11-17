import newsContext from './newsContext';

type FilterProviderProps = {
  children: React.ReactNode,
};

function newsProvider({ children }: FilterProviderProps) {
  return (
    <newsContext.Provider
      value={ {} }
    >
      {children}
    </newsContext.Provider>
  );
}

export default newsProvider;
