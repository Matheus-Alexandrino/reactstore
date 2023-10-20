import { MenuIcon, Sheet, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card"
import { SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
    return <Card className="flex items-center justify-between p-[1.875rem] ">                
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon/>
                        </Button>  
                    </SheetTrigger>
                
                    <SheetContent side="left">
                            <SheetHeader className="text-left text-lg font-semibold">
                                Menu
                            </SheetHeader>
                    </SheetContent>
                </Sheet> 
                <h1 className="text-lg font-semibold">
                    <span className="text-primary">React</span>Store
                </h1>

                    <Button size="icon" variant="outline">
                        <ShoppingCartIcon />
                </Button>              
            </Card>;
}
 
export default Header;