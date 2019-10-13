import React from "react"
import Header from "../components/header"
import { H2, H3, Text, UnorderedList, ListItem } from "../components/type"
import Link from "../components/link"
import SEO from "../components/seo"

const Uses = () => (
  <div>
    <SEO title="Uses" />
    <Header
      heading="Uses"
      subheading="Below is a summary of all the software and hardware I use"
    />
    <H2>Hardware</H2>
    <Text>
      I use a Lenovo X260 laptop running Arch Linux for most development work. I
      also use a 2018 Macbook Pro for work specifically for my employer.
    </Text>
    <H2>Software</H2>
    <Text>
      I have quite different configurations for both Arch Linux and MacOS:
    </Text>
    <H3>Arch Linux</H3>
    <Text>
      I use <Link to="https://i3wm.org/">i3wm</Link> tiling window manager as I
      find laying out and managing multiple windows with the keyboard more
      efficient than a more traditional window manager. I use{" "}
      <Link to="https://tools.suckless.org/dmenu/">dmenu</Link> to launch
      applications and{" "}
      <Link to="https://github.com/polybar/polybar">Polybar</Link> to display
      system information.
    </Text>
    <Text>
      My terminal emulator of choice is{" "}
      <Link to="https://github.com/thestinger/termite">Termite</Link>.
    </Text>
    <Text>
      My configuration files are all available on{" "}
      <Link to="https://github.com/danhead/dotfiles">Github</Link>.
    </Text>
    <H3>MacOS</H3>
    <Text>
      By comparison, my MacOS software is quite a bit more generic by
      comparison, there are a few key pieces of software I use to improve my
      productivity:
    </Text>
    <Text>
      I use <Link to="https://www.alfredapp.com/">Alfred</Link> as a straight
      replacement for Spotlight and{" "}
      <Link to="https://folivora.ai/">BetterTouchTool</Link> to bring some much
      needed window tiling workflows.
    </Text>
    <Text>
      <Link to="https://brew.sh">Homebrew</Link> to install and maintain
      packages.
    </Text>
    <Text>
      I've used <Link to="https://www.iterm2.com/">iTerm2</Link> on MacOS for
      many years, however I've recently made te jump to{" "}
      <Link to="https://hyper.is/">Hyper</Link>.
    </Text>
    <H3>Editor</H3>
    <Text>
      One of the few pieces of software that's common across both of my
      operating systems:
    </Text>
    <Text>
      <Link to="https://www.vim.org/">Vim</Link>.
    </Text>
    <Text>
      For many years I had used Jetbrains{" "}
      <Link to="https://www.jetbrains.com/phpstorm">PHPStorm</Link> and later{" "}
      <Link to="https://www.jetbrains.com/webstorm">WebStorm</Link>, however I
      found myself not using the majority of the features provided and longed
      for a leaner, more efficient editor. I had already used Vim sporadically
      when working on remote Linux servers so I was able to switch without too
      much of a hit to my productivity.
    </Text>
    <Text>The benefits to me can be boiled down to three points:</Text>
    <UnorderedList>
      <ListItem>
        <Link to="https://github.com/vim/vim">Open source</Link> and ubiquitous
      </ListItem>
      <ListItem>Lightweight and responsive</ListItem>
      <ListItem>Improved efficiency by negating the use of a mouse</ListItem>
    </UnorderedList>
    <Text>
      I use <Link to="https://github.com/junegunn/vim-plug">vim-plug</Link> to
      maintain a collection of plugins to add features I use regularly. The
      plugins I enable vary depending on the technologies I am working with at
      the time, however there are a few that I rely upon all the time:
    </Text>
    <UnorderedList>
      <ListItem>
        <Link to="https://github.com/vim-airline/vim-airline">vim-airline</Link>{" "}
        - Adds a status bar
      </ListItem>
      <ListItem>
        <Link to="https://github.com/ctrlpvim/ctrlp.vim">ctrlp</Link> - A fuzzy
        search tool to load files
      </ListItem>
      <ListItem>
        <Link to="https://github.com/scrooloose/nerdtree">Nerdtree</Link> - A
        tree file explorer
      </ListItem>
      <ListItem>
        <Link to="https://github.com/ryanoasis/vim-devicons">devicons</Link> -
        Adds icons to ctrlp and Nerdtree
      </ListItem>
      <ListItem>
        <Link to="https://github.com/editorconfig/editorconfig-vim">
          editorconfig
        </Link>{" "}
        - Enable support for{" "}
        <Link to="https://editorconfig.org/">Editorconfig</Link> files
      </ListItem>
      <ListItem>
        <Link to="https://github.com/pangloss/vim-javascript">
          vim-javascript
        </Link>{" "}
        - JavaScript indentation and syntax support
      </ListItem>
      <ListItem>
        <Link to="https://github.com/valloric/youcompleteme">
          YouCompleteMe
        </Link>{" "}
        - A code-completion engine
      </ListItem>
      <ListItem>
        <Link to="https://github.com/w0rp/ale">ale</Link> - Syntax checker
      </ListItem>
    </UnorderedList>
    <Text>
      See my{" "}
      <Link to="https://github.com/danhead/dotfiles/blob/master/vim/.vimrc">
        dotfiles repo
      </Link>{" "}
      for my full Vim config file.
    </Text>
  </div>
)

export default Uses
