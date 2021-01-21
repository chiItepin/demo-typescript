import React, { FunctionComponent, createContext, useContext, useReducer, useEffect } from 'react';
import usePosts, { PostData } from './hooks/usePosts';

export interface IActions {
    type: string,
    payload: string | [] | Record<string, unknown> | Array<unknown>
}

interface InitialStateType {
  posts: PostData[];
}

interface IStoreProviderProps {
    children: React.ReactNode | JSX.ElementChildrenAttribute
}

const initialState: InitialStateType = {
  posts: [],
}

interface IContextType {
    dispatch?: React.Dispatch<IActions>;
    state: InitialStateType,
}

const reducer = (state: InitialStateType, action: IActions) => {
    switch (action.type as string) {
        case 'setPosts':
            return {
            ...state,
            posts: action.payload,
            };
        default:
        return state;
    }
};

export const StoreContext = createContext<IContextType>({ state: initialState});

export const StoreProvider: FunctionComponent<IStoreProviderProps> = ({
    children
}: IStoreProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const posts: PostData[] = usePosts();

    useEffect(() => {
        dispatch({ type: 'setPosts', payload: posts });
    }, [posts]);

    return (
      <StoreContext.Provider value={{ state, dispatch } as IContextType}>
        {children}
      </StoreContext.Provider>
    );
  };

export const useStore = (): IContextType => {
    return useContext<IContextType>(StoreContext);
};