
"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon,   PercentSquareIcon,  ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card"
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


const Header = () => {
  
    const {status, data} = useSession();

    const handleLoginClick = async () => {
        await signIn();
        
    }
    const handleLogoutClick = async () => {
        await signOut();
        
    }
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
                    {status === 'authenticated' && data?.user && (
                        <div className="flex items center gap-2">
                            <Avatar>
                            <AvatarFallback>
                               data.user.image && AvatarIma
                            </AvatarFallback>

                            <AvatarImage src={data.user.image}>

                            </AvatarImage>
                            </Avatar>
                            <p>{data.user.name}</p>
                        </div>
                    )}
                    <div className="mt-2 flex flex-col gap-3">
                        {status === "unauthenticated" && (
                        <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                            <LogInIcon className="" size={16}/>
                            Fazer Login  
                        </Button>
                        )}
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
                        {status === "authenticated" && (
                        <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2">
                            <LogOutIcon className="" size={16}/>
                            Fazer Logout  
                        </Button>
                        )}
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