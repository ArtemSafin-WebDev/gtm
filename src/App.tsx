import { useEffect } from "react";
import Controls from "./components/Controls";
import Layout from "./components/Layout";
import ModelView from "./components/ModelView";
import useRegionStore from "./store/RegionStore";
import useRegionData from "./hooks/useRegionData";

function App() {
  const regionData = useRegionStore((state) => state.data);
  const setRegionData = useRegionStore((state) => state.setData);
  const { data, error, loading } = useRegionData(`/data/region.json`);
  useEffect(() => {
    if (!data) return;
    setRegionData(data);
  }, [data]);

  return (
    <Layout>
      {loading && !regionData && (
        <div className="text-lg text-green-500">Загрузка данных...</div>
      )}
      {error && !regionData && (
        <div className="text-lg text-red-500">Произошла ошибка</div>
      )}
      {regionData && (
        <>
          <ModelView />
          <Controls />
        </>
      )}
    </Layout>
  );
}

export default App;
