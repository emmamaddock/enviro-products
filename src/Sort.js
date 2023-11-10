import { useState } from "react";

const Sort = ({handleSorting}) => {
    const [order, setOrder] = useState("");

    const handleSortChange = (order) => {
        setOrder(order);
        handleSorting(order);
    };

    return (
        <div class="Sort-dropdown">
            <button class="Dropdown">Sort by Environmental Impact</button>
            <div class="Dropdown-selections">
                <button onClick={() => handleSortChange("asc")} >Ascending</button>
                <button onClick={() => handleSortChange("desc")}>Descending</button>
            </div>
        </div>
    );
}

export default Sort;