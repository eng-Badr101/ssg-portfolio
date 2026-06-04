import re

with open('index.html', 'r') as f:
    content = f.read()

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

content = re.sub(
    r'<!-- ================================================================\s*9\. MEDIA GALLERY.*?================================================================ -->\s*<section id="gallery".*?</section>',
    gallery_html,
    content,
    flags=re.DOTALL
)

with open('index.html', 'w') as f:
    f.write(content)
