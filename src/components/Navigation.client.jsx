import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({collections}) {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
          </li>
        ))}
        <Link to="/pages/about" className="block p-4 hover:opacity-80">
          About
        </Link>
        <Link to="/contact" className="block p-4 hover:opacity-80">
          お問い合わせ
        </Link>
      </ul>
    </nav>
  );
}
