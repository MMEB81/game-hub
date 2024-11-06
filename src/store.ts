import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { Order } from "./components/SortOrderSelector";
import { Genre } from "./entities/Genre";
import { Platform } from "./entities/Platform";



interface GameQuery {
    genreId?: number;
    platformId?: number;
    order?: Order | null;
    searchText?: string;
    pageSize?: number;
  }
  

interface GameQueryStore {
    gameQuery : GameQuery
    onSearch : (searchText : string) => void;
    onSelectGenre : (genre : Genre) => void;
    onSelectPlatform : (platform : Platform) => void ;
    onSelectOrder : (order : Order | null )=> void


}

const useGameQueryStore = create<GameQueryStore>(set => ({
    
    gameQuery : {},
    onSearch : (searchText) => set(() => ({
        gameQuery : {searchText : searchText}
    })),
    onSelectGenre : (genre) => set((store) => ({
        gameQuery : {...store.gameQuery,genreId : genre.id}
    })),
    onSelectPlatform : (platform ) => set((store)=> ({
        gameQuery : {...store.gameQuery,platformId : platform.id}

    })),
    onSelectOrder : (order) => set((store)=> ({
        gameQuery : {...store.gameQuery,order : order}
    })),
  
}))

if (process.env.NODE_ENV) 
    mountStoreDevtool("Game Query Store" , useGameQueryStore)

export default useGameQueryStore