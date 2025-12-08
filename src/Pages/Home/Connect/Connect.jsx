import { Container } from '@/components/Shared/Container'
import { SectionHeading } from '@/components/Shared/SectionHeading'
import React from 'react'
import image from "@/assets/connect/image.png"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
export const Connect = ({ data }) => {
    const form = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = (data) => console.log(data)
    return (
        <Container>
            <SectionHeading mainHeading="Let`s Connect" subHeading="We’re here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice." />

            {/* section content */}
            <div className='flex lg:flex-row flex-col px-2 gap-16 items-center lg:mx-0 mx-auto w-full'>
                <div className='w-full max-w-[718px] h-[471px] lg:mx-0 mx-auto '>
                    <img className='w-full max-w-[718px] h-[471px] lg:mx-0 mx-auto  ' src={image} alt="lets connect" />
                </div>
                {/* form */}
                <div className='border p-9 rounded-2xl w-full max-w-[718px] lg:mx-0 mx-auto '>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-9'>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="text" placeholder="Name" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Contact Number</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="tel" placeholder="Type your Number" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* Email */}
                            <div className='mb-9'>
                                <FormField
                                    control={form.control}
                                    name="email"  // ✅ Changed from "name" to "email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="email" placeholder="Email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* Message */}
                            <div className='mb-9'>
                                <FormField
                                    control={form.control}
                                    name="message"  // ✅ Changed from "name" to "message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message (optional)</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} placeholder="I Want to on-board as a doctor" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button variant="main" type="submit">Send Message</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </Container>
    )
}
