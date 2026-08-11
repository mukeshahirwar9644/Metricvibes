<?php  ?>

<section class="section section--alt" id="tech-stack">
    <div class="container">
        <div class="section__header">
            <span class="section__badge"><i class="fas fa-microchip"></i> Technology</span>
            <h2 class="section__title">Our <span class="text-gradient">Technology Stack</span></h2>
            <p class="section__subtitle">
                We work with the best tools and platforms to deliver enterprise-grade solutions.
            </p>
        </div>

        <?php
        $row1 = [
            ['name' => 'Google Cloud', 'icon' => 'fab fa-google', 'color' => '#4285F4'],
            ['name' => 'AWS', 'icon' => 'fab fa-aws', 'color' => '#FF9900'],
            ['name' => 'Azure', 'icon' => 'fab fa-microsoft', 'color' => '#0089D6'],
            ['name' => 'BigQuery', 'icon' => 'fas fa-database', 'color' => '#669DF6'],
            ['name' => 'Snowflake', 'icon' => 'far fa-snowflake', 'color' => '#29B5E8'],
            ['name' => 'Python', 'icon' => 'fab fa-python', 'color' => '#3776AB'],
            ['name' => 'TensorFlow', 'icon' => 'fas fa-brain', 'color' => '#FF6F00'],
            ['name' => 'Kubernetes', 'icon' => 'fas fa-dharmachakra', 'color' => '#326CE5'],
            ['name' => 'Docker', 'icon' => 'fab fa-docker', 'color' => '#2496ED'],
            ['name' => 'Terraform', 'icon' => 'fas fa-cube', 'color' => '#844FBA'],
        ];

        $row2 = [
            ['name' => 'GA4', 'icon' => 'fas fa-chart-line', 'color' => '#F4B400'],
            ['name' => 'Adobe Analytics', 'icon' => 'fab fa-adobe', 'color' => '#EB1000'],
            ['name' => 'Mixpanel', 'icon' => 'fas fa-flask', 'color' => '#7856FF'],
            ['name' => 'Amplitude', 'icon' => 'fas fa-wave-square', 'color' => '#205BF1'],
            ['name' => 'Looker Studio', 'icon' => 'fas fa-chart-pie', 'color' => '#4285F4'],
            ['name' => 'Power BI', 'icon' => 'fas fa-gauge-high', 'color' => '#F2C811'],
            ['name' => 'Tableau', 'icon' => 'fas fa-table-columns', 'color' => '#E97627'],
            ['name' => 'Firebase', 'icon' => 'fas fa-fire', 'color' => '#FFCA28'],
            ['name' => 'OpenAI', 'icon' => 'fas fa-robot', 'color' => '#10A37F'],
            ['name' => 'LangChain', 'icon' => 'fas fa-link', 'color' => '#F04D2A'],
        ];
        ?>

        <!-- Row 1 — Scrolling Left -->
        <div class="tech-stack__row">
            <div class="tech-stack__track tech-stack__track--left">
                <?php foreach (array_merge($row1, $row1) as $tech): ?>
                    <div class="tech-stack__item">
                        <i class="<?= $tech['icon'] ?> tech-stack__item-icon" style="color: <?= $tech['color'] ?>;"></i>
                        <span class="tech-stack__item-name"><?= $tech['name'] ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Row 2 — Scrolling Right -->
        <div class="tech-stack__row">
            <div class="tech-stack__track tech-stack__track--right">
                <?php foreach (array_merge($row2, $row2) as $tech): ?>
                    <div class="tech-stack__item">
                        <i class="<?= $tech['icon'] ?> tech-stack__item-icon" style="color: <?= $tech['color'] ?>;"></i>
                        <span class="tech-stack__item-name"><?= $tech['name'] ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
