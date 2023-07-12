// import {useLanyard} from "use-lanyard"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getNowPlaying } from "../lib/spotify";

interface SpotifySong {
  is_playing: boolean;
  item: {
    album: {
      images: { url: string }[];
      name: string;
    };
    id: string;
    name: string;
    artists: { name: string }[];
  };
}

const Spotify = () => {
    // IF USING DISCORD:
    // const { data: user } = useLanyard("705014505041821718");

    // if (!user || !user.spotify) {
    //     return null;
    // }


    // USING SPOTIFY API:
    const [song, setSong] = useState<SpotifySong | null>(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            const res = await getNowPlaying();
            const data = await res.json();
            setSong(data);
        };

        // Fetch the initial song
        fetchNowPlaying();

        // song updates every minute
        const interval = setInterval(fetchNowPlaying, 60000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);


    if(!song || !song.is_playing) return null


    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5}}
            className="mt-5 mb-5 flex flex-col justify-center items-center"
        >
            <h1 className="text-black text-white/50 font-medium text-base mb-2 flex items-center justify-center">
                Currently listening to
                <span className="ml-2 w-2 h-2">
                    <span className="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
                    <span className="absolute w-2 h-2 bg-red-600 rounded-full" />
                </span>
            </h1>

            <div className="w-auto h-[6rem] flex flex-row items-center">
                <img
                    // src={user.spotify.album_art_url}
                    src={song.item.album.images[0].url}
                    className="w-[3.5rem] h-[3.5rem] rounded-md mr-4 pointer-events-none"
                    // alt={user.spotify.album}
                    alt={song.item.album.name}
                />
                <div className="w-46 h-full flex flex-col items-center justify-center">
                    <a
                        // href={`https://open.spotify.com/track/${user.spotify.track_id}`}
                         href={`https://open.spotify.com/track/${song.item.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full font-medium text-white/50 hover:underline truncate"
                    >
                        {/* {user.spotify.song} */}
                        {song.item.name}
                    </a>
                    <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
                        {/* {user.spotify.artist} */}
                        {song.item.artists.map((artist) => artist.name).join(", ")}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Spotify;