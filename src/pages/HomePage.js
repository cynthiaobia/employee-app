import Header from './../components/Header'
import SearchBar from './../components/SearchBar'
import EmployeeList from './../components/EmployeeList';

function HomePage() {
  return (
    <div className="page-item">
        <Header />
        <SearchBar />
        <EmployeeList />
    </div>
  );
}

export default HomePage;
