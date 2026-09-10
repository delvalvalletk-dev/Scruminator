import '@/app/global.css'
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';

export default function Layout({children}: LayoutProps<'/'>){
    return (
    <html>
        <head>
            <title>Scruminator V1.0</title>
        </head>
        <body>
            <header className='p-1 flex justify-between bg-black-500'>
                <h1 className='p-4'>Scruminator V1.0</h1>
                <div className='p-4 flex gap-x-[40%]'>
                    <div className='flex gap-x-[20%]'>
                        <Link href='/about-us'>About Us</Link>
                        <Link href='/parameters'>Parameters</Link>
                        <Link href='/login'>
                            <Button variant='secondary'>
                                Connexion
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='p-4'>
                    <Avatar> 
                        <Avatar.Image alt='Lee' src="https://www.google.com/imgres?q=lee%20twd&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fheros%2Fimages%2F5%2F5a%2FLee_Everett_Infobox.png%2Frevision%2Flatest%3Fcb%3D20201017132352%26path-prefix%3Dfr&imgrefurl=https%3A%2F%2Fheros.fandom.com%2Ffr%2Fwiki%2FLee_Everett&docid=7x1Flwp2Ggm79M&tbnid=h4RBBYA5bqopEM&w=822&h=1080&hcb=2&itg=1"/>
                    </Avatar>
                </div>
            </header>
        </body>
    </html>
    );
}