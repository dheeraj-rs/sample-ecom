'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Shield, Truck, Award, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/product/product-card';
import { TestimonialCarousel } from '@/components/home/testimonial-carousel';
import { StatsSection } from '@/components/home/stats-section';
import { ProcessSection } from '@/components/home/process-section';

const featuredProducts = [
  {
    id: '1',
    name: 'Heritage Oak Dining Table',
    price: 2850,
    originalPrice: 3200,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    rating: 4.9,
    reviews: 127,
    tag: 'Bestseller',
    woodType: 'White Oak',
    craftsmanHours: 45
  },
  {
    id: '2',
    name: 'Artisan Walnut Bookshelf',
    price: 1650,
    image: 'https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg',
    rating: 4.8,
    reviews: 89,
    tag: 'New',
    woodType: 'Black Walnut',
    craftsmanHours: 32
  },
  {
    id: '3',
    name: 'Royal Mahogany Bed Frame',
    price: 3200,
    originalPrice: 3600,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
    rating: 5.0,
    reviews: 203,
    tag: 'Premium',
    woodType: 'Honduran Mahogany',
    craftsmanHours: 60
  },
  {
    id: '4',
    name: 'Craftsman Cherry Desk',
    price: 1950,
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg',
    rating: 4.7,
    reviews: 156,
    woodType: 'American Cherry',
    craftsmanHours: 38
  }
];

const categories = [
  {
    name: 'Living Room',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    count: '120+ pieces',
    href: '/products/category/living-room'
  },
  {
    name: 'Dining Room',
    image: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg',
    count: '85+ pieces',
    href: '/products/category/dining-room'
  },
  {
    name: 'Bedroom',
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
    count: '95+ pieces',
    href: '/products/category/bedroom'
  },
  {
    name: 'Office',
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg',
    count: '65+ pieces',
    href: '/products/category/office'
  }
];

const trustFeatures = [
  {
    icon: Shield,
    title: '40 Years of Mastery',
    description: 'Four decades of woodworking expertise passed down through generations'
  },
  {
    icon: Award,
    title: 'Certified Sustainable',
    description: 'FSC certified wood sources and eco-friendly finishing processes'
  },
  {
    icon: Truck,
    title: 'White Glove Delivery',
    description: 'Professional setup and installation service included nationwide'
  },
  {
    icon: Star,
    title: 'Lifetime Craftsmanship',
    description: 'Comprehensive warranty covering materials and workmanship'
  }
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
            alt="Handcrafted wooden furniture showcase"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 container-padding text-center text-white max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Badge variant="secondary" className="mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm border-white/30">
              ✨ Handcrafted Since 1984
            </Badge>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 text-balance leading-tight">
              Where Wood
              <span className="block text-gradient bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                Meets Wonder
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Transform your space with heirloom-quality furniture crafted by master artisans using sustainable hardwoods and time-honored techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="btn-wood text-lg px-8 py-6 group"
                asChild
              >
                <Link href="/products">
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link href="/about">
                  Our Story
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span>4.9/5 from 2,400+ reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Lifetime warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Free white-glove delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/60 hover:text-white/80 cursor-pointer transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Features */}
      <section className="section-padding bg-muted/50">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
              Why Choose Royalwood?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Four decades of expertise, sustainable practices, and uncompromising quality in every piece.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-padding max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
              Featured Masterpieces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Each piece tells a story of craftsmanship, sustainability, and timeless design.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="btn-wood group"
              asChild
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-muted/30">
        <div className="container-padding max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
              Shop by Room
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Find the perfect pieces for every space in your home.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={category.href} className="group block">
                  <Card className="overflow-hidden h-80 relative group-hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-heading text-2xl mb-2 group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm">{category.count}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
              Stay Connected
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Be the first to know about new collections, exclusive offers, and behind-the-scenes craftsmanship stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 
                          placeholder:text-primary-foreground/60 text-primary-foreground
                          focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-medium"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              No spam, just beautiful furniture updates. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}