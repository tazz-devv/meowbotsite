"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Cat,
  Heart,
  ShoppingBag,
  Swords,
  Calendar,
  Users,
  Github,
  Menu,
  X,
  ChevronRight,
  Star,
  Sparkles,
  Zap,
  Gift,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  // Add smooth scroll handler
  const scrollToSection = (elementId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(elementId)
    if (element) {
      // Get the header height to offset the scroll position
      const headerHeight = 64
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f19] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-[#0f0f19]/90 backdrop-blur-lg supports-[backdrop-filter]:bg-[#0f0f19]/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Cat className="h-7 w-7 text-pink-500" />
            <span className="text-xl font-bold">MeowBot</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Link
                href="#features"
                className="text-sm font-medium text-gray-300 hover:text-pink-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("features")
                }}
              >
                Features
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link
                href="#commands"
                className="text-sm font-medium text-gray-300 hover:text-pink-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("commands")
                }}
              >
                Commands
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link
                href="https://discord.gg/EkBUyfyvAt"
                target="_blank"
                className="text-sm font-medium text-gray-300 hover:text-pink-500 transition-colors"
              >
                Support
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-pink-500 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-4"
          >
            <Link
              href="https://discord.com/oauth2/authorize?client_id=1371604635231715448&permissions=8&integration_type=0&scope=bot"
              target="_blank"
            >
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-sm">
                Add to Discord
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-x-0 top-16 z-40 bg-[#121212] border-b border-gray-800 overflow-hidden"
          >
            <div className="container py-4 flex flex-col space-y-4">
              <Link
                href="#features"
                className="flex items-center justify-between py-2 text-gray-300 hover:text-pink-500 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("features")
                }}
              >
                <span>Features</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="#commands"
                className="flex items-center justify-between py-2 text-gray-300 hover:text-pink-500 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("commands")
                }}
              >
                <span>Commands</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://discord.gg/EkBUyfyvAt"
                target="_blank"
                className="flex items-center justify-between py-2 text-gray-300 hover:text-pink-500 transition-colors text-sm"
              >
                <span>Support</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://discord.com/oauth2/authorize?client_id=1371604635231715448&permissions=8&integration_type=0&scope=bot"
                target="_blank"
                className="w-full"
              >
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-sm">
                  Add to Discord
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#0f0f19] via-[#1a0b2e] to-[#2a1052]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-purple-900/10 to-transparent"></div>
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${
                  i % 5 === 0
                    ? "bg-pink-500"
                    : i % 5 === 1
                      ? "bg-cyan-500"
                      : i % 5 === 2
                        ? "bg-amber-500"
                        : i % 5 === 3
                          ? "bg-purple-500"
                          : "bg-green-500"
                }`}
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.5 + 0.3,
                  scale: Math.random() * 1.5 + 0.5,
                }}
                animate={{
                  y: [null, Math.random() * 100 + "%"],
                  x: [null, Math.random() * 20 - 10 + "%"],
                  opacity: [null, Math.random() > 0.5 ? 0 : 0.5],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                style={{
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                }}
              />
            ))}
          </div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-center text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeIn} className="space-y-6 mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Discord's Cutest Virtual Cat Companion</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                  Meet MeowBot, Your Virtual Cat Companion
                </h1>
                <p className="max-w-[700px] text-gray-300 text-lg md:text-xl mx-auto">
                  Adopt, care for, and duel with virtual cats in your Discord server. The purr-fect addition to your
                  community!
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="https://discord.com/oauth2/authorize?client_id=1371604635231715448&permissions=8&integration_type=0&scope=bot"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 group text-base py-6 px-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    Add to Discord
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="https://discord.gg/EkBUyfyvAt" target="_blank" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 text-base py-6 px-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    Join Support Server
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gradient-to-b from-[#2a1052] to-[#1a0b2e] relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r blur-3xl opacity-20"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: [null, `${Math.random() * 20 - 10 + 50}%`],
                  y: [null, `${Math.random() * 20 - 10 + 50}%`],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  background:
                    i % 3 === 0
                      ? "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)"
                      : i % 3 === 1
                        ? "radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(34,211,238,0) 70%)"
                        : "radial-gradient(circle, rgba(217,119,6,0.3) 0%, rgba(217,119,6,0) 70%)",
                }}
              />
            ))}
          </div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20 text-amber-400 text-sm font-medium mb-2">
                <Star className="h-4 w-4 mr-2" />
                <span>Powerful Features</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  Everything Your Server Needs
                </h2>
                <p className="max-w-[800px] text-gray-300 text-lg">
                  Create a thriving cat community on Discord with these amazing features
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div
                variants={itemFade}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center space-y-4 rounded-xl border border-pink-800/30 p-6 shadow-sm transition-all hover:border-pink-500/50 hover:bg-pink-500/5 bg-gradient-to-br from-[#2a2a30]/40 to-pink-900/10"
              >
                <div className="rounded-full bg-pink-500/10 p-3 group-hover:bg-pink-500/20 transition-colors">
                  <Cat className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-pink-300">Virtual Cat Adoption</h3>
                <p className="text-center text-gray-300 text-base">
                  Adopt your own unique virtual cat with different breeds, personalities, and traits.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center space-y-4 rounded-xl border border-cyan-800/30 p-6 shadow-sm transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5 bg-gradient-to-br from-[#2a2a30]/40 to-cyan-900/10"
              >
                <div className="rounded-full bg-cyan-500/10 p-3 group-hover:bg-cyan-500/20 transition-colors">
                  <Heart className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-cyan-300">Cat Care System</h3>
                <p className="text-center text-gray-300 text-base">
                  Feed, pet, and play with your cat to keep them happy and healthy.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center space-y-4 rounded-xl border border-purple-800/30 p-6 shadow-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/5 bg-gradient-to-br from-[#2a2a30]/40 to-purple-900/10"
              >
                <div className="rounded-full bg-purple-500/10 p-3 group-hover:bg-purple-500/20 transition-colors">
                  <ShoppingBag className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-purple-300">Cat Shop</h3>
                <p className="text-center text-gray-300 text-base">
                  Earn fishcoins and buy toys, food, and accessories for your virtual cat.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center space-y-4 rounded-xl border border-amber-800/30 p-6 shadow-sm transition-all hover:border-amber-500/50 hover:bg-amber-500/5 bg-gradient-to-br from-[#2a2a30]/40 to-amber-900/10"
              >
                <div className="rounded-full bg-amber-500/10 p-3 group-hover:bg-amber-500/20 transition-colors">
                  <Swords className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-amber-300">Cat Duels</h3>
                <p className="text-center text-gray-300 text-base">
                  Challenge other users' cats to duels and earn rewards.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center space-y-4 rounded-xl border border-green-800/30 p-6 shadow-sm transition-all hover:border-green-500/50 hover:bg-green-500/5 bg-gradient-to-br from-[#2a2a30]/40 to-green-900/10"
              >
                <div className="rounded-full bg-green-500/10 p-3 group-hover:bg-green-500/20 transition-colors">
                  <Calendar className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-300">Daily Rewards</h3>
                <p className="text-center text-gray-300 text-base">
                  Claim daily fishcoins to spend in the shop and progress faster.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center space-y-4 rounded-xl border border-blue-800/30 p-6 shadow-sm transition-all hover:border-blue-500/50 hover:bg-blue-500/5 bg-gradient-to-br from-[#2a2a30]/40 to-blue-900/10"
              >
                <div className="rounded-full bg-blue-500/10 p-3 group-hover:bg-blue-500/20 transition-colors">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-300">Community Building</h3>
                <p className="text-center text-gray-300 text-base">
                  Create a fun, engaging experience for your Discord community.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Commands Section */}
        <section id="commands" className="py-16 bg-gradient-to-b from-[#1a0b2e] to-[#0f0f19] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/20 via-cyan-900/10 to-transparent"></div>
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/20 text-blue-400 text-sm font-medium mb-2">
                <Zap className="h-4 w-4 mr-2" />
                <span>Simple Commands</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                  Easy to Use Commands
                </h2>
                <p className="max-w-[800px] text-gray-300 text-lg">
                  Simple slash commands to interact with your virtual cat
                </p>
              </div>
            </motion.div>

            <div className="mt-8 max-w-5xl mx-auto">
              <div className="bg-[#2a2a30]/70 border border-gray-700 rounded-xl overflow-hidden">
                <div className="flex items-center px-4 py-2 border-b border-gray-700 bg-gradient-to-r from-[#2a2a30] to-[#252530]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-base text-gray-300">Discord Commands</div>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-gradient-to-br from-[#252530]/50 to-[#2a2a30]/50"
                >
                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-pink-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-pink-900/10 p-4 transition-all hover:border-pink-500/50 hover:bg-pink-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-pink-500/20 flex items-center justify-center text-pink-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-pink-400">/adopt</h3>
                        <p className="text-gray-300 text-sm">Adopt your own virtual cat</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-cyan-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-cyan-900/10 p-4 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-cyan-400">/feed</h3>
                        <p className="text-gray-300 text-sm">Feed your cat to reduce hunger</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-purple-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-purple-900/10 p-4 transition-all hover:border-purple-500/50 hover:bg-purple-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-purple-400">/pet</h3>
                        <p className="text-gray-300 text-sm">Pet your cat to increase happiness</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-amber-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-amber-900/10 p-4 transition-all hover:border-amber-500/50 hover:bg-amber-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-amber-400">/catstats</h3>
                        <p className="text-gray-300 text-sm">Check your cat's stats</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-green-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-green-900/10 p-4 transition-all hover:border-green-500/50 hover:bg-green-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center text-green-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-green-400">/shop</h3>
                        <p className="text-gray-300 text-sm">View items available in the shop</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-blue-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-blue-900/10 p-4 transition-all hover:border-blue-500/50 hover:bg-blue-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-blue-400">/buy</h3>
                        <p className="text-gray-300 text-sm">Purchase items from the shop</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-pink-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-pink-900/10 p-4 transition-all hover:border-pink-500/50 hover:bg-pink-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-pink-500/20 flex items-center justify-center text-pink-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-pink-400">/inventory</h3>
                        <p className="text-gray-300 text-sm">View your cat's inventory</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-cyan-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-cyan-900/10 p-4 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-cyan-400">/daily</h3>
                        <p className="text-gray-300 text-sm">Claim your daily fishcoins</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-purple-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-purple-900/10 p-4 transition-all hover:border-purple-500/50 hover:bg-purple-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-purple-400">/duel</h3>
                        <p className="text-gray-300 text-sm">Challenge another user's cat to a duel</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-amber-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-amber-900/10 p-4 transition-all hover:border-amber-500/50 hover:bg-amber-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-amber-400">/catpic</h3>
                        <p className="text-gray-300 text-sm">Get a random cat picture</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemFade}
                    className="group rounded-lg border border-green-800/30 bg-gradient-to-br from-[#2a2a30]/30 to-green-900/10 p-4 transition-all hover:border-green-500/50 hover:bg-green-500/5"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center text-green-400 text-base">
                          /
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-green-400">/catfact</h3>
                        <p className="text-gray-300 text-sm">Get a random cat fact</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-[#0f0f19] to-[#0f0f19] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-600/20 via-pink-900/10 to-transparent"></div>
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.03]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20 text-purple-400 text-sm font-medium mb-2">
                <Gift className="h-4 w-4 mr-2" />
                <span>Get Started Today</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Ready to adopt your virtual cat?
                </h2>
                <p className="max-w-[800px] text-gray-300 text-lg">
                  Add MeowBot to your Discord server today and start your cat adventure!
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mt-6"
              >
                <Link
                  href="https://discord.com/oauth2/authorize?client_id=1371604635231715448&permissions=8&integration_type=0&scope=bot"
                  target="_blank"
                >
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 group text-base py-6 px-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    Add to Discord
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="https://discord.gg/EkBUyfyvAt" target="_blank">
                  <Button
                    variant="outline"
                    className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 text-base py-6 px-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    Join Support Server
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 py-6 md:py-0 bg-[#0f0f19]">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Cat className="h-5 w-5 text-pink-500" />
            <p className="text-sm text-gray-400">© 2025 MeowBot. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <Link
              href="https://discord.gg/EkBUyfyvAt"
              target="_blank"
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Support Server
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
