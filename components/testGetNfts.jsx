import { useNFTBalances } from "react-moralis";

const NFTBalances = () => {
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances();

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <button onClick={() => getNFTBalances({ params: { chain: "0x1" } })}>
        Refetch NFTBalances
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default NFTBalances;
