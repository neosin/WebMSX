// Copyright 2015 by Paulo Augusto Peccin. See license.txt distributed with this file.

// WebMSX version 0.9

// Main Emulator parameters.
// You may change any of these after loading the project and before starting the Emulator

WMSX = {

    BIOS_URL:                       "",                         // Full or relative URL of BIOS ROM
    EXPANSION0_URL:                 "",                         // Full or relative URL of System Expansion 0 ROM
    EXPANSION1_URL:                 "",                         // Full or relative URL of System Expansion 1 ROM
    EXPANSION2_URL:                 "",                         // Full or relative URL of System Expansion 2 ROM
    CARTRIDGE1_URL:                 "",                         // Full or relative URL of Cartridge 1 ROM
    CARTRIDGE2_URL:                 "",                         // Full or relative URL of Cartridge 2 ROM
    DISKA_URL:                      "",                         // Full or relative URL of Disk A image file
    DISKB_URL:                      "",                         // Full or relative URL of Disk B image file
    TAPE_URL:                       "",                         // Full or relative URL of TAPE image file
    STATE_LOAD_URL:                 "",                         // Full or relative URL of State file to start (takes precedence)
    AUTO_START_DELAY:               1200,                       // Negative = No Auto-Start, Positive = Start then wait specified milliseconds before Auto-Load/Power-on
    MEDIA_CHANGE_DISABLED:          false,
    SCREEN_RESIZE_DISABLED:         false,
    SCREEN_FULLSCREEN_DISABLED:     false,
    SCREEN_FILTER_MODE:             1,                          // 0..3
    SCREEN_CRT_MODE:                -1,                         // 0..4, -1 = auto
    SCREEN_OPENING_SIZE:            2.5,                        // 1..4, 0.5 steps
    SCREEN_SHARP_SIZE:              2,                          // 1..4. Don't change! :-)
    SCREEN_CONTROL_BAR:             0,                          // 0 = Always, 1 = Hover, 2 = Original Javatari
    SCREEN_NATURAL_FPS:             60,                         // 60, 50 fps. Don't change! :-)
    SCREEN_COLOR_MODE:              0,                          // 0..5
    AUDIO_BUFFER_SIZE:              512,                        // 256, 512, 1024, 2048, 4096, 8192. 0 = disable. More buffer = more delay
    SCREEN_ELEMENT_ID:              "wmsx-screen",
    IMAGES_PATH:                    window.WMSX_IMAGES_PATH || "wmsx/",

    VERSION:                        "version 0.9"               // Don't change!

};

wmsx = window.wmsx || {};           // Namespace for all classes and objects
