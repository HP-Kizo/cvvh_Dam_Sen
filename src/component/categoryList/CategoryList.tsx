import React from "react";
import styles from "./CategoryList.module.css";

interface Item {
  id: number;
  name: string;
}

interface Category {
  title: string;
  items: Item[];
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories.map((category: Category, index: number) => (
        <div key={index} className={styles.category}>
          <h2 className={styles.title}>{category.title}</h2>
          <ul className={styles.categoryList}>
            {category.items.map((item: Item) => (
              <li key={item.id} className={styles.categoryItem}>
                <span className={styles.count}>{item.id}</span>
                <span className={styles.name}>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
