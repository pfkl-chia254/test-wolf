<header class="banner">
  <div class="container flex justify-between items-center h-36">
      {{-- <a class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a> --}}
      <a class="brand w-44" href="{{ home_url('/') }}">
        <img src="@asset('images/logo_black.svg')" alt="" class="logo">
      </a>
      <nav class="nav-primary uppercase font-bold">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
        @endif
        <a class="mx-2 opacity-40 hover:opacity-100" href="{{ home_url('/') }}wie-we-zijn/">wie we zijn</a>
        <a class="mx-2 opacity-40 hover:opacity-100" href="{{ home_url('/') }}wat-we-doen/">wat we doen</a>
        <a class="mx-2 opacity-40 hover:opacity-100" href="{{ home_url('/') }}projecten/">projecten</a>
        <a class="mx-2 opacity-40 hover:opacity-100" href="{{ home_url('/') }}inspiratie-en-nieuws/">inspiratie en nieuws</a>
        <a class="mx-2 opacity-40 hover:opacity-100" href="{{ home_url('/') }}contact/">contact</a>
      </nav>
  </div>
</header>
