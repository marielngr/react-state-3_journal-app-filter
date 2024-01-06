import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({
  entries,
  filter,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab
          isActive={filter === "all"}
          onClick={onShowAllEntries}
          filter={filter}
        >
          All Entries{" "}
          <Badge isActive={filter === "all"}>{allEntriesCount}</Badge>
        </Tab>
        <Tab
          onClick={onShowFavoriteEntries}
          filter={filter}
          isActive={filter === "favorites"}
        >
          Favorites{" "}
          <Badge isActive={filter === "favorites"}>
            {favoriteEntriesCount}
          </Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
