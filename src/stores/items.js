import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useItemStore = defineStore("items", () => {
  const items = {
    computers: [
      {
        id: "11",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet minus corporis culpa explicabo laborum rem officia incidunt tempore, accusamus quo minima, enim dolorum, suscipit velit facilis perspiciatis est possimus harum vero aspernatur repellat consectetur! Quisquam alias eum excepturi tenetur!",
        category: "Computers",
      },
      {
        id: "12",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        desciption: "",
        category: "Computers",
      },
      {
        id: "22",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        desciption: "",
        category: "Computers",
      },
      {
        id: "23",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        desciption: "",
        category: "Computers",
      },
      {
        id: "24",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        desciption: "",
        category: "Computers",
      },
      {
        id: "25",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        desciption: "",
        category: "Computers",
      },
      {
        id: "26",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        desciption: "",
        category: "Computers",
      },
      {
        id: "27",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        desciption: "",
        category: "Computers",
      },
      {
        id: "28",
        name: "Galaxy Chad Super",
        image: "/images/pc1.webp",
        cpu: "AMD Ryzen 4-5000",
        gpu: "NVIDIA RTX 3060TI",
        ram: "16",
        motherboard: "MSI",
        price: "799.00",
        desciption: "",
        category: "Computers",
      },
    ],
    consoles: [
      {
        id: "",
        name: "",
        price: "",
        desciption: "",
      },
      {
        id: "",
        name: "",
        price: "",
        desciption: "",
      },
      {
        id: "",
        name: "",
        price: "",
        desciption: "",
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
