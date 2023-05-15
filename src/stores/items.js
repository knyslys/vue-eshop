import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useItemStore = defineStore("items", () => {
  const items = {
    computers: [
      {
        id: "11",
        name: "Galaxy Chad Super",
        image: "/images/pc2.webp",
        cpu: "AMD Ryzen™ 5 7600X",
        gpu: "Dual GeForce RTX™ 4070 OC ",
        ram: "16",
        motherboard: "MSI",
        price: "1499.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
      {
        id: "12",
        name: "Galaxy Carelis Special",
        image: "/images/pc1.webp",
        cpu: "Intel® Core™ i5-12400F",
        gpu: "Dual GeForce RTX™ 3060 Ti V2 OC Edition ",
        ram: "16",
        motherboard: "ASUS TUF GAMING B660",
        price: "1029.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
      {
        id: "22",
        name: "Galaxy Sigma FPS",
        image: "/images/pc2.webp",
        cpu: "AMD Ryzen™ 5 5600",
        gpu: "ASUS DUAL RTX3060 OC 12GB",
        ram: "16",
        motherboard: "ASUS TUF B550",
        price: "879.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
      {
        id: "23",
        name: "Galaxy Batman Ride",
        image: "/images/pc3.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
      {
        id: "24",
        name: "Galaxy Ultra Refresh",
        image: "/images/pc6.webp",
        cpu: "Intel® Core™ i5-13600KF",
        gpu: "MSI RTX 4070 TI",
        ram: "16",
        motherboard: "MSI MAG B760 TOMAHAWK",
        price: "1899.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
      {
        id: "25",
        name: "Galaxy Medieval Pentium",
        image: "/images/pc7.webp",
        cpu: "Intel® Pentium Dual-Core",
        gpu: "GeForce RTX 4080",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
      {
        id: "26",
        name: "Galaxy Definetly (not) Scam",
        image: "/images/pc8.webp",
        cpu: "Intel® Pentium Dual-Core",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "499.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
      {
        id: "27",
        name: "Galaxy Ultra Instinct",
        image: "/images/pc9.webp",
        cpu: "Intel® Core™ i5-13500 ",
        gpu: "Dual GeForce RTX™ 4070",
        ram: "16",
        motherboard: "TUF GAMING B760",
        price: "1399.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
      {
        id: "28",
        name: "Galaxy Fantasy Moon",
        image: "/images/pc10.webp",
        cpu: "AMD Ryzen™ 7 7700X",
        gpu: "NVIDIA RTX 4070TI",
        ram: "16",
        motherboard: "TUF GAMING B650",
        price: "799.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "computers",
      },
    ],
    consoles: [
      {
        id: "7567",
        name: "Playstation 5",
        image: "/images/ps5.webp",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        price: "600.00",

        category: "consoles",
      },
      {
        id: "452",
        name: "Xbox Series X",
        image: "/images/xbox.webp",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        price: "500.00",

        category: "consoles",
      },
      {
        id: "89",
        name: "Nintendo Switch Oled",
        image: "/images/nintendo.webp",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        price: "244.00",

        category: "consoles",
      },
    ],
  };

  const itemExist = (category, id) => {
    const findItem = items[category].find((item) => {
      return item.id === id;
    });

    return findItem;
  };
  return { items, itemExist };
});
