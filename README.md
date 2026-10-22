# Printing Press Commercial Website

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL_3.0-blue.svg?style=for-the-badge)](LICENSE)

</div>

A commercial web platform for an offset and digital printing press. Showcases commercial publishing services including business stationery, brochures, vinyl banners, and custom flex printing.

---

## Service Flow

```mermaid
graph TD
    Client[Prospective Client] --> Catalog[Explore Printing Catalog]
    Catalog --> Category{Service Selection}
    
    Category --> Offset[Offset Commercial Printing]
    Category --> Flex[Vinyl & Banner Flex Printing]
    Category --> Digital[Short-Run Digital Prints]
    
    Offset --> Spec[Material & Paper Quality Specifications]
    Flex --> Spec
    Digital --> Spec
    
    Spec --> Quote[Submit Quotation Request & Direct Order Inquiries]
```

---

## Features

- **Commercial Printing Catalog**: Detailed overviews of visiting cards, brochures, banners, and wedding invitation printing.
- **Visual Portfolio Gallery**: High-resolution showcase of past printing and finishing samples.
- **Responsive Web Interface**: Optimized across mobile phones, tablets, and desktop workstations.
- **Fast Performance**: Pure vanilla web technology stack without heavy frontend dependencies.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Midhun-M-git/press-website.git
   cd press-website
   ```

2. Open in browser:
   ```bash
   open index.html
   ```

---

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.
