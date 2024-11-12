import { getMatchById } from "@/api/apiMatches";
import { Match } from "@/types/types";
import { useEffect, useState } from "react";

const useMatch = (matchId: string) => {
  const [match, setMatch] = useState<Match | null>(null);

  useEffect(() => {
    const fetchMatch = async () => {
      const match = await getMatchById(matchId);
      setMatch(match);
    };
    fetchMatch();
  }, []);

  return { match };
};

export default useMatch;
