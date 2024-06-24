"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AwardIcon } from 'lucide-react'


function CreatedBudget() {

    const [emojiIcon, setEmojiIcon] = useState('😊')
    const [openEmojiPicker, setopenEmojiPicker] = useState(false)


    const [name, setName] = useState();
    const [amount, setAmount] = useState();

    const onCreateBudget = async () => {
        const result = await
    }

    return (
        <div>

            <Dialog>
                <DialogTrigger asChild>
                    <div className='bg-slate-200 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>
                        <h2 className='text-3xl'>+</h2>
                        <h2>Create new Budget</h2>

                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create new Budget</DialogTitle>
                        <DialogDescription>
                            <div className='mt-5'>

                                <Button variant="outline"
                                    className="text-lg"
                                    onClick={() => setopenEmojiPicker(!openEmojiPicker)}
                                >{emojiIcon}
                                </Button>
                                <div className='absolute'>
                                    <EmojiPicker
                                        open={openEmojiPicker}
                                        onEmojiClick={(e) => {
                                            setEmojiIcon(e.emoji)
                                            setopenEmojiPicker(false);
                                        }}
                                    />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium  my-1 '>Budget Name</h2>
                                    <Input placeholder="e.g. Home Decor"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium  my-1 '>Budget Amount</h2>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 500 ₹"
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                                <Button
                                    disabled={!(name && amount)}
                                    onClick={() => onCreateBudget()}
                                    className="mt-5 w-full">Create Budget</Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default CreatedBudget