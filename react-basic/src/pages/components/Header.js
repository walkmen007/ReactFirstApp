
import {navBar as navList} from '../../../constants/navBar';
 function Header() {
  const nevMenuHtml = navList.map(item=>(
     <a key={item.id} href={item.href}>
        {item.name}
    </a> 
  ));
    console.log("Nav List---", navList, nevMenuHtml);
    return (
    <header>
        <nav>
            <div className="nav-menu">
                {nevMenuHtml} 
            </div>
        </nav>
    </header>
  )
}
 export default Header;