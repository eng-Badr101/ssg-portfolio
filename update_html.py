import re

with open('index.html', 'r') as f:
    content = f.read()

# 1. Update Hero Image
content = re.sub(
    r'<img src="assets/images/optimized/hero-main\.jpg"[^>]+>',
    '<img data-photo-category="hero" data-photo-index="0" alt="SSG Scout carrying the Elsalam flag" loading="eager">',
    content
)

# 2. Update About Image
content = re.sub(
    r'<img data-src="assets/images/optimized/camp-aswan-1\.jpg"[^>]+>',
    '<img data-photo-category="about" data-photo-index="0" alt="SSG scouts leadership" class="lazy-image w-full h-full object-cover" loading="lazy">',
    content
)

# 3. Update Impact Background
# Wait, impact section didn't have an image originally, it was just a metric dashboard. 
# But in PHOTO_MAP I have two impact images. Let me check if impact has images.
# I'll leave impact alone if there are no images currently, or I'll inject them if needed.

# 4. Programs Images (What We Do)
# Re-mapping the 4 experience cards.
content = re.sub(
    r'<img data-src="assets/images/optimized/camp-hurghada-1\.jpg"',
    '<img data-photo-category="programs" data-photo-index="0"',
    content
)
content = re.sub(
    r'<img data-src="assets/images/optimized/camp-aswan-2\.jpg"',
    '<img data-photo-category="programs" data-photo-index="1"',
    content
)
content = re.sub(
    r'<img data-src="assets/images/optimized/ceremony-2\.jpg"',
    '<img data-photo-category="programs" data-photo-index="2"',
    content
)
content = re.sub(
    r'<img data-src="assets/images/optimized/activity-1\.jpg"',
    '<img data-photo-category="programs" data-photo-index="3"',
    content
)

# 5. Insert Camps Section before Ceremony
camps_section = """
    <!-- ================================================================
         NEW. CAMPS & EXPEDITIONS
         ================================================================ -->
    <section id="camps" class="relative py-28 md:py-36 overflow-hidden bg-dark-900">
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center mb-20 reveal">
                <span class="section-label mb-4 block">Outdoor Experience</span>
                <h2 class="section-title font-display font-700 text-cream">Adventures That Build Character</h2>
                <p class="section-subtitle mt-6 max-w-2xl mx-auto font-body text-cream/70 text-lg">
                    Immersive camping and expedition programs designed to foster independence, resilience, and lifelong bonds in the great outdoors.
                </p>
            </div>
            
            <div class="camps-parallax-container reveal" data-speed="0.9">
                <div class="camps-parallax-img-1 image-zoom-wrapper">
                    <img data-photo-category="camps" data-photo-index="0" class="lazy-image w-full h-full object-cover" alt="Aswan Expedition" loading="lazy">
                </div>
                <div class="camps-parallax-img-2 image-zoom-wrapper" data-speed="1.1">
                    <img data-photo-category="camps" data-photo-index="1" class="lazy-image w-full h-full object-cover" alt="Hiking Adventure" loading="lazy">
                </div>
                <div class="camps-parallax-img-3 image-zoom-wrapper" data-speed="0.85">
                    <img data-photo-category="camps" data-photo-index="2" class="lazy-image w-full h-full object-cover" alt="Campfire" loading="lazy">
                </div>
            </div>
        </div>
    </section>

"""
content = content.replace('    <!-- ================================================================\n         6. CLOSING CEREMONY', camps_section + '    <!-- ================================================================\n         6. CLOSING CEREMONY')

# 6. Ceremony Image
content = re.sub(
    r'<img data-src="assets/images/optimized/ceremony-1\.jpg"[^>]+>',
    '<img data-photo-category="ceremony" data-photo-index="0" alt="SSG Closing Ceremony 2025" class="lazy-image w-full h-full object-cover" loading="lazy">',
    content
)

# 7. Partners Images (Why Partner With Us)
content = re.sub(
    r'<img data-src="assets/images/optimized/ceremony-3\.jpg"',
    '<img data-photo-category="partners" data-photo-index="0"',
    content
)
content = re.sub(
    r'<img data-src="assets/images/optimized/ceremony-4\.jpg"',
    '<img data-photo-category="partners" data-photo-index="1"',
    content
)

# 8. Gallery Overhaul
gallery_html = """
    <!-- ================================================================
         9. MEDIA GALLERY
         ================================================================ -->
    <section id="gallery" class="relative py-28 md:py-36 overflow-hidden">
        <div class="max-w-[90rem] mx-auto px-6 relative z-10">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
                <div>
                    <h2 class="section-title font-display font-700 text-cream">Visual Legacy</h2>
                    <p class="section-subtitle mt-4 max-w-xl font-body text-cream/70 text-lg">
                        A curated look into the moments, ceremonies, and expeditions that define our community.
                    </p>
                </div>
                
                <!-- Filter Buttons -->
                <div class="flex flex-wrap gap-2 md:gap-4">
                    <button class="gallery-filter-btn active bg-scout-600/30 text-cream" data-filter="all">All</button>
                    <button class="gallery-filter-btn text-cream/50" data-filter="camps">Camps</button>
                    <button class="gallery-filter-btn text-cream/50" data-filter="ceremonies">Ceremonies</button>
                    <button class="gallery-filter-btn text-cream/50" data-filter="leadership">Leadership</button>
                    <button class="gallery-filter-btn text-cream/50" data-filter="service">Service</button>
                </div>
            </div>

            <!-- Media Grid -->
            <div class="media-gallery-grid reveal">
                <div class="media-gallery-item media-gallery-item--tall" data-category="camps">
                    <img data-photo-category="gallery" data-photo-index="0" class="lazy-image" alt="SSG Camp Life" loading="lazy">
                    <div class="media-gallery-caption">Camp Hurghada</div>
                </div>
                <div class="media-gallery-item" data-category="camps">
                    <img data-photo-category="gallery" data-photo-index="1" class="lazy-image" alt="Camp Activities" loading="lazy">
                    <div class="media-gallery-caption">Outdoor Adventure</div>
                </div>
                <div class="media-gallery-item media-gallery-item--wide" data-category="ceremonies">
                    <img data-photo-category="gallery" data-photo-index="2" class="lazy-image" alt="Ceremony Stage" loading="lazy">
                    <div class="media-gallery-caption">Closing Ceremony</div>
                </div>
                <div class="media-gallery-item" data-category="ceremonies">
                    <img data-photo-category="gallery" data-photo-index="3" class="lazy-image" alt="Ceremony Crowd" loading="lazy">
                    <div class="media-gallery-caption">Community Gathering</div>
                </div>
                <div class="media-gallery-item media-gallery-item--tall" data-category="ceremonies">
                    <img data-photo-category="gallery" data-photo-index="4" class="lazy-image" alt="Awards Ceremony" loading="lazy">
                    <div class="media-gallery-caption">Scout Awards</div>
                </div>
                <div class="media-gallery-item" data-category="service">
                    <img data-photo-category="gallery" data-photo-index="5" class="lazy-image" alt="Community Service" loading="lazy">
                    <div class="media-gallery-caption">Community Service</div>
                </div>
                <div class="media-gallery-item" data-category="camps">
                    <img data-photo-category="gallery" data-photo-index="7" class="lazy-image" alt="Aswan Trip" loading="lazy">
                    <div class="media-gallery-caption">Aswan Expedition</div>
                </div>
                <div class="media-gallery-item media-gallery-item--wide" data-category="leadership">
                    <img data-photo-category="gallery" data-photo-index="8" class="lazy-image" alt="Leadership Training" loading="lazy">
                    <div class="media-gallery-caption">Leadership Training</div>
                </div>
            </div>
        </div>
    </section>
"""

# Replace old gallery section with new gallery section
import re
content = re.sub(
    r'<!-- ================================================================\s*9\. MEDIA GALLERY\s*================================================================ -->\s*<section id="gallery".*?</section>',
    gallery_html,
    content,
    flags=re.DOTALL
)

with open('index.html', 'w') as f:
    f.write(content)
