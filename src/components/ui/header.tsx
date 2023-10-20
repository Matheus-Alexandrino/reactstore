// import { MenuIcon, Sheet, ShoppingCartIcon } from "lucide-react";
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon,  PercentCircleIcon,  PercentSquareIcon,  ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
    return (
            <Card className="flex items-center justify-between p-[1.875rem] ">                
            
            <Sheet>
                <SheetTrigger asChild >                        
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>  
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu                        
                    </SheetHeader>
                    <div className="mt-2 flex flex-col gap-3">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon className="" size={16}/>
                            Fazer Login  
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <HomeIcon className=""/>
                            Início 
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <PercentSquareIcon className=""/>
                            Ofertas 
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <ListOrderedIcon className=""/>
                            Catálogo 
                        </Button>
                    </div>
                    
                </SheetContent>
            </Sheet>
            

            
                <h1 className="text-lg font-semibold">
                    <span className="text-primary">React</span>Store
                </h1>

                <Button size="icon" variant="outline">
                        <ShoppingCartIcon/>
                </Button>              
            </Card>
    );
};
 
export default Header;