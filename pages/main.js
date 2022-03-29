import React, { useEffect, useState, useMemo } from "react";
import Header from "../components/header";
import Search from "../components/search";
import Grid from "../components/grid";
import Card from "../components/card";
import { getUserApps, saveUserApps } from "../api";

const MIN_PLACEHOLDERS = 4;

const Main = ({ data, loading }) => {
  const [selectedApps, setSelectedApps] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getUserApps().then(setSelectedApps);
  }, []);

  const dataWithoutSelectedApps = useMemo(() => {
    if (typeof data !== "undefined") {
      return data.filter((item) => {
        return !selectedApps.find((app) => {
          return item.name === app.name;
        });
      });
    }
  }, [data, selectedApps]);

  const onSuggestionAdd = (suggestion) => {
    setSelectedApps([...selectedApps, suggestion]);
  };

  const onSuggestionRemove = (suggestion) => {
    if (suggestion.length > 0) {
      const newSelectedApps = selectedApps.filter(
        (item) => item.name !== suggestion.name
      );
      setSelectedApps(newSelectedApps);
    } else {
      setSelectedApps([]);
    }
  };

  const onNext = async () => {
    setSaving(true);
    await saveUserApps(selectedApps);
    setSaving(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="flex md:max-w-6xl m-auto gap-12 flex-col-reverse xs:flex-row-reverse md:flex-row p-8">
        <div className="flex flex-col w-full">
          <Grid
            data={selectedApps}
            minPlaceholders={MIN_PLACEHOLDERS}
            renderItem={(item) => (
              <Card
                key={item.name}
                onRemove={() => onSuggestionRemove(item)}
                item={item}
              ></Card>
            )}
            renderPlaceholder={(item) => <Card key={item} placeholder></Card>}
          />
          <div className="text-center text-sm text-gray-500 mt-8">
            {`${selectedApps.length} products added`}
          </div>
        </div>
        <div>
          <div className="md:mt-24 mb-12 md:mb-0">
            <Search
              dataWithoutSelectedApps={dataWithoutSelectedApps}
              onSuggestionSelect={onSuggestionAdd}
              totalSelected={selectedApps.length}
            />

            <button
              className="mb-2 w-full hover:bg-blue-500 h-8 rounded text-white text-md bg-[#4b6fff]"
              onClick={onNext}
              disabled={saving || loading}
            >
              {saving ? "Saving..." : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
