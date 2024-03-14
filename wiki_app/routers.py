from rest_framework import routers

from .viewsets import ServicioViewSet, TipoViewSet

router = routers.DefaultRouter()

router.register(r'servicio', ServicioViewSet, basename='servicio') #Register Servicio model
router.register(r'tipos', TipoViewSet, basename='tipos') #Register tipos model


urlpatterns = router.urls