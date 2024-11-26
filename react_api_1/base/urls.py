from django.contrib import admin
from django.urls import path,include
from .views import validate,get_nmap,get_meta,get_scan,get_host,get_meta_host,get_meta_service,get_meta_vulnerability,get_meta_scan,check_login,add_user,send_csv,send_users,get_nmap_by_id,update_scan,add_Scan,delete_scan,get_meta_id,update_meta_id,delete_meta_id,VA_chartAPI, asset_summary,addMeta,delete_multiple_scan 

urlpatterns = [
    path("nmap/", get_nmap ,name="get_nmap"),
    path("meta/",get_meta,name="get_meta"),
    path("scan/",get_scan,name="get_scan"),
    path('nmap/<int:id>',get_nmap_by_id,name="get_scan_by_id"),
    path("meta_scan/",get_meta_scan,name="get_meta_scan"),
    path("host/",get_host,name="get_host"),
    path("meta_host/",get_meta_host,name="get_meta_host"),
    path("meta_service/",get_meta_service,name="get_meta_service"),
    path("meta_vulnerability/",get_meta_vulnerability,name="get_meta_vulnerability"),
    path("checkLogin/",check_login,name="checkLogin"),
    path('validate/',validate),
    path("addUser/",add_user,name="addUser/"),
    path("sendCSV/",send_csv,name="sendCSV"),
    path('getuser/',send_users,name="getuser"),
    path('scanUpdate/<int:id>/',update_scan,name="update_scan"),
    path('addScan/',add_Scan,name="add_scan"),
    path('scanDelete/',delete_multiple_scan,name="delete_scan"),
    path('getmeta/<int:id>/',get_meta_id,name="get_meta_id"),
    path('metaDelete/<int:id>/',delete_meta_id,name='delete_meta_id'),
    path('metaUpdate/<int:id>/',update_meta_id,name='update_meta_id'),
    path('addMeta/',addMeta,name='add_meta'),
    path('va_chartAPI/',VA_chartAPI,name="va_chartAPI"),
    path('asset_summary/',asset_summary, name="asset_summary"),
    # path('addscantable/',,name="add_scan_table"),
]
