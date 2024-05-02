import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <ul>
        <li>
          <Link href="/meals/share">Shared page</Link>
        </li>
        <li>
          <Link href="/meals/veg">Veg meals</Link>
        </li>
        <li>
          <Link href="/meals/non-veg">Non-Veg meals</Link>
        </li>
      </ul>
    </main>
  );
}
